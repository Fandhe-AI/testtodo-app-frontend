# Cursor Commands 一覧

このディレクトリには、プロジェクト開発で役立つCursor commandsが含まれています。

## 開発ワークフロー

### FSDアーキテクチャ関連

- **[create-fsd-slice.md](./create-fsd-slice.md)** - FSDスライス（feature, entity, widget, page）の作成
- **[create-component.md](./create-component.md)** - コンポーネントの作成（Server/Client Component）
- **[create-custom-hook.md](./create-custom-hook.md)** - カスタムフックの作成

## API関連

- **[generate-api-client.md](./generate-api-client.md)** - APIクライアントの生成（Kubb）
- **[setup-api-integration.md](./setup-api-integration.md)** - API統合の実装パターン

## コード品質

- **[run-code-quality-checks.md](./run-code-quality-checks.md)** - リント、フォーマット、型チェックの実行

## トラブルシューティング

- **[troubleshoot-common-issues.md](./troubleshoot-common-issues.md)** - よくある問題の解決方法

## テスト

- **[setup-testing.md](./setup-testing.md)** - テスト環境のセットアップと実装パターン

## AI駆動開発フロー

参考: [CursorとClaude Codeを組み合わせた個人的おすすめAI駆動開発の手順](https://dev.classmethod.jp/articles/cursor-claude-code-ai-driven/)

### 要求整理フロー
- **[create-github-issue.md](./create-github-issue.md)** - GitHub issueの作成

### 初版作成フロー
- **[create-github-branch.md](./create-github-branch.md)** - ブランチの作成
- **[create-commit.md](./create-commit.md)** - コミットの作成
- **[create-pull-request.md](./create-pull-request.md)** - プルリクエストの作成

### レビュー対応フロー
- **[review-pull-request.md](./review-pull-request.md)** - プルリクエストのレビュー

## 使用方法

1. Cursorのコマンドパレット（Cmd/Ctrl + Shift + P）を開く
2. "Cursor: Run Command" を選択
3. 使用したいコマンドファイルを選択
4. コマンドの指示に従って実装を進める

## コマンドの追加

新しいコマンドを追加する場合は、以下の点に注意してください：

- ファイル名はkebab-caseで命名
- マークダウンファイルとして作成
- プロジェクトのルール（FSD、コーディング規約など）に準拠
- 実用的な例とチェックリストを含める

