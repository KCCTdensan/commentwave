import { FastifyPluginAsync } from "fastify"

import { filter } from "../../utils.js"
import { getRoomWithMsgs } from "../../models/coms.js"

const comsRoute: FastifyPluginAsync = async fastify => {
  fastify.get<{ Params: { id: number } }>("/room/:id", async (req, reply) => {
    const id = Number(req.params.id)
    const room = await getRoomWithMsgs({ id })

    if (!room || !room.opened) return reply.notFound("room not found")

    const now = new Date()
    if (now < room.opened || (room.closed && room.closed < now))
      return reply.forbidden("room closed")

    return {
      room: filter(["id", "screen", "name", "opened", "closed"], room),
      history: room.msgs,
    }
  })
}

export default comsRoute
