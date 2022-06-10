<script lang="ts">
    import Button from "../helper/Button.svelte";
    import Input from "../helper/Input.svelte";
    import {pingServer} from "../../api/client";
    import {server, name} from "../../store";

    enum Stage {
        SERVER,
        NAME,
        MATCH
    }

    let value: String
    let loading = false
    let stage = Stage.SERVER
    let ping: number

    export let step = async () => {
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
    }
</script>

<div class="wrapper">
    <div class="image">

    </div>

    <div class="holder">
        {#if stage === Stage.SERVER}
            <h1>Verbindung aufbauen</h1>
            <p>
                Die URL ist die Adresse des Game-Servers. Beispielsweise <b on:click={() => value = "http://localhost:3453"}>http://localhost:3453</b>
            </p>
        {:else if stage === Stage.NAME}
            <div class="heading">
                <h1>Namen angeben</h1>
                <h5>{ping}ms</h5>
            </div>
            <p>
                Gib deinen Namen an. Dieser ist für andere Spieler sichtbar
            </p>
        {:else if stage === Stage.MATCH}
            <h1>Match auswählen</h1>
            <p>
                Das Match kann eine belibige Zeichenkette sein. Wenn das Match nicht existiert wird ein neues gestartet
            </p>
        {/if}

        <Input placeholder={stage === Stage.SERVER ? "URL" : stage === Stage.NAME ? "Name" : "ID"} type={stage === Stage.SERVER ? "url" : "text"} bind:value={value} />
        {#if loading}
            <h5>Lade...</h5>
        {:else}
            <Button on:click={step}>{stage === Stage.SERVER ? "Verbinden" : "Weiter"}</Button>
        {/if}
    </div>
</div>

<style lang="less">
    div.wrapper {
        display: grid;
        grid-template-columns: 500px 450px;
        grid-template-rows: 600px;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    div.image {
        background-color: red;
    }

    div.holder {
        padding: 20px;
        text-align: left;

        :global {
            input {
                margin-top: 25px;
            }
            button {
                margin-top: 10px;
            }
        }
    }

    h1 {
        margin: 0;
    }
    h5 {
        color: gray;
    }
    p {
        font-size: 16px;
        margin: 10px 0;
    }
    div.heading {
        display: flex;
        align-items: baseline;
        gap: 10px;

        * {
            margin: 0;
        }
    }
</style>