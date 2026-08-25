/**
 * Thin client for the MIZI Labs API.
 * Every response is normalised to `{ ok, data }` or an `ApiError`, so callers
 * never have to reason about transport details.
 */

const BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '');
const DEFAULT_TIMEOUT = 10_000;

export class ApiError extends Error {
  constructor(message, { status = 0, details = null } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

async function request(path, { method = 'GET', body, signal, timeout = DEFAULT_TIMEOUT } = {}) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeout);

  if (signal) signal.addEventListener('abort', () => controller.abort(), { once: true });

  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok || payload?.ok === false) {
      throw new ApiError(payload?.error?.message ?? 'The request could not be completed.', {
        status: response.status,
        details: payload?.error?.details ?? null,
      });
    }

    return payload?.data ?? null;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error.name === 'AbortError') {
      throw new ApiError('The request timed out. Please try again.', { status: 408 });
    }
    throw new ApiError('We could not reach the server. Please try again.', { status: 0 });
  } finally {
    window.clearTimeout(timer);
  }
}

export const api = {
  /** Enquiry topics, owned by the server so options and validation stay in sync. */
  getContactTopics: (signal) => request('/contact/topics', { signal }),
  submitContact: (payload, signal) => request('/contact', { method: 'POST', body: payload, signal }),
};
