import { NEMO } from "@rescale/nemo";
import type { NextFetchEvent, NextRequest } from "next/server";
import { authProxy } from "./lib/auth-proxy";

/**
 * Next.js Proxy 設定
 *
 * @rescale/nemo を使用してミドルウェアを構成します。
 * Next.js 16+ では `middleware` は非推奨となり、`proxy` にリネームされました。
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 * @see https://github.com/z4nr34l/nemo
 */

/**
 * NEMO インスタンスを作成
 *
 * パスベースのルーティングとグローバルミドルウェアを設定します。
 * 各ルートに対して複数のミドルウェアをチェーンできます。
 */
const nemo = new NEMO(
  {
    // ========================================
    // ルート固有のミドルウェア
    // ========================================
    // 必要に応じて追加のルート固有ミドルウェアを設定
  },
  {
    // ========================================
    // グローバルミドルウェア
    // ========================================
    before: [
      /**
       * 認証ミドルウェア
       *
       * すべてのリクエストに対して認証チェックを実行します。
       * - /login, /register などの公開パスはスキップ
       * - 未認証の場合は /login にリダイレクト
       */
      authProxy,
    ],
  },
  {
    // デバッグモード（開発環境のみ）
    debug: process.env.NODE_ENV === "development",
  },
);

/**
 * Next.js 16+ Proxy 関数
 *
 * Next.js 16+ では `proxy` という名前でエクスポートする必要があります。
 */
export function proxy(request: NextRequest, event: NextFetchEvent) {
  return nemo.middleware(request, event);
}

/**
 * Proxy 設定
 *
 * matcher: Proxy を適用するパスを指定します。
 * 以下のパスは除外されます:
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
