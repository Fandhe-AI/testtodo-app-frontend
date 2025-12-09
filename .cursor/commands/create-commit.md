# Git コミット作成

## 概要

変更内容を確認し、適切なコミットメッセージを作成してコミットします。

## 使用方法

このコマンドを使用する際は、以下の情報を提供してください：
- **変更内容の説明**（オプション）: 特に重要な変更がある場合は説明してください

## 手順

1. **変更内容の確認**
  - `git status` で変更されたファイルを確認
  - `git diff` で変更内容を確認

2. **コミットメッセージの作成**
  - 変更内容を分析し、適切なコミットメッセージを作成
  - Commitlintルールに従った形式で作成

3. **コミットの実行**
  - `git add` で変更をステージング
  - `git commit` でコミット

## コミットメッセージの形式

このプロジェクトはCommitlintルールに従います。以下の形式でコミットメッセージを作成してください：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type（必須）

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメントのみの変更
- `style`: コードの動作に影響しない変更（フォーマット、セミコロンなど）
- `refactor`: バグ修正や機能追加を伴わないコード変更
- `perf`: パフォーマンス改善
- `test`: テストの追加・修正
- `chore`: ビルドプロセスやツールの変更
- `ci`: CI設定の変更

### Scope（オプション）

影響を受けるパッケージや機能を指定します。

例：
- `api`: API関連
- `ui`: UIコンポーネント
- `config`: 設定ファイル
- `deps`: 依存関係

### Subject（必須）

- 50文字以内
- 命令形で記述（例: "add" ではなく "add"）
- 最初の文字は小文字
- 末尾にピリオドを付けない

### Body（オプション）

- 変更の理由や詳細を説明
- 72文字で折り返す
- 空行で区切る

### Footer（オプション）

- 関連するissue番号を記載
- `Closes #123` や `Refs #456` の形式

## コミットメッセージの例

### 機能追加
```
feat(todo): add todo list component

- Add TodoList component in features/todo-list
- Implement add/delete functionality
- Add tests for TodoList component

Closes #42
```

### バグ修正
```
fix(api): fix batch processing failed URL status

- Fix issue where failed URLs remain in processing status
- Add error handling in batch-completion-handler
- Update related documentation

Fixes #56
```

### リファクタリング
```
refactor(api): extract common batch processing logic

- Create batch-completion-handler.ts to reduce code duplication
- Consolidate 300+ lines of common logic
- Update related tests

Refs #57
```

## 変更内容の分析

コミットメッセージを作成する際は、以下の観点で変更内容を分析してください：

1. **主な変更内容**: 何が変更されたか
2. **変更の理由**: なぜ変更されたか
3. **影響範囲**: どの部分に影響があるか
4. **関連ファイル**: どのファイルが変更されたか

## 注意事項

- **差分が長い場合**: 変更内容を要約してコミットメッセージを作成してください
- **複数の変更**: 関連する変更は1つのコミットにまとめ、無関係な変更は別のコミットに分けてください
- **未ステージングの変更**: すべての変更をステージングする前に、ユーザーに確認してください
- **想定外の作業**: 想定外の作業が発生したり、エラーが見つかった場合はユーザに相談してください

## チェックリスト

作成後、以下を確認してください：

- [ ] 変更内容が正しく確認できている
- [ ] コミットメッセージがCommitlintルールに従っている
- [ ] 適切なtypeが選択されている
- [ ] subjectが50文字以内で命令形で記述されている
- [ ] 関連するissue番号が含まれている（該当する場合）
- [ ] コミットが正常に作成されている

