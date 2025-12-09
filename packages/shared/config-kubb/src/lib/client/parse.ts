import type { FlattenedError } from "@repo/shared-error";

export const parseErrors = <T>(
  errors: unknown,
): FlattenedError<T> | undefined => {
  if (!Array.isArray(errors) || errors === null) {
    return undefined;
  }

  const fieldErrors: FlattenedError<T>["fieldErrors"] = {};
  const formErrors: FlattenedError<T>["formErrors"] = [];

  errors.forEach((error) => {
    fieldErrors[error.key as keyof T] = error.message;
    formErrors.push(error.message);
  });

  return {
    fieldErrors,
    formErrors,
  };
};
