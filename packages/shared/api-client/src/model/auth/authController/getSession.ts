import fetch from "@repo/shared-config-kubb";
import type { GetSessionQueryResponse } from "../../../../../api-type/src/model/auth/authController/GetSession";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { getSessionQueryResponseSchema } from "../../../../../api-zod/src/model/auth/authController/getSessionSchema";

function getGetSessionUrl() {
  const res = { method: 'GET', url: `/session` as const }  
  return res
}

/**
 * @description 現在ログインしているユーザーのセッション情報を取得します。セッションが存在しない場合は null を返します。**注意**: このエンドポイントは Next.js アプリケーション（Better Auth）が処理します。
 * @summary 現在のセッション情報を取得
 * {@link /session}
 */
export async function getSession(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const res = await request<GetSessionQueryResponse, ResponseErrorConfig<Error>, unknown>({ method : "GET", url : getGetSessionUrl().url.toString(), ... requestConfig })  
  return getSessionQueryResponseSchema.parse(res.data)
}