import type { CustomSuccess } from "../../../../api-type/src/model/todo/CustomSuccess";
import { faker } from "@faker-js/faker";

/**
 * @description 成功情報
 */
export function createCustomSuccess(data?: Partial<CustomSuccess>): CustomSuccess {
  
  return {
  ...{"success": faker.datatype.boolean(),"message": faker.string.alpha()},
  ...data || {}
  }
}