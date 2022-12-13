import { Prisma } from "@prisma/client"
import { prisma } from "../db"

export async function getRoom(where: Prisma.ComsRoomWhereUniqueInput) {
  return prisma.comsRoom.findUnique({ where })
}

export async function getRoomWithMsgs(
  where: Prisma.ComsRoomWhereUniqueInput,
  msgsLimit: number = 100
) {
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

export async function getRoomMsgs(
  roomId: number,
  cursor: number = 0,
  msgsLimit: number = 100
) {
  return prisma.comsMsg.findMany({
    take: msgsLimit,
    cursor: { id: cursor },
    where: { roomId },
    orderBy: { timestamp: "desc" },
  })
}

export async function createMsg(data: Prisma.ComsMsgCreateInput) {
  return prisma.comsMsg.create({ data })
}
