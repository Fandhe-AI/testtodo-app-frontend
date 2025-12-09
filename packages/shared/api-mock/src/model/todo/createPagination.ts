import type { Pagination } from "../../../../api-type/src/model/todo/Pagination";
import { faker } from "@faker-js/faker";

/**
 * @description ページネーション情報
 */
export function createPagination(data?: Partial<Pagination>): Pagination {
  
  return {
  ...{"page": faker.number.int({ min: 1 }),"limit": faker.number.int({ min: 1 }),"total": faker.number.int({ min: 0 }),"total_pages": faker.number.int({ min: 0 })},
  ...data || {}
  }
}