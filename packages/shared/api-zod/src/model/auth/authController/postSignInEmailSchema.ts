import { authErrorSchema } from "../authErrorSchema";
import { authSessionSchema } from "../authSessionSchema";
import { signInEmailRequestSchema } from "../signInEmailRequestSchema";
import { z } from "zod/v4";

/**
 * @description ログイン成功
 */
export const postSignInEmail200Schema = z.lazy(() => authSessionSchema).describe("認証セッション（ユーザー情報とセッション情報を含む）")

/**
 * @description 認証失敗
 */
export const postSignInEmail401Schema = z.lazy(() => authErrorSchema).describe("認証エラー")

export const postSignInEmailMutationRequestSchema = z.lazy(() => signInEmailRequestSchema).describe("メールログインのリクエストボディ")

export const postSignInEmailMutationResponseSchema = z.lazy(() => postSignInEmail200Schema)