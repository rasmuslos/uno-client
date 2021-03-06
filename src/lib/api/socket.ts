import {io, Socket} from 'socket.io-client';
import {get} from "svelte/store";
import {active, connected, deck, name, phase, players, self, server, top} from "../util/store";
import Phase from "../util/phase";
import type {Card} from "../util/card";

class SocketClient {
    public static shared: SocketClient = new SocketClient()

    private client: Socket | undefined

    private constructor() {}

    public connect(matchId: string) {
        this.client = io(get(server), {
            autoConnect: false,
            auth: {
                match: matchId,
                username: get(name),
            },
        })

        this.client.on("error", error => {
            console.error(error)
            alert("Das hat leider nicht geklappt...")
            window.location.reload()
        })
        this.client.on("connect", () => {
            connected.set(true)
            phase.set(Phase.PREGAME)
        })
        this.client.on("disconnect", () => {
            alert("disconnected")
            connected.set(false)
        })

        this.client.on("self", self.set)
        // this.client.on("players", players.set)
        this.client.on("players", obj => {
            let tmp = []
            let current = get(self).id

            while(current != null) {
                let index = obj.findIndex(player => player.id == current)
                let p = obj.splice(index, 1)[0]

                if(p != null) {
                    tmp.push(p)
                    current = p.next
                } else {
                    current = null
                }
            }

            players.set(tmp)
        })
        this.client.on("start", () => {
            phase.set(Phase.ONGOING)
        })
        this.client.on("current_top", top.set)
        this.client.on("deck", deck.set)
        this.client.on("active", active.set)

        this.client.on("win", () => {
            alert("Du hast gewonnen")
            this.client.disconnect()
        })
        this.client.on("lose", () => {
            alert("Du hast verloren")
            this.client.disconnect()
        })

        this.client.connect()
    }

    public ready() {
        this.client.emit("ready")
    }

    public draw() {
        this.client.emit("draw")
    }
    public play(card: Card) {
        this.client.emit("card", card)
    }
}

export default SocketClient