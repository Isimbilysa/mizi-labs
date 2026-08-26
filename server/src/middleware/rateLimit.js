import rateLimit from 'express-rate-limit';

const jsonLimitResponse = (message) => (req, res) =>
  res.status(429).json({ ok: false, error: { status: 429, message } });

/** Generous ceiling for read-only traffic — protects against scraping, not visitors. */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  handler: jsonLimitResponse('Too many requests. Please try again shortly.'),
});

/** Tight ceiling for writes — a person signs up once, not five times an hour. */
export const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  handler: jsonLimitResponse('That is several sign-ups already. Please try again later.'),
});
