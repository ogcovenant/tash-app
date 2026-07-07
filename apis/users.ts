import { apiClient, type ApiClient } from './client';
import type { PublicUserProfile, RequestOptions, ResolvedRecipient } from './types';

const client = (api?: ApiClient) => api ?? apiClient;

export function getCurrentUser(
  options?: RequestOptions,
  api?: ApiClient,
): Promise<PublicUserProfile> {
  return client(api).request('/api/v1/users/me', {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function changePaymentTag(
  payload: { paymentTag: string },
  options?: RequestOptions,
  api?: ApiClient,
): Promise<PublicUserProfile> {
  return client(api).request('/api/v1/users/me/tag', {
    method: 'PATCH',
    body: payload,
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function resolveRecipient(
  paymentTag: string,
  options?: RequestOptions,
  api?: ApiClient,
): Promise<ResolvedRecipient> {
  return client(api).request(`/api/v1/users/resolve/${encodeURIComponent(paymentTag)}`, {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}
