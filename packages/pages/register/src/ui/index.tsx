import { Suspense } from "react";
import type { RegisterPageProps } from "../model";
import { Fallback } from "./fallback";
import { ClientPage } from "./page/index.client";

/**
 * 登録ページコンポーネント
 *
 * FSD に従って設計された登録ページです。
 * Server Action を受け取り、ユーザー登録処理を行います。
 *
 * @example
 * ```tsx
 * import { RegisterPage } from "@repo/pages-register/ui";
 * import { registerAction } from "./actions";
 *
 * export default () => {
 *   return <RegisterPage register={registerAction} searchParams={searchParams} />;
 * };
 * ```
 */
export const RegisterPage = (props: RegisterPageProps) => {
  return (
    <Suspense fallback={<Fallback />}>
      <ClientPage {...props} />
    </Suspense>
  );
};
