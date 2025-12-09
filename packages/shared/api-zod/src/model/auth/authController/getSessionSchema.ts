import { authSessionOrNullSchema } from "../authSessionOrNullSchema";
import { z } from "zod/v4";

/**
 * @description セッション情報
 */
export const getSession200Schema = z.lazy(() => authSessionOrNullSchema).describe("認証セッション（存在しない場合は空オブジェクト）").nullable()

export const getSessionQueryResponseSchema = z.lazy(() => getSession200Schema)