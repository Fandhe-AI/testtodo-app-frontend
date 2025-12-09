import { authErrorSchema } from "../authErrorSchema";
import { authSessionSchema } from "../authSessionSchema";
import { signUpEmailRequestSchema } from "../signUpEmailRequestSchema";
import { z } from "zod/v4";

/**
 * @description 登録成功
 */
export const postSignUpEmail200Schema = z.lazy(() => authSessionSchema).describe("認証セッション（ユーザー情報とセッション情報を含む）")

/**
 * @description 登録失敗（メールアドレスが既に使用されているなど）
 */
export const postSignUpEmail400Schema = z.lazy(() => authErrorSchema).describe("認証エラー")

export const postSignUpEmailMutationRequestSchema = z.lazy(() => signUpEmailRequestSchema).describe("メール登録のリクエストボディ")

export const postSignUpEmailMutationResponseSchema = z.lazy(() => postSignUpEmail200Schema)