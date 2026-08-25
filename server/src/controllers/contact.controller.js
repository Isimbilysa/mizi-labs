import { CONTACT_TOPICS, CONTACT_TOPIC_IDS } from '../data/contactTopics.js';
import { saveSubmission } from '../services/contact.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { rules, validate } from '../utils/validate.js';

const contactSchema = {
  name: { required: true, type: 'string', min: 2, max: 120, label: 'Name' },
  email: { required: true, ...rules.email, label: 'Email' },
  organisation: { required: false, max: 160, label: 'Organisation' },
  topic: { required: true, oneOf: CONTACT_TOPIC_IDS, label: 'Topic' },
  message: { required: true, min: 20, max: 4000, multiline: true, label: 'Message' },
  // Honeypot: a hidden field only automated clients fill in.
  website: { required: false, max: 200, label: 'Website' },
};

export const listTopics = asyncHandler(async (_req, res) => {
  res.json({ ok: true, data: { topics: CONTACT_TOPICS } });
});

export const createSubmission = asyncHandler(async (req, res) => {
  const { website, ...payload } = validate(req.body, contactSchema);

  // Silently accept bot traffic: never tell a scraper why it failed.
  if (website) {
    res.status(202).json({ ok: true, data: { received: true } });
    return;
  }

  const result = await saveSubmission(payload, { source: 'website' });

  res.status(201).json({
    ok: true,
    data: {
      received: true,
      reference: result.id,
      receivedAt: result.receivedAt,
      message: 'Thank you — your message reached the MIZI Labs team.',
    },
  });
});
