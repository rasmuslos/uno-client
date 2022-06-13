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
        border: 1px solid #FAAD14;

        font-size: 0.8em;
        font-family: "OpenSans", sans-serif;

        background-color: transparent;
        color: #FDFDFD;

        padding: 7px;
        border-radius: 5px;
        box-sizing: border-box;
    }
</style>