import { env } from '@/infrastructure/config/env';

export const httpClient = {
  get: (path: string, options?: RequestInit) =>
    fetch(`${env.apiBaseUrl}${path}`, {
      ...options,
      method: 'GET',
    }),

  post: (path: string, body: unknown, options?: RequestInit) =>
    fetch(`${env.apiBaseUrl}${path}`, {
      ...options,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      body: JSON.stringify(body),
    }),

  put: (path: string, body: unknown, options?: RequestInit) =>
    fetch(`${env.apiBaseUrl}${path}`, {
      ...options,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      body: JSON.stringify(body),
    }),

  delete: (path: string, options?: RequestInit) =>
    fetch(`${env.apiBaseUrl}${path}`, {
      ...options,
      method: 'DELETE',
    }),
};
