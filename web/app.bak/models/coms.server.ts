import { prisma } from "~/libs/db.server"

export async function getRoom(where) {
  return prisma.comsRoom.findUnique({ where })
}

export async function getRoomWithMsgs(where, msgsLimit = 100) {
  return prisma.comsRoom.findUnique({
    where,
    include: {
      msgs: {
        take: msgsLimit,
        orderBy: { timestamp: "desc" },
      },
    },
  })
}

export async function getRoomMsgs(roomId, cursor, msgsLimit = 100) {
  return prisma.comsMsg.findMany({
    take: msgsLimit,
    cursor: { id: cursor },
    where: { room: roomId },
    orderBy: { timestamp: "desc" },
  })
}

export async function createMsg(data) {
  return prisma.comsMsg.create({ data })
}
