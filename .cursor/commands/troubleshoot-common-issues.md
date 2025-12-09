# よくある問題のトラブルシューティング

## 概要

開発中によく発生する問題とその解決方法をまとめています。

## 依存関係の問題

### 症状
- `Module not found`エラー
- 型定義が見つからない
- パッケージのバージョン不一致

### 解決方法

```bash
# 1. node_modulesを削除
rm -rf node_modules packages/*/node_modules apps/*/node_modules

# 2. 依存関係を再インストール
pnpm install

# 3. 特定のパッケージのみ再インストール
pnpm install --filter=app
```

## キャッシュの問題

### 症状
- ビルド結果が古い
- 変更が反映されない
- 型エラーが解決しない

### 解決方法

```bash
# 1. Turborepoキャッシュをクリア
pnpm exec turbo clean

# 2. pnpmキャッシュをクリア
pnpm store prune

# 3. Next.jsキャッシュをクリア（apps/appの場合）
rm -rf apps/app/.next
```

## 型エラーの問題

### 症状
- 自動生成された型が見つからない
- APIクライアントの型が正しくない
- 型定義が古い

### 解決方法

```bash
# 1. APIを再生成
pnpm generate:api

# 2. 型チェックを実行
pnpm check:type

# 3. 特定のパッケージの型を確認
pnpm check:type --filter=@repo/shared-api-type
```

## ビルドエラー

### 症状
- ビルドが失敗する
- 依存関係の解決に失敗
- 型エラーでビルドできない

### 解決方法

```bash
# 1. 全パッケージをクリーンビルド
pnpm exec turbo clean
pnpm build

# 2. 特定のパッケージのみビルド
pnpm build --filter=app

# 3. 依存関係を確認
pnpm list --depth=0
```

## インポートエラー（FSD違反）

### 症状
- 上位レイヤーから下位レイヤーへのインポートエラー
- 循環依存エラー
- モジュール解決エラー

### 解決方法

1. **インポートルールを確認**
  - `shared` → `entities` ❌
  - `entities` → `features` ❌
  - `features` → `widgets` ❌
  - `widgets` → `pages` ❌

2. **正しいインポートパターン**
  - 下位レイヤーから上位レイヤーへのインポートのみ許可
  - 必要に応じて上位レイヤーを経由

3. **循環依存の解決**
  - 共通コードを`shared/`に移動
  - 依存関係を見直す

## 環境変数の問題

### 症状
- 環境変数が読み込まれない
- API URLが正しくない
- 型定義エラー

### 解決方法

```bash
# 1. 環境変数ファイルを確認
cat apps/app/.env
cat apps/mock/.env
cat packages/shared/config-kubb/.env

# 2. .env.exampleを参考に設定
cp apps/app/.env.example apps/app/.env

# 3. 環境変数の型定義を確認
# packages/shared/config-*/src/env.ts
```

## Git hooksの問題

### 症状
- コミット時にエラーが発生
- リント/フォーマットが実行されない
- Lefthookが動作しない

### 解決方法

```bash
# 1. Lefthookを再インストール
pnpm exec lefthook install

# 2. Git hooksを確認
ls -la .git/hooks/

# 3. Lefthookの設定を確認
cat lefthook.yml
```

## パッケージバージョンの問題

### 症状
- パッケージバージョンが不一致
- 同じパッケージが異なるバージョンでインストールされている

### 解決方法

```bash
# 1. パッケージバージョンを確認
pnpm package:list

# 2. バージョンを統一
pnpm package:fix

# 3. 更新を確認
pnpm package:update
```

## 開発サーバーの問題

### 症状
- 開発サーバーが起動しない
- ホットリロードが動作しない
- ポートが既に使用されている

### 解決方法

```bash
# 1. プロセスを確認
lsof -i :3000

# 2. プロセスを終了
kill -9 <PID>

# 3. 開発サーバーを再起動
pnpm dev --filter=app
```

## チェックリスト

問題が発生した場合：

- [ ] エラーメッセージを確認
- [ ] 関連するログを確認
- [ ] 依存関係を再インストール
- [ ] キャッシュをクリア
- [ ] 型定義とAPIを再生成
- [ ] ビルドをクリーン実行
- [ ] 環境変数を確認

