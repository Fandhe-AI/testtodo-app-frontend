import type { z } from "zod";

export type FlattenedError<T> = ReturnType<typeof z.flattenError<T>>;
