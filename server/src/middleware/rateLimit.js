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

/** Tight ceiling for writes — a human sends one enquiry, not five an hour. */
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  handler: jsonLimitResponse('You have sent several messages already. Please try again later.'),
});
