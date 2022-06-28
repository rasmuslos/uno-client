<script lang="ts">
    import Pile from "../deck/Pile.svelte";
    import RemoteDeck from "../deck/RemoteDeck.svelte";
    import {players, self} from "../../util/store.js";
</script>

<Pile />

{#each $players as player, index}
    {#if player.id !== $self.id}
        <RemoteDeck amount={player.cards ?? 0} name={player.name} orientation={index === 1 ? "left" : index === 2 ? "top" : "right"} />
    {/if}
{/each}