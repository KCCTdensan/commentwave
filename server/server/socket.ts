import { Server as HttpServer } from "node:http"
// import { createAdapter } from "@socket.io/redis-adapter"
// import { createClient } from "redis"
import { Server } from "socket.io"

const io = new Server()

// const pubClient = createClient({ url: process.env.REDIS_URL })
// const subClient = pubClient.duplicate()
// io.adapter(createAdapter(pubClient, subClient))

export function initSocket(server: HttpServer) {
  io.attach(server)
}

io.on("connection", socket => {
  console.log(socket.id, "connected")

  socket.on("comsJoinRoom", ({ room }) => {
    // auth?
    socket.join(room)
    console.log(socket, "joined into", room)
  })

  socket.on("comsMsg", )

  // sub handler:
  socket.emit("comsMsg", {
    text: "やっほー!",
    timestamp: new Date(),
  })
})
