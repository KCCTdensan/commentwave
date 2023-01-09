import { FastifyPluginAsync } from "fastify"
import { isOpen, getRoom, getRooms } from "~/models/Room"
import { userProfile, getUser } from "~/models/User"

const root: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get("/count", async (req, reply) => {
    const rooms = await getRooms({})
    const count = rooms.filter(isOpen).length
    reply.send({ count })
  })

  fastify.get<{
    Params: { id: string }
  }>("/:id/meta", async (req, reply) => {
    const { id } = req.params
    const room = await getRoom({ id })

    if (!room) {
      reply.code(404)
      throw new Error("room not found")
    }
    if (!isOpen(room) && !room.archive) {
      reply.code(403)
      throw new Error("room is not open")
    }

    const owner = await getUser({ id: room.ownerId })

    if (owner === null) {
      reply.code(500)
      throw new Error("owner not found")
    }

    reply.send({
      id,
      name: room.name,
      owner: userProfile(owner),
    })
  })

  fastify.get("/:id/sock", { websocket: true }, (conn, req) => {
    const state = {}

    conn.socket.on("message", buf => {
      const data = JSON.parse(buf.toString())
    })
  })
}

export default root
