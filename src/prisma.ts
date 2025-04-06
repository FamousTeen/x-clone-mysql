import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// additional, unwanted instances of PrismaClient in a development environment.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma