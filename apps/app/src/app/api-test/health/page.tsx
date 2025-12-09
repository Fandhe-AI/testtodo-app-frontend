import { PageClient } from "./page.client";
import { ServerTest } from "./page.server";

export default () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 font-bold text-3xl text-gray-900">
          🔗 API 疎通確認テスト
        </h1>
        <p className="text-gray-600">
          勤怠管理システムのAPIエンドポイントとの接続をテストします。
          サーバーサイドとクライアントサイドの両方からの接続を確認できます。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* サーバーサイドテスト */}
        <div className="lg:order-1">
          <ServerTest />
        </div>

        {/* クライアントサイドテスト */}
        <div className="lg:order-2">
          <PageClient />
        </div>
      </div>

      <div className="mt-8 rounded-lg border bg-gray-50 p-4">
        <h2 className="mb-3 font-semibold text-gray-800 text-lg">
          📋 テスト環境情報
        </h2>
        <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
          <div>
            <p>
              <strong>環境変数:</strong>
            </p>
            <code className="rounded border bg-white px-2 py-1 text-xs">
              NEXT_PUBLIC_API_TIMEOUT, TODO_API_BASE_URL
            </code>
          </div>
        </div>

        <div className="mt-4 rounded border-blue-400 border-l-4 bg-blue-50 p-3">
          <h3 className="mb-1 font-medium text-blue-800">🔍 テスト方法</h3>
          <ul className="space-y-1 text-blue-700 text-sm">
            <li>
              <strong>サーバーサイド:</strong> ページ読み込み時に自動実行（SSR）
            </li>
            <li>
              <strong>クライアントサイド:</strong>{" "}
              ボタンクリックで手動実行（CSR）
            </li>
            <li>
              <strong>確認項目:</strong> レスポンス時間、ステータス、データ内容
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
