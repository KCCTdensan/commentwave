import { Prisma, Room, prisma } from "db"

export function isOpen(room: Room) {
  const now = new Date()
  return room.open && room.open < now && (!room.close || now < room.close)
}

export async function getRoom(where: Prisma.RoomWhereUniqueInput) {
  return prisma.room.findUnique({ where })
}

export async function getRooms(where: Prisma.RoomWhereInput) {
  return prisma.room.findMany({ where })
}

export async function createRoom(data: Prisma.RoomCreateInput) {
  return prisma.room.create({ data })
}

export async function updateRoom(id: string, data: Prisma.RoomUpdateInput) {
  return prisma.room.update({
    where: { id },
    data,
  })
}

export async function openRoom(id: string) {
  return prisma.room.update({
    where: { id },
    data: { open: new Date() },
  })
}

export async function closeRoom(id: string) {
  return prisma.room.update({
    where: { id },
    data: { close: new Date() },
  })
}
