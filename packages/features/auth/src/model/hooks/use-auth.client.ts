"use client";

import type { AuthClient } from "@repo/shared-lib-auth";

/**
 * useAuth フックのファクトリー関数
 *
 * AuthClient を受け取り、認証状態を管理するカスタムフックを返します。
 *
 * @param authClient - Better Auth クライアントインスタンス
 * @returns useAuth フック
 *
 * @example
 * ```typescript
 * // apps/app/src/hooks/use-auth.ts
 * import { createUseAuth } from "@repo/features-auth/model";
 * import { authClient } from "../lib/auth-client";
 *
 * export const useAuth = createUseAuth(authClient);
 * ```
 *
 * @example
 * ```tsx
 * // コンポーネントでの使用
 * const { session, isLoading, isAuthenticated, login, logout } = useAuth();
 *
 * if (isLoading) return <div>Loading...</div>;
 * if (!isAuthenticated) return <LoginForm onSubmit={login} />;
 * return <div>Welcome, {session?.user?.name}</div>;
 * ```
 */
export const createUseAuth = (authClient: AuthClient) => {
  return () => {
    const {
      data: session,
      isPending: isLoading,
      error,
    } = authClient.useSession();

    const isAuthenticated = !!session?.user;

    /**
     * メールアドレスとパスワードでログイン
     */
    const login = async (email: string, password: string) => {
      return authClient.signIn.email({
        email,
        password,
      });
    };

    /**
     * ログアウト
     */
    const logout = async () => {
      return authClient.signOut();
    };

    return {
      session,
      isLoading,
      isAuthenticated,
      error,
      login,
      logout,
    };
  };
};
