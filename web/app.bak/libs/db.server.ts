import { PrismaClient } from "@prisma/client"

let prisma: PrismaClient

declare global {
  var __db__: PrismaClient
}

if (process.env.NODE_ENV === "production") {
  prisma = getClient()
} else {
  if (!global.__db__) global.__db__ = getClient()
  prisma = global.__db__
}

function getClient() {
  if (!process.env.DB_URL) {
    console.error("\n\x1b[1;31mDB_URL is not set !\x1b[m\n")
    throw new Error("DB_URL is not set !")
  }

  const url = new URL(process.env.DB_URL).toString()
  console.log(`DB's URL to connect: ${url}`)

  const client = new PrismaClient({
    datasources: {
      db: { url },
    },
  })

  client.$connect()
  return client
}

export { prisma }
