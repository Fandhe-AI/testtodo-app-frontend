"use server";

import { createLogin } from "@repo/features-auth";
import { auth } from "~/lib/auth";

/**
 * ログイン Server Action
 *
 * 外部の認証APIサーバー（apps/mock）に対してログインリクエストを送ります。
 *
 * @returns ログインアクション
 */
export const login = createLogin({
  auth,
});
