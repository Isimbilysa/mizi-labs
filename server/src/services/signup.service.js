import { randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

/**
 * Appends a signup as one JSON line. A file is deliberate at this stage:
 * durable, greppable, and trivially replaced by a database later — every
 * caller only knows `saveSignup`.
 */
async function persist(signup) {
  await fs.mkdir(path.dirname(env.signupsFile), { recursive: true });
  await fs.appendFile(env.signupsFile, `${JSON.stringify(signup)}\n`, 'utf8');
}

/** Best-effort notification. A webhook outage must never fail the request. */
async function notify(signup) {
  if (!env.signupWebhookUrl) return;

  try {
    const response = await fetch(env.signupWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: `New SHAZA research signup: ${signup.email}`, signup }),
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      logger.warn('Signup webhook returned a non-2xx status', { status: response.status });
    }
  } catch (error) {
    logger.warn('Signup webhook failed', { message: error.message });
  }
}

export async function saveSignup(input, context = {}) {
  const signup = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ...input,
    source: context.source ?? 'website',
  };

  await persist(signup);
  logger.info('Signup stored', { id: signup.id });

  await notify(signup);

  return { id: signup.id, receivedAt: signup.receivedAt };
}
