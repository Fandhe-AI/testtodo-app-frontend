# カスタムフックの作成

## 概要

FSDアーキテクチャに従って、適切なレイヤーとセグメントにカスタムフックを作成します。

## 使用方法

このコマンドを使用する際は、以下の情報を提供してください：
- **フック名**: `use`プレフィックス付き（例: `useTodoList`, `useUserProfile`）
- **配置先**: どのスライスの`src/model/`セグメントに配置するか
- **フックの目的**: データフェッチング、状態管理、ビジネスロジックなど
- **依存関係**: 使用するAPI、他のフック、ライブラリ

## 配置場所

**重要**: すべてのコードは`src/`ディレクトリ配下に配置します。

### Features レイヤー
機能固有のロジックやユーザーアクションに関連するフック

```
packages/features/[feature-name]/
└── src/
    └── model/
        └── use-[feature-name]/
            └── index.ts
```

### Entities レイヤー
エンティティ固有のロジックやデータ管理に関連するフック

```
packages/entities/[entity-name]/
└── src/
    └── model/
        └── use-[entity-name]/
            └── index.ts
```

## 実装パターン

### データフェッチングフック

```typescript
// packages/features/todo-list/src/model/use-todo-list/index.ts
import { useState, useEffect } from "react";
import { getTodos } from "@repo/shared-api-client";
import type { GetTodosQueryResponse } from "@repo/shared-api-type";

export const useTodoList = (limit = 10) => {
  const [todos, setTodos] = useState<GetTodosQueryResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getTodos({ limit })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [limit]);

  return { todos, loading, error };
}
```

### 状態管理フック

```typescript
// packages/features/todo-form/src/model/use-todo-form/index.ts
import { useState, useCallback } from "react";
import { postTodos } from "@repo/shared-api-client";
import type { PostTodosBody } from "@repo/shared-api-type";

export const useTodoForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submit = useCallback(async (data: PostTodosBody) => {
    setLoading(true);
    setError(null);
    try {
      const result = await postTodos(data);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      throw err;
    }
  }, []);

  return { submit, loading, error };
}
```

### ビジネスロジックフック

```typescript
// packages/entities/user/src/model/use-user/index.ts
import { useState, useCallback } from "react";
import type { User } from "@repo/shared-api-type";

export const useUser = (initialUser: User | null = null) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const updateName = useCallback((name: string) => {
    if (user) {
      setUser({ ...user, name });
    }
  }, [user]);

  const isAdmin = user?.role === "admin";

  return { user, updateName, isAdmin };
}
```

## チェックリスト

作成後、以下を確認してください：

- [ ] フック名が`use`プレフィックスで始まっている
- [ ] ファイル名がkebab-caseで命名されている
- [ ] **`src/model/`セグメント配下に配置されている**
- [ ] 適切なレイヤーに配置されている
- [ ] 依存配列が適切に設定されている（useEffect, useMemo, useCallback）
- [ ] 型定義が適切に記述されている
- [ ] エラーハンドリングが実装されている
- [ ] インポートルールに従っている

## 注意事項

- **フック名**: 必ず`use`で始める
- **依存配列**: `useEffect`, `useMemo`, `useCallback`の依存配列を適切に設定
- **型安全性**: 戻り値の型を明示的に定義
- **エラーハンドリング**: 適切なエラーハンドリングを実装
- **React Compiler**: React Compilerが有効な場合、多くの最適化は自動で行われる

