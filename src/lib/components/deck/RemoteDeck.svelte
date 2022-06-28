<script lang="ts">
    import Card from "./Card.svelte";
    import {active} from "../../util/store.js";

    export let name: string
    export let amount: number
    export let orientation: "left" | "top" | "right" = "top"
</script>

<div class="wrapper {orientation}">
    <div class="name">
        <h4 class:active={$active.name === name}>{name}</h4>
        <h6>{amount} Karten</h6>
    </div>
    <div class="holder">
        {#each "#".repeat(amount).split("#") as i}
            <Card />
        {/each}
    </div>
</div>

<style lang="less">
    div.wrapper {
        position: absolute;
        width: 300px;

        &.left {
            top: 45%;
            left: 10%;
            transform: translate(-50%, -50%);
            transform-origin: center left;
        }
        &.top {
            top: 10%;
            left: 55%;
            transform: translate(-50%, -50%);
            transform-origin: center;
        }
        &.right {
            top: 55%;
            right: 15%;
            transform: translate(50%, -50%);
            transform-origin: center right;
        }
    }
    div.holder {
        display: grid;
        grid-template-columns: repeat(auto-fit,  minmax(0.5em, max-content)) ;
        justify-content: center;

        width: 100%;
        height: 100%;
    }

    div.name {
        display: flex;
        align-items: baseline;
        gap: 0.5em;

        h4:not(.active), h6 {
            color: #75520D;
        }
    }
</style>