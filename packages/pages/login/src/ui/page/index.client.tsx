"use client";

import type { createLogin } from "@repo/features-auth";
import { AuthFormLogin } from "@repo/features-auth/ui/form/login";
import { use } from "react";
import type { LoginPageSearchParams } from "../../model";

type Props = {
  /**
   * ログインページの Search Params
   */
  searchParams: Promise<LoginPageSearchParams>;
  /**
   * ログインページの Action
   */
  login: ReturnType<typeof createLogin>;
  /**
   * ページタイトル
   * @default "ログイン"
   */
  title?: string;
};

/**
 * ログインページコンポーネント
 *
 * FSD に従って設計されたログインページです。
 * Server Action を受け取り、ログイン処理を行います。
 */
export const ClientPage = ({
  searchParams,
  login,
  title = "ログイン",
}: Props) => {
  const { callbackURL } = use(searchParams);

  return (
    <div
      className={[
        "flex min-h-screen flex-col",
        "bg-linear-to-br from-[#1a1a2e] to-[#16213e]",
      ].join(" ")}
    >
      {/* ヘッダー */}
      <header className="border-white/10 border-b p-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-semibold text-2xl text-white tracking-wide">
            {title}
          </h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="mx-auto w-full max-w-[400px] space-y-6">
          <div
            className={[
              "rounded-2xl",
              "border border-white/10 bg-white/5 p-10",
              "shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-[10px]",
            ].join(" ")}
          >
            <AuthFormLogin action={login} callbackURL={callbackURL} />
          </div>
        </div>
      </main>
    </div>
  );
};
