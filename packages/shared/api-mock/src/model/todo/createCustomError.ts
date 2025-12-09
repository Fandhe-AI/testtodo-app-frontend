import type { CustomError } from "../../../../api-type/src/model/todo/CustomError";
import { faker } from "@faker-js/faker";

/**
 * @description エラー情報
 */
export function createCustomError(data?: Partial<CustomError>): CustomError {
  
  return {
  ...{"error": {"code": faker.string.alpha(),"message": faker.string.alpha(),"details": faker.helpers.multiple(() => ({"field": faker.string.alpha(),"message": faker.string.alpha()}))}},
  ...data || {}
  }
}