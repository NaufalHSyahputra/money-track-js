const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('./routes'))

const start = async () => {
  try {
    await fastify.listen(process.env.PORT, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
