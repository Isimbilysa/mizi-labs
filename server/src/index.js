import { createApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';

const app = createApp();

const server = app.listen(env.port, () => {
  logger.info(`SHAZA API listening on http://localhost:${env.port}/api`, {
    environment: env.nodeEnv,
  });
});

const shutdown = (signal) => () => {
  logger.info(`${signal} received — closing server`);
  server.close(() => process.exit(0));
};

process.on('SIGTERM', shutdown('SIGTERM'));
process.on('SIGINT', shutdown('SIGINT'));
