app.post('/polls', async (request, reply) => {
  const createPollBody = z.object({
    title: z.string(),
  })

  const { title } = createPollBody.parse(request.body)

  const poll = await prisma.poll.create({
    data: {
      title,
    },
  })

  return reply.status(201).send({ pollID: poll.id })
})