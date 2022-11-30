import { Server as HttpServer } from "node:http"
import { Server } from "socket.io"

const io = new Server()

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

  socket.on("comsMsg", console.log)

  // sub handler:
  socket.emit("comsMsg", {
    text: "やっほー!",
    timestamp: new Date(),
  })
})
