import {writable} from "svelte/store";

export let connected = writable<boolean>(false)

export const server = writable<string>(localStorage.getItem("server") ?? "")
export const name = writable<string>(localStorage.getItem("name") ?? "")