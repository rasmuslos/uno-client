<script lang="ts">
    export let type: "submit" | "button" | "rest" = "button"
</script>

<button on:click {type}>
    <slot />
</button>

<style>
    button {
        display: block;
        margin: 0 auto;
        border: none;

        font-size: 0.8em;
        font-family: "OpenSans", sans-serif;

        background-color: #FAAD14;
        color: white;

        padding: 7px;
        border-radius: 5px;
        box-sizing: border-box;
    }
</style>