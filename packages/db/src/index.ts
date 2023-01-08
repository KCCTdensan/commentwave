import { PrismaClient } from "@prisma/client"

export { Prisma, User, Room, RoomMsg, MessageReact } from "@prisma/client"

export const prisma = new PrismaClient()
