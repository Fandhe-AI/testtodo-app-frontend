import type { redirect } from "next/navigation";

export * from "./actions";
export * from "./schemas";

/**
 * ログイン Server Action の戻り値型
 */
export type LoginActionResult =
  | typeof redirect
  | { success: false; error: string };
