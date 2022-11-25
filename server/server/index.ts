import path from "node:path"
import { createServer } from "node:http"

import express from "express"
import { Server } from "socket.io"
import compression from "compression"
import morgan from "morgan"
import { createRequestHandler } from "@remix-run/express"

const MODE = process.env.NODE_ENV
const BUILD_DIR = path.join(process.cwd(), "build")
const PORT = process.env.PORT || 3000

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

io.on("connection", socket => {
  console.log(socket.id, "connected")

  socket.emit("confirmation", "connected!")

  socket.on("event", data => {
    console.log(socket.id, data)
    socket.emit("event", "pong")
  })
})

app.use(compression())
app.use(morgan("tiny"))
app.use(express.static("public", { maxAge: "1h" }))
app.use(express.static("public/build", { immutable: true, maxAge: "1y" }))
app.all(
  "*",
  process.env.NODE_ENV === "production"
    ? createRequestHandler({
        build: require("../build"),
        mode: process.env.NODE_ENV,
      })
    : (req, res, next) => {
        // purge require cache
        for (const key in require.cache) {
          if (key.startsWith(BUILD_DIR)) {
            delete require.cache[key]
          }
        }

        return createRequestHandler({
          build: require("../build"),
          mode: process.env.NODE_ENV,
        })(req, res, next)
      }
)

httpServer.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
