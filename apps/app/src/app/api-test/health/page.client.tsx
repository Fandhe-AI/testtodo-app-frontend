"use client";

import { useState } from "react";
import type { HealthTestResult } from "./actions";
import { runHealthTest } from "./actions";

export const PageClient = () => {
  const [result, setResult] = useState<HealthTestResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleHealthTest = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const result = await runHealthTest();

      setResult(result);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResult = (): void => {
    setResult(null);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-green-50 p-4">
        <h2 className="mb-3 font-bold text-green-800 text-xl">
          🌐 クライアントサイド API テスト
        </h2>
        <div className="mb-3 text-gray-600 text-sm">
          <p>
            <strong>実行環境:</strong> React Client Component
          </p>
        </div>

        <div className="mb-4 flex gap-2">
          <button
            type="button"
            onClick={handleHealthTest}
            disabled={isLoading}
            className={`rounded px-4 py-2 font-medium ${
              isLoading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {isLoading ? "⏳ テスト実行中..." : "🚀 Health API テスト"}
          </button>

          {result && (
            <button
              type="button"
              onClick={clearResult}
              className="rounded bg-gray-500 px-4 py-2 font-medium text-white hover:bg-gray-600"
            >
              🗑️ 結果をクリア
            </button>
          )}
        </div>

        {result && (
          <div className="rounded border bg-white p-3">
            <h3 className="mb-2 font-semibold">
              テスト結果:
              <span
                className={`ml-2 rounded px-2 py-1 text-sm ${
                  result.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {result.success ? "✅ 成功" : "❌ 失敗"}
              </span>
              {result.duration && (
                <span className="ml-2 text-gray-600 text-sm">
                  ({result.duration}ms)
                </span>
              )}
            </h3>

            <div className="mb-2 text-gray-600 text-sm">
              <strong>実行時刻:</strong> {result.timestamp}
            </div>

            {result.success && result.data !== undefined && (
              <div>
                <h4 className="mb-1 font-medium text-gray-700">
                  レスポンスデータ:
                </h4>
                <pre className="overflow-x-auto rounded border bg-gray-100 p-3 text-sm">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              </div>
            )}

            {!result.success && result.error && (
              <div>
                <h4 className="mb-1 font-medium text-red-700">エラー詳細:</h4>
                <pre className="overflow-x-auto rounded border border-red-200 bg-red-50 p-3 text-red-800 text-sm">
                  {result.error}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
