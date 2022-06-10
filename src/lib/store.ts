import {writable} from "svelte/store";

export let connected = writable<boolean>(false)

export const server = writable<string>(localStorage.getItem("server") ?? "")
export const name = writable<string>(localStorage.getItem("name") ?? "")

server.subscribe(value => window.localStorage.setItem("server", value))
name.subscribe(value => window.localStorage.setItem("name", value))