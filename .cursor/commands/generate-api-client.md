# APIクライアントの生成

## 概要

OpenAPI/Swagger仕様からTypeScript型定義とAPIクライアントを自動生成します。

## 前提条件

- OpenAPI/Swagger仕様ファイルが`packages/shared/api-spec/`に配置されていること
- Kubbの設定が`packages/shared/config-kubb/`に正しく設定されていること
- 環境変数（API URLなど）が設定されていること

## 生成コマンド

```bash
# APIクライアント/型を生成
pnpm generate:api
```

## 生成されるパッケージ

### @repo/shared-api-client
APIクライアント関数が生成されます。

```typescript
// 使用例
import { getTodos, postTodos } from "@repo/shared-api-client";

const todos = await getTodos({ limit: 10 });
const newTodo = await postTodos({ title: "New Todo" });
```

### @repo/shared-api-type
TypeScript型定義が生成されます。

```typescript
// 使用例
import type { GetTodosQueryResponse, PostTodosBody } from "@repo/shared-api-type";

const todos: GetTodosQueryResponse = await getTodos();
const body: PostTodosBody = { title: "New Todo" };
```

### @repo/shared-api-zod
Zodスキーマが生成されます。

```typescript
// 使用例
import { postTodosSchema } from "@repo/shared-api-zod";

const validatedData = postTodosSchema.parse(requestBody);
```

### @repo/shared-api-handler
MSW用のAPIハンドラーが生成されます。

```typescript
// 使用例（MSW）
import { getTodosHandler } from "@repo/shared-api-handler";
import { rest } from "msw";

export const handlers = [
  getTodosHandler(rest),
];
```

### @repo/shared-api-mock
モックデータ生成関数が生成されます。

```typescript
// 使用例
import { createGetTodos } from "@repo/shared-api-mock";

const mockTodos = createGetTodos();
```

## 生成後の確認事項

### 1. 型定義の確認

```bash
# 型チェックを実行
pnpm check:type --filter=@repo/shared-api-type
```

### 2. 生成されたファイルの確認

```bash
# 生成されたファイルを確認
ls -la packages/shared/api-client/src/
ls -la packages/shared/api-type/src/
```

### 3. インポートの確認

生成されたパッケージから正しくインポートできるか確認：

```typescript
// ✅ Good
import { getTodos } from "@repo/shared-api-client";
import type { GetTodosQueryResponse } from "@repo/shared-api-type";

// ❌ Bad - 自動生成ファイルを直接インポート
import { getTodos } from "@repo/shared-api-client/src/model/.../getTodos";
```

## トラブルシューティング

### 生成に失敗する場合

1. **環境変数を確認**
  ```bash
  cat packages/shared/config-kubb/.env
  ```

2. **OpenAPI仕様を確認**
  ```bash
  ls -la packages/shared/api-spec/
  ```

3. **Kubb設定を確認**
  ```bash
  cat packages/shared/config-kubb/kubb.config.ts
  ```

### 型エラーが発生する場合

1. **APIを再生成**
  ```bash
  pnpm generate:api
  ```

2. **型チェックを実行**
  ```bash
  pnpm check:type
  ```

3. **依存関係を再インストール**
  ```bash
  pnpm install
  ```

## チェックリスト

API生成後：

- [ ] `pnpm generate:api`が正常に完了した
- [ ] 型エラーがない（`pnpm check:type`）
- [ ] 生成されたパッケージから正しくインポートできる
- [ ] 自動生成ファイルを直接編集していない
- [ ] 必要に応じて使用箇所のコードを更新した

## 重要な注意事項

⚠️ **自動生成ファイルは直接編集しないでください**

- `packages/shared/api-*/`内のファイルはKubbで自動生成されます
- 変更が必要な場合は、OpenAPI/Swagger仕様を更新してから再生成してください
- 生成されたファイルを直接編集すると、次回の生成時に上書きされます

