import { customErrorSchema } from "./customErrorSchema";
import { z } from "zod/v4";

export const validationErrorSchema = z.lazy(() => customErrorSchema).describe("エラー情報")