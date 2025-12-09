/**
 * ログインページのローディングフォールバック
 */
export const Fallback = () => {
  return (
    <div
      className={[
        "flex min-h-screen items-center justify-center",
        "bg-linear-to-br from-[#1a1a2e] to-[#16213e]",
      ].join(" ")}
    >
      <div
        className={[
          "w-full max-w-[400px] rounded-2xl border border-white/10",
          "bg-white/5 p-10 text-center text-white",
          "shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-[10px]",
        ].join(" ")}
      >
        <p>読み込み中...</p>
      </div>
    </div>
  );
};
