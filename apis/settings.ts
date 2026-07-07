import { apiClient, type ApiClient } from './client';
import type { MessageResponse, PaymentSettings, RequestOptions } from './types';

const client = (api?: ApiClient) => api ?? apiClient;

export function getPaymentSettings(
  options?: RequestOptions,
  api?: ApiClient,
): Promise<PaymentSettings> {
  return client(api).request('/api/v1/settings/payment', {
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function updatePaymentSettings(
  payload: Partial<
    Pick<
      PaymentSettings,
      | 'defaultCardId'
      | 'defaultDirectDebitMandateId'
      | 'defaultWalletId'
      | 'allowCardPayments'
      | 'allowDirectDebitPayments'
      | 'singleTransactionLimit'
      | 'notificationPreferences'
    >
  >,
  options?: RequestOptions,
  api?: ApiClient,
): Promise<PaymentSettings> {
  return client(api).request('/api/v1/settings/payment', {
    method: 'PATCH',
    body: payload,
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function createTransactionPin(
  payload: { pin: string },
  options?: RequestOptions,
  api?: ApiClient,
): Promise<MessageResponse> {
  return client(api).request('/api/v1/settings/transaction-pin', {
    method: 'POST',
    body: payload,
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}

export function updateTransactionPin(
  payload: { currentPin: string; newPin: string },
  options?: RequestOptions,
  api?: ApiClient,
): Promise<MessageResponse> {
  return client(api).request('/api/v1/settings/transaction-pin', {
    method: 'PATCH',
    body: payload,
    accessToken: options?.accessToken,
    signal: options?.signal,
  });
}
