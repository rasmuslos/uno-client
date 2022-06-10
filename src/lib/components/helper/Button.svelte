<script lang="ts">
</script>

<button on:click>
    <slot />
</button>

<style>
    button {
        display: block;
        margin: 0 auto;
        border: none;

        font-size: 16px;
        font-family: "KdamThmorPro", sans-serif;

        background-color: #FDFDFD;
        color: black;

        padding: 10px;
        border-radius: 5px;
    }
</style>