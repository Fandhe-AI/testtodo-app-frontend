import type { HealthResponse } from "../../../../api-type/src/model/auth/HealthResponse";
import { faker } from "@faker-js/faker";

/**
 * @description 健康状態のレスポンス
 */
export function createHealthResponse(data?: Partial<HealthResponse>): HealthResponse {
  
  return {
  ...{"status": faker.string.alpha()},
  ...data || {}
  }
}