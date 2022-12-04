import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import Fastify from "fastify"
import fastifyCors from "@fastify/cors"
import fastifySensible from "@fastify/sensible"
import fastifyStatic from "@fastify/static"
import fastifyIO from "fastify-socket.io"

// todo: いい感じにする
import comsRoute from "./routes/coms/index.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const port = Number(process.env.PORT) || 8080

const fastify = Fastify({ logger: true })

fastify.register(fastifyCors, {})
fastify.register(fastifySensible)
fastify.register(fastifyStatic, {
  root: join(__dirname, "../static"),
})
fastify.register(fastifyIO)

fastify.register(comsRoute, { prefix: "/coms" })

try {
  await fastify.listen({ port })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
