import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const getAbsolutePath = (value: string): string =>
  dirname(fileURLToPath(import.meta.resolve(join(value, "package.json"))));
