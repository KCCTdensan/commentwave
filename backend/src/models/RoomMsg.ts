import { Prisma, prisma } from "db"

export async function createRoomMsg(data: Prisma.RoomMsgCreateInput) {
  return prisma.roomMsg.create({ data })
}
