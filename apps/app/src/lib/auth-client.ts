"use client";

import { createAuthClient } from "@repo/shared-lib-auth/client";

/**
 * Better Auth クライアントインスタンス
 *
 * React コンポーネントで使用する認証クライアントです。
 */
export const authClient = createAuthClient();

/**
 * セッション取得フック
 */
export const { useSession, signIn, signOut } = authClient;
