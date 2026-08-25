/**
 * Wraps an async route handler so rejected promises reach Express'
 * error pipeline instead of becoming unhandled rejections.
 */
export const asyncHandler = (handler) => (req, res, next) =>
  Promise.resolve(handler(req, res, next)).catch(next);
