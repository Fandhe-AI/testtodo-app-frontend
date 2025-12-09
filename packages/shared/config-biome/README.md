# @repo/config-biome

Biome v2.0.6の新機能を活用した、各workspace用に最適化されたBiome設定パッケージです。

## 設定ファイル一覧

### 基本設定
- `base.json` - 全プロジェクト共通の基本設定
- `config-only.json` - 設定ファイル専用（JavaScript/TypeScript設定ファイル用）

### フレームワーク固有設定
- `react-library.json` - Reactライブラリ用
- `nextjs.json` - Next.jsアプリケーション用
- `react-router.json` - React Routerアプリケーション用
- `storybook.json` - Storybook用

## 使用方法

各workspaceで以下のように`biome.json`を作成してください：

### Reactライブラリ
```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.4/schema.json",
  "extends": ["@repo/shared-config-biome/configs/react-library"]
}
```

### Next.jsアプリケーション
```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.4/schema.json",
  "extends": ["@repo/shared-config-biome/configs/nextjs"]
}
```

### React Routerアプリケーション
```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.4/schema.json",
  "extends": ["@repo/shared-config-biome/configs/react-router"]
}
```

### Storybook
```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.4/schema.json",
  "extends": ["@repo/shared-config-biome/configs/storybook"]
}
```

### 設定ファイル専用パッケージ
```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.4/schema.json",
  "extends": ["@repo/shared-config-biome/configs/config-only"]
}
```

## コマンド例

各workspaceディレクトリで以下のコマンドを実行できます：

```bash
# ファイルをチェック（フォーマット・リント）
pnpm biome check .

# ファイルを自動修正
pnpm biome check --write .

# 特定のファイルをチェック
pnpm biome check src/button.tsx --verbose
```

## Biome v2.0.6の新機能

このパッケージでは以下のv2.0.6の新機能を活用しています：

- **noExcessiveLinesPerFunction**: 関数の行数制限（基本100行、ルートレベル150行）
- **noUnassignedVariables**: 未代入変数の検出
- **改善されたuseKeyWithClickEvents**: より正確なアクセシビリティチェック
- **強化されたorganizeImports**: より効率的なインポート整理

## ディレクトリ固有の適用

各workspaceの`biome.json`により、そのディレクトリ配下のみに適切なルールが適用されます：

- `apps/storybook/` - Storybook用ルール
- `packages/shared/config-biome/` - 設定ファイル用ルール
- `packages/shared/config-dependency-cruiser/` - 設定ファイル用ルール
- `packages/shared/config-typescript/` - 設定ファイル用ルール
- `packages/shared/ui/` - Reactライブラリ用ルール

## カスタマイズ

各workspaceで追加のルールが必要な場合は、`biome.json`でオーバーライドできます：

```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.4/schema.json",
  "extends": ["@repo/shared-config-biome/configs/nextjs"],
  "linter": {
    "rules": {
      "nursery": {
        "useSortedClasses": "error"
      }
    }
  }
}
``` 
