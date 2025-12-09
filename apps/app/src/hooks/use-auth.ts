"use client";

import { createUseAuth } from "@repo/features-auth/client";
import { authClient } from "~/lib/auth-client";

/**
 * 認証状態を管理するカスタムフック
 *
 * @example
 * ```tsx
 * const { session, isLoading, isAuthenticated, login, logout } = useAuth();
 *
 * if (isLoading) return <div>Loading...</div>;
 * if (!isAuthenticated) return <LoginForm onSubmit={login} />;
 * return <div>Welcome, {session?.user?.name}</div>;
 * ```
 */
export const useAuth = createUseAuth(authClient);
