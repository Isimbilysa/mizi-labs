import { saveSignup } from '../services/signup.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { rules, validate } from '../utils/validate.js';

const signupSchema = {
  email: { required: true, ...rules.email, label: 'Email' },
  role: { required: false, max: 120, label: 'Role' },
  // Honeypot: a hidden field only automated clients fill in.
  website: { required: false, max: 200, label: 'Website' },
};

export const createSignup = asyncHandler(async (req, res) => {
  const { website, ...payload } = validate(req.body, signupSchema);

  // Silently accept bot traffic: never tell a scraper why it failed.
  if (website) {
    res.status(202).json({ ok: true, data: { received: true } });
    return;
  }

  const result = await saveSignup(payload, { source: 'website' });

  res.status(201).json({
    ok: true,
    data: {
      received: true,
      reference: result.id,
      message: "You're on the list. We'll share research notes as the Data Map develops.",
    },
  });
});
