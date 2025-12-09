import type { InternalServerError } from "../../../../api-type/src/model/todo/InternalServerError";
import { createCustomError } from "./createCustomError";

export function createInternalServerError() {
  
  return createCustomError()
}