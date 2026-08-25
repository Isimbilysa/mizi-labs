import { randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

/**
 * Appends an enquiry as one JSON line. A file is deliberate for this stage:
 * durable, greppable, and trivially replaced by a database later — every
 * caller only knows `saveSubmission`.
 */
async function persist(submission) {
  await fs.mkdir(path.dirname(env.submissionsFile), { recursive: true });
  await fs.appendFile(env.submissionsFile, `${JSON.stringify(submission)}\n`, 'utf8');
}

/** Best-effort notification. A webhook outage must never fail the visitor's request. */
async function notify(submission) {
  if (!env.contactWebhookUrl) return;

  try {
    const response = await fetch(env.contactWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `New MIZI Labs enquiry — ${submission.topic} — from ${submission.name} <${submission.email}>`,
        submission,
      }),
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      logger.warn('Contact webhook returned a non-2xx status', { status: response.status });
    }
  } catch (error) {
    logger.warn('Contact webhook failed', { message: error.message });
  }
}

export async function saveSubmission(input, context = {}) {
  const submission = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ...input,
    source: context.source ?? 'website',
  };

  await persist(submission);
  logger.info('Contact submission stored', { id: submission.id, topic: submission.topic });

  await notify(submission);

  return { id: submission.id, receivedAt: submission.receivedAt };
}
