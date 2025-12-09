# API統合のセットアップ

## 概要

自動生成されたAPIクライアントを使用して、API統合を実装します。

## 前提条件

- API仕様が更新され、`pnpm generate:api`が実行されていること
- 必要な型定義とクライアント関数が生成されていること

## 使用パッケージ

### @repo/shared-api-client
APIクライアント関数を直接使用

```typescript
import { getTodos } from "@repo/shared-api-client";

const todos = await getTodos({ limit: 10 });
```

### @repo/shared-api-type
TypeScript型定義を使用

```typescript
import type { GetTodosQueryResponse } from "@repo/shared-api-type";

const todos: GetTodosQueryResponse = await getTodos();
```

### @repo/shared-api-zod
バリデーションに使用

```typescript
import { postTodosSchema } from "@repo/shared-api-zod";

const validatedData = postTodosSchema.parse(body);
```

### @repo/shared-api-mock
テストや開発時にモックデータを生成

```typescript
import { createGetTodos } from "@repo/shared-api-mock";

const mockTodos = createGetTodos();
```

## 実装パターン

### Server Componentでの使用

```typescript
import { getTodos } from "@repo/shared-api-client";
import type { GetTodosQueryResponse } from "@repo/shared-api-type";

export default async function TodosPage() {
  try {
    const todos: GetTodosQueryResponse = await getTodos({ limit: 10 });
    return <TodoList todos={todos} />;
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    return <Error message="データの取得に失敗しました" />;
  }
}
```

### Client Componentでの使用

```typescript
"use client";
import { useEffect, useState } from "react";
import { getTodos } from "@repo/shared-api-client";
import type { GetTodosQueryResponse } from "@repo/shared-api-type";

export function TodoList() {
  const [todos, setTodos] = useState<GetTodosQueryResponse | null>(null);

  useEffect(() => {
    getTodos({ limit: 10 })
      .then(setTodos)
      .catch(console.error);
  }, []);

  if (!todos) return <div>Loading...</div>;
  return <div>{/* レンダリング */}</div>;
}
```

### Route Handlerでの使用

```typescript
import { NextResponse } from "next/server";
import { postTodosSchema } from "@repo/shared-api-zod";
import { createTodo } from "@repo/shared-api-client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = postTodosSchema.parse(body);
    const todo = await createTodo(validatedData);
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

## チェックリスト

実装後、以下を確認してください：

- [ ] 適切なパッケージからインポートしている
- [ ] 型定義を使用して型安全性を保っている
- [ ] エラーハンドリングが適切に実装されている
- [ ] バリデーションが必要な場合はZodスキーマを使用している
- [ ] Server ComponentとClient Componentで適切に使い分けている
- [ ] 自動生成ファイルを直接編集していない

## 注意事項

- **自動生成ファイル**: `packages/shared/api-*/`内のファイルは直接編集しない
- **再生成**: API仕様変更後は`pnpm generate:api`で再生成
- **型安全性**: 自動生成された型を最大限活用
- **エラーハンドリング**: 適切なエラーハンドリングを実装

