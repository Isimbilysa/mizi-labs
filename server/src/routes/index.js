import { Router } from 'express';

import { healthRouter } from './health.routes.js';
import { signupRouter } from './signup.routes.js';

export const apiRouter = Router();

apiRouter.get('/', (_req, res) => {
  res.json({
    ok: true,
    data: {
      name: 'SHAZA API',
      version: 1,
      endpoints: ['GET /api/health', 'POST /api/signups'],
      note: 'The Data Map catalogue endpoints will live here once the inventory exists.',
    },
  });
});

apiRouter.use('/health', healthRouter);
apiRouter.use('/signups', signupRouter);
