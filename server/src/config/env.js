import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute path of the `server` package, used to resolve relative env paths. */
export const PACKAGE_ROOT = path.resolve(here, '..', '..');

dotenv.config({ path: path.join(PACKAGE_ROOT, '.env') });

const toList = (value, fallback = []) =>
  value
    ? value
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
    : fallback;

const NODE_ENV = process.env.NODE_ENV ?? 'development';

export const env = {
  nodeEnv: NODE_ENV,
  isProduction: NODE_ENV === 'production',
  port: Number(process.env.PORT ?? 5050),
  corsOrigins: toList(process.env.CORS_ORIGINS, [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
  ]),
  submissionsFile: path.resolve(
    PACKAGE_ROOT,
    process.env.SUBMISSIONS_FILE ?? 'data/submissions.jsonl',
  ),
  contactWebhookUrl: process.env.CONTACT_WEBHOOK_URL ?? '',
};
