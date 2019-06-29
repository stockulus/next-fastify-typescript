import 'isomorphic-fetch'
import * as fastify from 'fastify'
import * as nextJs from 'next'

import { IS_DEVELOPMENT, PORT, BIND_ADDRESS } from './env'
process.env.TZ = 'UTC'

const server = fastify({ logger: true })

async function main() {
  const nextApp = nextJs({ dev: IS_DEVELOPMENT, quiet: true })
  const handle = nextApp.getRequestHandler()

  try {
    await nextApp.prepare()

    // Add health check endpoint
    server.get('/healthcheck', (_, reply) => {
      reply.send({ uptime: process.uptime() })
    })

    // add next.js
    server.get('/*', (request, reply) => {
      handle(request.req, reply.res)
    })

    // start server
    await server.listen(PORT, BIND_ADDRESS)
  } catch (error) {
    server.log.error(error, 'Server init error')
    process.exit(1)
  }
}

main()
