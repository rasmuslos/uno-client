<script lang="ts">
    import Pile from "../deck/Pile.svelte";
    import RemoteDeck from "../deck/RemoteDeck.svelte";
</script>

<Pile />

<RemoteDeck amount={7} name="Player 1" orientation="left" />
<RemoteDeck amount={10} name="Player 2" orientation="top" />
<RemoteDeck amount={13} name="Player 3" orientation="right" />