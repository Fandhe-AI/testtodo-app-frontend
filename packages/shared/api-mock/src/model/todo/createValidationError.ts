import type { ValidationError } from "../../../../api-type/src/model/todo/ValidationError";
import { createCustomError } from "./createCustomError";

export function createValidationError() {
  
  return createCustomError()
}