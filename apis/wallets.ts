import { apiClient, type ApiClient } from './client';
import type {
  CardFunding,
  DirectDebitFunding,
  RequestOptions,
  Wallet,
  WalletTransaction,
} from './types';

const client = (api?: ApiClient) => api ?? apiClient;

export function listWallets(options?: RequestOptions, api?: ApiClient): Promise<Wallet[]> {
  return client(api).request('/api/v1/wallets', {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function getWallet(
  walletUuid: string,
  options?: RequestOptions,
  api?: ApiClient,
): Promise<Wallet> {
  return client(api).request(`/api/v1/wallets/${encodeURIComponent(walletUuid)}`, {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function getWalletBalance(
  walletUuid: string,
  options?: RequestOptions,
  api?: ApiClient,
): Promise<Wallet> {
  return client(api).request(`/api/v1/wallets/${encodeURIComponent(walletUuid)}/balance`, {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function getWalletTransactions(
  walletUuid: string,
  options?: RequestOptions,
  api?: ApiClient,
): Promise<WalletTransaction[]> {
  return client(api).request(`/api/v1/wallets/${encodeURIComponent(walletUuid)}/transactions`, {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function fundWalletWithCard(
  walletUuid: string,
  payload: {
    cardUuid: string;
    amount: number;
    currency: string;
    transactionPin: string;
  },
  options?: RequestOptions,
  api?: ApiClient,
): Promise<CardFunding> {
  return client(api).request(`/api/v1/wallets/${encodeURIComponent(walletUuid)}/fund/card`, {
    method: 'POST',
    body: payload,
    accessToken: options?.accessToken,
    idempotencyKey: options?.idempotencyKey,
    signal: options?.signal,
  });
}

export function fundWalletWithDirectDebit(
  walletUuid: string,
  payload: {
    mandateUuid: string;
    amount: number;
    currency: string;
    transactionPin: string;
  },
  options?: RequestOptions,
  api?: ApiClient,
): Promise<DirectDebitFunding> {
  return client(api).request(
    `/api/v1/wallets/${encodeURIComponent(walletUuid)}/fund/direct-debit`,
    {
      method: 'POST',
      body: payload,
      accessToken: options?.accessToken,
      idempotencyKey: options?.idempotencyKey,
      signal: options?.signal,
    },
  );
}
