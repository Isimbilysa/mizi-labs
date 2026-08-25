/**
 * Minimal, dependency-free schema validation.
 *
 * A schema is a map of `field -> rules`:
 *   { required, type, min, max, pattern, oneOf, label }
 * Validation returns the sanitised value or throws a 400 ApiError listing
 * every field that failed, so the client can render inline errors in one pass.
 */
import { ApiError } from './ApiError.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const collapseWhitespace = (value) => value.replace(/\s+/g, ' ').trim();

export const rules = {
  email: { type: 'string', pattern: EMAIL_PATTERN, max: 254, message: 'Enter a valid email address.' },
};

export function validate(payload, schema) {
  if (payload === null || typeof payload !== 'object' || Array.isArray(payload)) {
    throw ApiError.badRequest('Request body must be a JSON object.');
  }

  const errors = {};
  const clean = {};

  for (const [field, rule] of Object.entries(schema)) {
    const label = rule.label ?? field;
    const raw = payload[field];
    const isEmpty = raw === undefined || raw === null || String(raw).trim() === '';

    if (isEmpty) {
      if (rule.required) errors[field] = `${label} is required.`;
      else if (rule.default !== undefined) clean[field] = rule.default;
      continue;
    }

    if (typeof raw !== 'string') {
      errors[field] = `${label} must be text.`;
      continue;
    }

    const value = rule.multiline ? raw.trim() : collapseWhitespace(raw);

    if (rule.min && value.length < rule.min) {
      errors[field] = `${label} must be at least ${rule.min} characters.`;
      continue;
    }
    if (rule.max && value.length > rule.max) {
      errors[field] = `${label} must be under ${rule.max} characters.`;
      continue;
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      errors[field] = rule.message ?? `${label} is not valid.`;
      continue;
    }
    if (rule.oneOf && !rule.oneOf.includes(value)) {
      errors[field] = `${label} must be one of: ${rule.oneOf.join(', ')}.`;
      continue;
    }

    clean[field] = value;
  }

  if (Object.keys(errors).length > 0) {
    throw ApiError.badRequest('Some fields need attention.', errors);
  }

  return clean;
}
