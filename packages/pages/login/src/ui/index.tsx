import { Suspense } from "react";
import type { LoginPageProps } from "../model";
import { Fallback } from "./fallback";
import { ClientPage } from "./page/index.client";

/**
 * ログインページコンポーネント
 *
 * FSD に従って設計されたログインページです。
 * Server Action を受け取り、ログイン処理を行います。
 *
 * @example
 * ```tsx
 * import { LoginPage } from "@repo/pages-login/ui/page";
 * import { loginAction } from "./actions";
 *
 * export default () => {
 *   return <LoginPage loginAction={loginAction} callbackURL="/" />;
 * };
 * ```
 */
export const LoginPage = (props: LoginPageProps) => {
  return (
    <Suspense fallback={<Fallback />}>
      <ClientPage {...props} />
    </Suspense>
  );
};
