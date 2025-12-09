import type { BadRequest } from "../../../../api-type/src/model/todo/BadRequest";
import { createCustomError } from "./createCustomError";

export function createBadRequest() {
  
  return createCustomError()
}