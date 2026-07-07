import { apiClient, type ApiClient } from './client';
import type { Bank, RequestOptions, ResolvedBankAccount } from './types';

const client = (api?: ApiClient) => api ?? apiClient;

export function listBanks(options?: RequestOptions, api?: ApiClient): Promise<Bank[]> {
  return client(api).request('/api/v1/banks', {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function resolveBankAccount(
  payload: { bankCode: string; accountNumber: string },
  options?: RequestOptions,
  api?: ApiClient,
): Promise<ResolvedBankAccount> {
  return client(api).request('/api/v1/banks/resolve-account', {
    method: 'POST',
    body: payload,
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}
