# コード品質チェックの実行

## 概要

プロジェクトのコード品質を確保するためのチェックコマンドを実行します。

## 利用可能なコマンド

### リントチェック

```bash
# リントチェック（エラーのみ表示）
pnpm lint

# リント修正（自動修正可能な問題を修正）
pnpm lint:fix

# リント修正（安全でない修正も含む）
pnpm lint:fix:unsafe
```

### フォーマットチェック

```bash
# フォーマットチェック（エラーのみ表示）
pnpm format

# フォーマット修正
pnpm format:fix
```

### 型チェック

```bash
# 全パッケージの型チェック
pnpm check:type

# 特定のパッケージのみ型チェック
pnpm check:type --filter=app
```

### パッケージバージョン管理

```bash
# パッケージバージョン一覧表示
pnpm package:list

# パッケージ更新チェック
pnpm package:update

# パッケージ更新実行
pnpm package:update:fix

# パッケージバージョン統一（syncpack）
pnpm package:fix
```

## 推奨ワークフロー

### 開発中

1. **コードを書く**
2. **保存時に自動フォーマット**（エディタ設定）
3. **定期的にリントチェック**: `pnpm lint:fix`

### コミット前

1. **リント修正**: `pnpm lint:fix`
2. **フォーマット修正**: `pnpm format:fix`
3. **型チェック**: `pnpm check:type`

### PR作成前

1. **全チェック実行**:
  ```bash
  pnpm lint
  pnpm format
  pnpm check:type
  ```
2. **ビルド確認**: `pnpm build`
3. **エラーがないことを確認**

## トラブルシューティング

### リントエラーが修正できない場合

```bash
# 安全でない修正も含めて実行
pnpm lint:fix:unsafe
```

### 型エラーが解決しない場合

1. **型定義を確認**: `packages/shared/api-type/`を確認
2. **API再生成**: `pnpm generate:api`を実行
3. **依存関係の再インストール**: `pnpm install`

### フォーマットが適用されない場合

```bash
# Biomeの設定を確認
cat biome.json

# 強制的にフォーマット
pnpm format:fix
```

## チェックリスト

PR作成前に以下を確認：

- [ ] `pnpm lint`でエラーがない
- [ ] `pnpm format`でエラーがない
- [ ] `pnpm check:type`でエラーがない
- [ ] `pnpm build`が成功する
- [ ] 自動生成ファイルを編集していない

