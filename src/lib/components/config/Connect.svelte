<script lang="ts">
    import Button from "../helper/Button.svelte";
    import Input from "../helper/Input.svelte";
    import {pingServer} from "../../api/client";
    import {server, name} from "../../store";
    import {onMount} from "svelte";

    enum Stage {
        SERVER,
        NAME,
        MATCH
    }

    let value: String
    let loading = false
    let stage = Stage.SERVER
    let ping: number

    const step = async () => {
        switch (stage) {
            case Stage.SERVER:
                loading = true
                try {
                    ping = await pingServer(value)
                    server.set(value)

                    value = ""
                    stage = Stage.NAME
                } catch (error) {}

                loading = false
                break
            case Stage.NAME:
                name.set(value)

                value = ""
                stage = Stage.MATCH
                break
            case Stage.MATCH:
                break
        }

        validateValues()
    }
    const validateValues = () => {
        // Theoretically we should validate this
        if(stage === Stage.SERVER && $server != "") stage = Stage.NAME
        if(stage === Stage.NAME && $name != "") stage = Stage.MATCH
    }
    const clear = () => {
        server.set("")
        name.set("")

        stage = Stage.SERVER
    }

    onMount(validateValues)
</script>

<div class="wrapper">
    <!--
    <div class="image">
        <span>U</span><br><span>N</span><br><span>O</span>
    </div>
    -->

    <div class="holder">
        {#if stage === Stage.SERVER}
            <h1>Verbindung aufbauen</h1>
            <p>
                Die URL ist die Adresse des Game-Servers. Beispielsweise <b on:click={() => value = "http://localhost:3453"}>http://localhost:3453</b>
            </p>
        {:else if stage === Stage.NAME}
            <div class="heading">
                <h1>Namen angeben</h1>
                {#if ping != null}
                    <h5>{ping}ms</h5>
                {/if}
            </div>
            <p>
                Gib deinen Namen an. Dieser ist für andere Spieler sichtbar
            </p>
        {:else if stage === Stage.MATCH}
            <h1>Match auswählen</h1>
            <p>
                Das Match kann eine belibige Zeichenkette sein. Wenn das Match nicht existiert wird ein neues gestartet
                <i on:click={clear}>{$server} | {$name} (löschen)</i>
            </p>
        {/if}

        <form on:submit|preventDefault={step} action="" method="get">
            <Input placeholder={stage === Stage.SERVER ? "URL" : stage === Stage.NAME ? "Name" : "ID"} type={stage === Stage.SERVER ? "url" : "text"} bind:value={value} />
            {#if loading}
                <h5>Lade...</h5>
            {:else}
                <Button type="submit">{stage === Stage.SERVER ? "Verbinden" : "Weiter"}</Button>
            {/if}
        </form>
    </div>
</div>

<style lang="less">
    div.wrapper {
        display: grid;
        // grid-template-columns: 15em 25em;
        grid-template-columns: 27em;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    /*
    div.image {
        text-align: center;
        font-size: 3em;

        // background: linear-gradient(180deg, #FFD037 0%, #1371C0 39%, #95D333 66%, #E0311A 100%);
        span:nth-of-type(1) {
            color: #1371C0;
        }
        span:nth-of-type(2) {
            color: #95D333;
        }
        span:nth-of-type(3) {
            color: #E0311A;
        }
    }
    */

    div.holder {
        padding: 2em;
        text-align: left;

        :global {
            input {
                margin: 2em 0 1em 0;
            }
        }
    }

    h1, p {
        margin: 0;
    }
    h5 {
        color: #75520D;
    }
    p {
        font-size: 0.8em;

        i {
            color: #75520D;
        }
        b, i {
            cursor: pointer;
        }
    }
    div.heading {
        display: flex;
        align-items: baseline;
        gap: 0.5em;

        * {
            margin: 0;
        }
    }
</style>