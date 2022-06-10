<script lang="ts">
    import Board from "./lib/components/board/Board.svelte";
    import Connect from "./lib/components/config/Connect.svelte";
    import {connected} from "./lib/store.js";

</script>

{#if $connected || true}
    <Board />
{:else}
    <Connect />
{/if}

<style lang="less">
    :global {
        body {
            position: relative;
            padding: 0;
            margin: 0;

            font-family: "KdamThmorPro", sans-serif;
            color: #FAAD14;
            background: #262626;

            height: 100vh;
            width: 100vw;

            font-size: 20px;
            overflow: hidden;
        }

        *, *:focus {
            outline: none;
        }
    }
</style>