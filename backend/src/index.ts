import { createServer } from "node:http"
import { join } from "node:path"
import express from "express"
import morgan from "morgan"
import compression from "compression"
import { initSocket } from "./socket"

const PORT = process.env.PORT || 8080

const app = express()
const server = createServer(app)
initSocket(server)

app.use(express.static("static"))
app.use(morgan("tiny"))
app.use(compression())

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
