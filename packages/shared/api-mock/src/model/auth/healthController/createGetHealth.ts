import type { GetHealthQueryResponse } from "../../../../../api-type/src/model/auth/healthController/GetHealth";
import { createCustomError } from "../createCustomError";
import { createHealthResponse } from "../createHealthResponse";
import { faker } from "@faker-js/faker";

/**
 * @description 健康状態の確認に成功
 */
export function createGetHealth200() {
  
  return createHealthResponse()
}

/**
 * @description サーバー内部エラー
 */
export function createGetHealth500() {
  
  return createCustomError()
}

export function createGetHealthQueryResponse(data?: Partial<GetHealthQueryResponse>): GetHealthQueryResponse {
  
  return data || faker.helpers.arrayElement<any>([createGetHealth200()])
}