/**
 * 登録ページのローディングフォールバック
 */
export const Fallback = () => {
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
          <div className="h-8 w-32 animate-pulse rounded bg-white/10" />
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
            <div className="space-y-4">
              {/* ユーザー名フィールド */}
              <div className="space-y-2">
                <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
                <div className="h-10 animate-pulse rounded-lg bg-white/10" />
              </div>
              {/* メールフィールド */}
              <div className="space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
                <div className="h-10 animate-pulse rounded-lg bg-white/10" />
              </div>
              {/* パスワードフィールド */}
              <div className="space-y-2">
                <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
                <div className="h-10 animate-pulse rounded-lg bg-white/10" />
              </div>
              {/* ボタン */}
              <div className="h-12 animate-pulse rounded-lg bg-green-500/30" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
