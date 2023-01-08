import { join } from "node:path"
import Fastify from "fastify"
import fastifyStatic from "@fastify/static"
import fastifyWebsocket from "@fastify/websocket"
import fastifyPassport from "@fastify/passport"
import fastifySecureSession from "@fastify/secure-session"
import { prisma } from "db"

import auth from "~/routes/auth"
import room from "~/routes/room"

const port = Number(process.env.PORT) || 8080
const root = join(__dirname, "../static")

// ESM使いたい……
async function main() {
  const fastify = Fastify({
    logger: { level: "error" },
  })

  await fastify.register(fastifyStatic, { root })
  await fastify.register(fastifyWebsocket)
  // await fastify.register(fastifyPassport)
  // await fastify.register(fastifySecureSession)

  await fastify.register(auth, { prefix: "/api/auth" })
  await fastify.register(room, { prefix: "/api/room" })

  await prisma.$connect()
  await fastify.listen({ port })
}

main()
