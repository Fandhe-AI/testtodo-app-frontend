import fetch from "@repo/shared-config-kubb";
import type { GetHealthQueryResponse, GetHealth500 } from "../../../../../api-type/src/model/todo/healthController/GetHealth";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { getHealthQueryResponseSchema } from "../../../../../api-zod/src/model/todo/healthController/getHealthSchema";

function getGetHealthUrl() {
  const res = { method: 'GET', url: `/health` as const }  
  return res
}

/**
 * @description サーバーの健康状態を確認します。
 * @summary 健康状態の確認
 * {@link /health}
 */
export async function getHealth(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const res = await request<GetHealthQueryResponse, ResponseErrorConfig<GetHealth500>, unknown>({ method : "GET", url : getGetHealthUrl().url.toString(), ... requestConfig })  
  return getHealthQueryResponseSchema.parse(res.data)
}