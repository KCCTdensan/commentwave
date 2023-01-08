import { Prisma, User, prisma } from "db"

export function userProfile(user: User) {
  const { id, iconUrl } = user
  return { id, iconUrl }
}

export async function getUser(where: Prisma.UserWhereUniqueInput) {
  return prisma.user.findUnique({ where })
}

export async function createUser(data: Prisma.UserCreateInput) {
  return prisma.user.create({ data })
}

export async function updateUser(id: number, data: Prisma.UserUpdateInput) {
  return prisma.user.update({
    where: { id },
    data,
  })
}
