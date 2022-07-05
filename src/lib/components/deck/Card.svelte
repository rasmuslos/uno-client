<script lang="ts">
    import {Card} from "../../util/card";
    import {getColor} from "../../util/card.js";

    export let card: Card | null = null
    export let size: "small" | "big" = "small"
    export let noRotate = false
    export let onClick: ((event: MouseEvent) => any) | null = null

    const hidden = card?.type == null || card?.color == null
    const random = () => 7 - Math.floor(Math.random() * 16)
</script>

<div style="background-color: {getColor(card?.color)}; top: {random()}px; left: {random()}px; transform: rotate({random()}deg)" class:hidden class:noRotate class={size} class:clickable={onClick != null} on:click={onClick}>
    {#if hidden}
        <span>O</span>
    {:else}
        <span>{card?.type}</span>
    {/if}
</div>

<style lang="less">
    div {
        height: 4em;
        width: 2.75em;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;

        user-select: none;
        cursor: default;

        border: 2px solid #75520D;
        border-radius: 10px;

        position: relative;
        background-color: #262626;

        &:not(.hidden) {
            color: white;
        }
        &.noRotate {
            top: 0 !important;
            transform: none !important;
        }
        &.clickable {
            cursor: pointer;
        }
        &:hover {
            z-index: 9;
        }
    }

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>