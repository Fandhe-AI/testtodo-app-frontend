/**
 * Todos ページのローディングフォールバック
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
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-4xl">
          {/* 検索・フィルターエリア */}
          <div className="mb-6 flex gap-4">
            <div className="h-10 flex-1 animate-pulse rounded-lg bg-white/10" />
            <div className="h-10 w-32 animate-pulse rounded-lg bg-white/10" />
          </div>

          {/* Todo リスト */}
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={[
                  "rounded-xl border border-white/10 bg-white/5 p-4",
                  "backdrop-blur-[10px]",
                ].join(" ")}
              >
                <div className="flex items-center gap-4">
                  <div className="h-5 w-5 animate-pulse rounded bg-white/10" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />
                    <div className="h-4 w-1/2 animate-pulse rounded bg-white/10" />
                  </div>
                  <div className="h-6 w-16 animate-pulse rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
