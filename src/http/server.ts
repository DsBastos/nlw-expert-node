import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const app = fastify()

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server running on port 3333')
})

// ORMs: Prisma
