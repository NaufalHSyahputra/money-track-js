async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'dunia' }
    })
    fastify.get('/test', async (request, reply) => {
      return { test: 'they see me rolling, they hatin\', they trolling.' }
    })
  }
  
module.exports = routes