<script lang="ts">
    import Card from "./Card.svelte";
    import {CardColor, CardType} from "../../util/card.js";
</script>

<div>
    <Card />
    <Card card={{
        type: CardType.SIX,
        color: CardColor.BLUE,
    }} />
</div>

<style lang="less">
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        padding: 60px;

        border: 2px solid #FAAD14;
        border-radius: 15px;

        display: flex;
        gap: 60px;
    }
</style>