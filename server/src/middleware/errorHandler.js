import { ApiError } from '../utils/ApiError.js';
import { logger } from '../utils/logger.js';
import { env } from '../config/env.js';

export function notFoundHandler(req, _res, next) {
  next(ApiError.notFound(`No route matches ${req.method} ${req.originalUrl}`));
}

// eslint-disable-next-line no-unused-vars -- Express identifies error middleware by arity.
export function errorHandler(error, req, res, _next) {
  const status = error instanceof ApiError ? error.status : 500;
  const message =
    status === 500 && env.isProduction ? 'Something went wrong on our side.' : error.message;

  if (status >= 500) {
    logger.error(`${req.method} ${req.originalUrl} failed`, { message: error.message });
    if (!env.isProduction) console.error(error.stack);
  }

  res.status(status).json({
    ok: false,
    error: { status, message, ...(error.details ? { details: error.details } : {}) },
  });
}
