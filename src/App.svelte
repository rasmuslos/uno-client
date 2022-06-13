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
        @bp-small: 48em; // 768px
        @bp-medium: 64em; // 1024px
        @bp-large: 85.375em; // 1366px
        @bp-xlarge: 120em; // 1920px
        @bp-xxlarge: 160em; // 2560px

        // Media Queries
        @mq-small: (min-width: @bp-small);
        @mq-medium: (min-width: @bp-medium);
        @mq-large: (min-width: @bp-large);
        @mq-xlarge: (min-width: @bp-xlarge);
        @mq-xxlarge: (min-width: @bp-xxlarge);
        @mq-retina: (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi);

        // Font-Size
        @base-font-size: 1em;
        @base-line-height: 1.3;

        body {
            position: relative;
            padding: 0;
            margin: 0;

            font-family: "OpenSans", sans-serif;
            color: #FAAD14;
            background: #262626;

            height: 100vh;
            width: 100vw;

            // font-size: 20px;
            overflow: hidden;

            font-size: @base-font-size;
            line-height: @base-line-height;

            @media screen and @mq-medium {
                font-size: @base-font-size*1.2;
                line-height: @base-line-height*1.2;
            }

            @media @mq-large {
                font-size: @base-font-size*1.3;
            }

            @media @mq-xlarge {
                font-size: @base-font-size*1.4;
            }

            @media @mq-xxlarge {
                font-size: @base-font-size*1.6;
            }
        }

        *, *:focus {
            outline: none;
            box-sizing: border-box;
        }
    }
</style>