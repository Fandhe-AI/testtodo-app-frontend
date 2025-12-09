import type { FlattenedError } from "./zod";

export * from "./zod";

export class CustomError<T = unknown> extends Error {
  constructor(
    public readonly errorCode: string,
    public readonly cause: string,
    public readonly fieldErrors?: FlattenedError<T>["fieldErrors"],
    public readonly formErrors?: FlattenedError<T>["formErrors"],
  ) {
    super(cause);
    this.name = "CustomError";
  }
}
