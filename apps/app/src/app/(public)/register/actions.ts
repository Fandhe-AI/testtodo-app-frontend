"use server";

import { createRegister } from "@repo/features-auth";
import { auth } from "~/lib/auth";

/**
 * 登録 Server Action
 *
 * 外部の認証APIサーバー（apps/mock）に対して新規登録リクエストを送ります。
 *
 * @returns 登録アクション
 */
export const register = createRegister({
  auth,
});
