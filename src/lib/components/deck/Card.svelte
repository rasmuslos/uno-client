<script lang="ts">
    import {Card} from "../../util/card";
    import {getColor} from "../../util/card.js";

    export let card: Card | null = null

    const hidden = card?.type == null || card?.color == null
</script>

<div style={`background-color: ${getColor(card?.color)}`} class:hidden>
    {#if hidden}
        MAKE ME BETTER
    {:else}
        STILL MAKE ME BETTER
        <br>
        COLOR: {card?.color}
        <br>
        TYPE: {card?.type}
    {/if}
</div>

<style>
    div {
        height: 200pt;
        width: 140pt;

        border: 2px solid white;
        border-radius: 15px;
    }
    div:not(.hidden) {
        color: white;
    }
</style>