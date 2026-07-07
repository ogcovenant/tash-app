import { apiClient, type ApiClient } from './client';
import type { DirectDebitMandate, RequestOptions } from './types';

const client = (api?: ApiClient) => api ?? apiClient;

export function createDirectDebitMandate(
  payload: {
    bankCode: string;
    accountNumber: string;
    accountName: string;
    maximumAmount: number;
    currency: string;
  },
  options?: RequestOptions,
  api?: ApiClient
): Promise<DirectDebitMandate> {
  return client(api).request('/api/v1/direct-debit/mandates', {
    method: 'POST',
    body: payload,
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function listDirectDebitMandates(
  options?: RequestOptions,
  api?: ApiClient
): Promise<DirectDebitMandate[]> {
  return client(api).request('/api/v1/direct-debit/mandates', {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function getDirectDebitMandate(
  uuid: string,
  options?: RequestOptions,
  api?: ApiClient
): Promise<DirectDebitMandate> {
  return client(api).request(`/api/v1/direct-debit/mandates/${encodeURIComponent(uuid)}`, {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function authorizeDirectDebitMandate(
  uuid: string,
  payload?: { authorizationReference?: string },
  options?: RequestOptions,
  api?: ApiClient
): Promise<DirectDebitMandate> {
  return client(api).request(
    `/api/v1/direct-debit/mandates/${encodeURIComponent(uuid)}/authorize`,
    {
      method: 'POST',
      body: payload,
      accessToken: options?.accessToken,
      signal: options?.signal,
    }
  );
}

export function revokeDirectDebitMandate(
  uuid: string,
  payload?: { reason?: string },
  options?: RequestOptions,
  api?: ApiClient
): Promise<DirectDebitMandate> {
  return client(api).request(`/api/v1/direct-debit/mandates/${encodeURIComponent(uuid)}/revoke`, {
    method: 'POST',
    body: payload,
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}
