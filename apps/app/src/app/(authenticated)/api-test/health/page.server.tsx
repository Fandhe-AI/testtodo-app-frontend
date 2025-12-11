import type { HealthTestResult } from "./actions";
import { runHealthTest } from "./actions";

export const ServerTest = async () => {
  const healthResult: HealthTestResult = await runHealthTest();

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-blue-50 p-4">
        <h2 className="mb-3 font-bold text-blue-800 text-xl">
          🔧 サーバーサイド API テスト
        </h2>
        <div className="mb-3 text-gray-600 text-sm">
          <p>
            <strong>実行環境:</strong> Next.js Server Component
          </p>
          <p>
            <strong>実行時刻:</strong> {healthResult.timestamp}
          </p>
        </div>

        <div className="rounded border bg-white p-3">
          <h3 className="mb-2 font-semibold">
            ステータス:
            <span
              className={`ml-2 rounded px-2 py-1 text-sm ${
                healthResult.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {healthResult.success ? "✅ 成功" : "❌ 失敗"}
            </span>
          </h3>

          {healthResult.success && healthResult.data !== undefined && (
            <div>
              <h4 className="mb-1 font-medium text-gray-700">
                レスポンスデータ:
              </h4>
              <pre className="overflow-x-auto rounded border bg-gray-100 p-3 text-sm">
                {JSON.stringify(healthResult.data, null, 2)}
              </pre>
            </div>
          )}

          {!healthResult.success && healthResult.error && (
            <div>
              <h4 className="mb-1 font-medium text-red-700">エラー詳細:</h4>
              <pre className="overflow-x-auto rounded border border-red-200 bg-red-50 p-3 text-red-800 text-sm">
                {healthResult.error}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
