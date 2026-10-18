import { env } from '../config/env.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const startedAt = Date.now();

export const getHealth = asyncHandler(async (_req, res) => {
  res.json({
    ok: true,
    data: {
      service: 'shaza-api',
      environment: env.nodeEnv,
      uptimeSeconds: Math.round((Date.now() - startedAt) / 1000),
      timestamp: new Date().toISOString(),
    },
  });
});
