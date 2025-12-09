import type { NotFound } from "../../../../api-type/src/model/todo/NotFound";
import { createCustomError } from "./createCustomError";

export function createNotFound() {
  
  return createCustomError()
}