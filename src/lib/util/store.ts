import {writable} from "svelte/store";
import Phase from "./phase";
import type Player from "./player";

export let connected = writable<boolean>(false)

export const server = writable<string>(localStorage.getItem("server") ?? "")
export const name = writable<string>(localStorage.getItem("name") ?? "")

export const phase = writable<Phase>(Phase.PREGAME)
export const self = writable<Player>()

export const top = writable<{
    color: any,
    type: any,
}>()
export const deck = writable<{
    color: any,
    type: any,
}[]>([])
export const players = writable<Player[]>([])
export const active = writable<Player>({
    name: "",
    id: "",
    next: "",
    cards: 0,
    previous: "",
    ready: true,
})

server.subscribe(value => window.localStorage.setItem("server", value))
name.subscribe(value => window.localStorage.setItem("name", value))