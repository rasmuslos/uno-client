<script lang="ts">
    import {players, self} from "../../util/store.js";
    import Button from "./Button.svelte";
    import SocketClient from "../../api/socket.js";
</script>

{#each $players as player}
    <p class:ready={player.ready}>
        {player.name}
        {#if $self.id === player.id}
            <i>YOU</i>
        {/if}
    </p>
{/each}

<!--
I hate JS / this
<Button on:click={SocketClient.shared.ready}>
-->
<Button on:click={() => SocketClient.shared.ready()}>
    Bereit
</Button>

<i>Ich hatte keine Zeit das schön zu machen</i>

<style lang="less">
    p:not(.ready) {
        color: #75520D;
    }
    i {
        font-size: smaller;
        color: #75520D;
    }
</style>