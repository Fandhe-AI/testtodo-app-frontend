"use client";

import type { createRegister } from "@repo/features-auth";
import { AuthFormRegister } from "@repo/features-auth/ui/form/register";
import { use } from "react";
import type { RegisterPageSearchParams } from "../../model";

type Props = {
  /**
   * 登録ページの Search Params
   */
  searchParams: Promise<RegisterPageSearchParams>;
  /**
   * 登録ページの Action
   */
  register: ReturnType<typeof createRegister>;
  /**
   * ページタイトル
   * @default "アカウント作成"
   */
  title?: string;
};

/**
 * 登録ページコンポーネント
 *
 * FSD に従って設計された登録ページです。
 * Server Action を受け取り、ユーザー登録処理を行います。
 */
export const ClientPage = ({
  searchParams,
  register,
  title = "アカウント作成",
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
            <AuthFormRegister action={register} callbackURL={callbackURL} />
          </div>
        </div>
      </main>
    </div>
  );
};
