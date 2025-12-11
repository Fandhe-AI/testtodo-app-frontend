"use server";

import { createLogin } from "@repo/features-auth";
import { env } from "~/const/env";

/**
 * ログイン Server Action
 *
 * 外部の認証APIサーバー（apps/mock）に対してログインリクエストを送ります。
 *
 * @returns ログインアクション
 */
export const login = createLogin({
  apiBaseURL: env.AUTH_API_BASE_URL,
});
