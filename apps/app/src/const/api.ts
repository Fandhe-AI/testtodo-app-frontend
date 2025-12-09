import type { RequestConfig } from "@repo/shared-config-kubb";
import { env } from "./env";

export const authRequestConfig: Partial<RequestConfig> = {
  baseURL: env.AUTH_API_BASE_URL,
  timeout: env.NEXT_PUBLIC_API_TIMEOUT,
};

export const todoRequestConfig: Partial<RequestConfig> = {
  baseURL: env.TODO_API_BASE_URL,
  timeout: env.NEXT_PUBLIC_API_TIMEOUT,
};
