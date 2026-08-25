import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { env } from './config/env.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { apiLimiter } from './middleware/rateLimit.js';
import { apiRouter } from './routes/index.js';
import { ApiError } from './utils/ApiError.js';

export function createApp() {
  const app = express();

  // Behind a proxy (Render, Fly, Nginx) so rate limiting sees real client IPs.
  app.set('trust proxy', 1);
  app.disable('x-powered-by');

  app.use(helmet());
  app.use(
    cors({
      origin(origin, callback) {
        // Same-origin and server-to-server requests arrive without an Origin header.
        if (!origin || env.corsOrigins.includes(origin)) return callback(null, true);
        // A disallowed origin is a refusal, not a server fault.
        return callback(new ApiError(403, `Origin ${origin} is not allowed.`));
      },
    }),
  );
  app.use(express.json({ limit: '32kb' }));
  app.use(morgan(env.isProduction ? 'combined' : 'dev'));

  app.use('/api', apiLimiter, apiRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
