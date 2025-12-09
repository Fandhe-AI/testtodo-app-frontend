import { authSessionInfoSchema } from "./authSessionInfoSchema";
import { authUserSchema } from "./authUserSchema";
import { z } from "zod/v4";

/**
 * @description 認証セッション（存在しない場合は空オブジェクト）
 */
export const authSessionOrNullSchema = z.object({
    get "user"(){
                return authUserSchema.describe("認証ユーザー情報").optional()
              },
get "session"(){
                return authSessionInfoSchema.describe("セッション情報").optional()
              }
    }).describe("認証セッション（存在しない場合は空オブジェクト）").nullable()