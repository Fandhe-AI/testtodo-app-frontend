import { authSessionInfoSchema } from "./authSessionInfoSchema";
import { authUserSchema } from "./authUserSchema";
import { z } from "zod/v4";

/**
 * @description 認証セッション（ユーザー情報とセッション情報を含む）
 */
export const authSessionSchema = z.object({
    get "user"(){
                return authUserSchema.describe("認証ユーザー情報")
              },
get "session"(){
                return authSessionInfoSchema.describe("セッション情報")
              }
    }).describe("認証セッション（ユーザー情報とセッション情報を含む）")