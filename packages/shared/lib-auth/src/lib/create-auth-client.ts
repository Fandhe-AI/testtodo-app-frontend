"use client";

import { createAuthClient as createBetterAuthClient } from "better-auth/react";
import type { AuthClientConfig } from "../type";

/**
 * Better Auth クライアントインスタンスを作成
 *
 * React コンポーネントで使用する認証クライアントです。
 * useSession、signIn、signOut などのフックを提供します。
 *
 * @param config - クライアント設定
 * @returns Better Auth クライアントインスタンス
 *
 * @example
 * ```typescript
 * // apps/app/src/lib/auth-client.ts
 * import { createAuthClient } from "@repo/shared-lib-auth/client";
 *
 * export const authClient = createAuthClient({
 *   baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
 * });
 *
 * export const { useSession, signIn, signOut } = authClient;
 * ```
 */
export const createAuthClient = (config: AuthClientConfig = {}) => {
  const client = createBetterAuthClient(config);

  return {
    ...client,
    useSession: client.useSession,
    signIn: client.signIn,
    signOut: client.signOut,
  };
};

export type AuthClient = ReturnType<typeof createAuthClient>;
