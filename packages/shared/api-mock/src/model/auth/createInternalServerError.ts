import type { InternalServerError } from "../../../../api-type/src/model/auth/InternalServerError";
import { createCustomError } from "./createCustomError";

export function createInternalServerError() {
  
  return createCustomError()
}