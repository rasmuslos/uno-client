<script lang="ts">
    import Card from "./Card.svelte";
    import {active, deck, name, self} from "../../util/store.js"
    import SocketClient from "../../api/socket.js"
</script>

<div class="wrapper">
    <div class="name">
        <h4 class:active={$active.id === $self.id}>{$name}</h4>
        <h6>{$deck.length} Karten</h6>
    </div>
    <div class="holder">
        {#each $deck as card}
            <Card {card} onClick={() => {
                SocketClient.shared.play(card)
            }} />
        {/each}
    </div>
</div>

<style lang="less">
    div.wrapper {
        position: absolute;
        width: 300px;

        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%) scale(125%);
        transform-origin: center;
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