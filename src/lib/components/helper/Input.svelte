<script lang="ts">
    export let placeholder: String
    export let value: String = ""
    export let type: String = "text"

    const handleInput = event => {
        value = type.match(/^(number|range)$/) ? + event.target.value : event.target.value
    }
</script>

<input {value} {placeholder} on:input={handleInput} />

<style>
    input {
        width: 100%;
        border: none;

        font-size: 16px;
        font-family: "KdamThmorPro", sans-serif;

        background-color: transparent;
        color: #FDFDFD;

        padding: 5px;
        border-radius: 5px;
    }
</style>