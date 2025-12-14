# TestTodo App Frontend

Next.js ベースのモノレポ構成 Todo アプリケーションです。

## 技術スタック

- **Next.js 16** (App Router)
- **React 19** + React Compiler
- **TypeScript 5**
- **Tailwind CSS 4**
- **Turborepo** - ビルドシステム
- **pnpm** - パッケージマネージャー
- **Biome** - Linter / Formatter

## プロジェクト構造

```text
testtodo-app-frontend/
├── apps/
│   ├── app/                     # メイン Next.js アプリ (port 3000)
│   └── mock/                    # 認証モックサーバー (port 8000)
├── packages/
│   ├── pages/                   # ページコンポーネント (FSD)
│   ├── widgets/                 # ウィジェットコンポーネント (FSD)
│   ├── features/                # 機能モジュール (FSD)
│   ├── entities/                # エンティティ (FSD)
│   └── shared/                  # 共有パッケージ
│       ├── api-*/               # API クライアント・型定義
│       ├── config-*/            # 設定パッケージ
│       ├── lib-*/               # ライブラリ
│       └── ui-*/                # UI コンポーネント
└── .cursor/rules/               # 開発ガイドライン
```

このプロジェクトは **Feature Sliced Design (FSD)** アーキテクチャに従っています。

## 機能

- ユーザー認証（ログイン / 新規登録）
- Todo の作成・表示・管理

## 開発環境セットアップ

### 前提条件

- Node.js 22.21.1 (Volta 推奨)
- pnpm 10.24.0

### セットアップ手順

```bash
# 一括セットアップ（推奨）
make setup

# 開発サーバーの起動
pnpm dev
```

## Makefile コマンド

```bash
make setup              # 環境構築を一括実行
make setup-env          # 環境変数ファイルを .env.example からコピー
make setup-volta        # Volta のインストールと Node.js セットアップ
make setup-pnpm         # pnpm install
make setup-lefthook     # Git hooks のインストール
make setup-better-auth  # 認証用 DB マイグレーション
```

## 主要コマンド

```bash
# 開発
pnpm dev                    # 全アプリを開発モードで起動
pnpm dev --filter=app       # メインアプリのみ起動

# ビルド
pnpm build                  # 全パッケージをビルド

# コード品質
pnpm lint                   # リントチェック
pnpm lint:fix               # リント修正
pnpm format                 # フォーマットチェック
pnpm format:fix             # フォーマット修正
pnpm check:type             # 型チェック

# API 生成
pnpm generate:api           # API クライアント・型を生成

# パッケージ管理
pnpm package:list           # パッケージバージョン一覧
pnpm package:update         # パッケージ更新チェック
```

## 開発ガイドライン

詳細なガイドラインは `.cursor/rules/` ディレクトリを参照してください。

- [project-overview.mdc](.cursor/rules/project-overview.mdc) - プロジェクト概要
- [feature-sliced-design.mdc](.cursor/rules/feature-sliced-design.mdc) - FSD アーキテクチャ
- [coding-standards.mdc](.cursor/rules/coding-standards.mdc) - コーディング規約
- [nextjs-guidelines.mdc](.cursor/rules/nextjs-guidelines.mdc) - Next.js ガイドライン
- [api-guidelines.mdc](.cursor/rules/api-guidelines.mdc) - API ガイドライン
- [monorepo-guidelines.mdc](.cursor/rules/monorepo-guidelines.mdc) - モノレポガイドライン
