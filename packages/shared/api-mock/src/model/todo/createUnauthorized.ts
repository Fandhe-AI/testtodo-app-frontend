import type { Unauthorized } from "../../../../api-type/src/model/todo/Unauthorized";
import { createCustomError } from "./createCustomError";

export function createUnauthorized() {
  
  return createCustomError()
}