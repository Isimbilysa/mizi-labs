import { Router } from 'express';

import { contactRouter } from './contact.routes.js';
import { healthRouter } from './health.routes.js';

export const apiRouter = Router();

apiRouter.get('/', (_req, res) => {
  res.json({
    ok: true,
    data: {
      name: 'MIZI Labs API',
      version: 1,
      endpoints: ['GET /api/health', 'GET /api/contact/topics', 'POST /api/contact'],
    },
  });
});

apiRouter.use('/health', healthRouter);
apiRouter.use('/contact', contactRouter);
