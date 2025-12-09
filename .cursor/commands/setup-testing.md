# テストのセットアップ

## 概要

プロジェクトにテスト環境をセットアップし、テストを実装します。

## テストフレームワーク

プロジェクトで使用するテストフレームワークを確認してください：
- **Jest** / **Vitest** - ユニットテスト
- **React Testing Library** - コンポーネントテスト
- **MSW** - APIモック

## テストファイルの配置

### FSDアーキテクチャに従った配置

**重要**: すべてのコードとテストファイルは`src/`ディレクトリ配下に配置します。

```
[slice-name]/
└── src/
    ├── ui/
    │   └── [component]/
    │       ├── index.tsx
    │       └── index.test.tsx      # コンポーネントテスト
    ├── model/
    │   └── use-[hook]/
    │       ├── index.ts
    │       └── index.test.ts        # フックテスト
    └── api/
        ├── index.ts
        └── index.test.ts             # APIテスト
```

## テストの種類

### コンポーネントテスト

```typescript
// packages/features/todo-list/src/ui/todo-list.test.tsx
import { render, screen } from "@testing-library/react";
import { TodoList } from "./todo-list";

describe("TodoList", () => {
  it("should render todos", () => {
    const todos = [
      { id: "1", title: "Todo 1" },
      { id: "2", title: "Todo 2" },
    ];
    render(<TodoList todos={todos} />);
    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
  });
});
```

### フックテスト

```typescript
// packages/features/todo-list/src/model/use-todo-list.test.ts
import { renderHook, waitFor } from "@testing-library/react";
import { useTodoList } from "./use-todo-list";
import { getTodos } from "@repo/shared-api-client";

jest.mock("@repo/shared-api-client");

describe("useTodoList", () => {
  it("should fetch todos", async () => {
    const mockTodos = [{ id: "1", title: "Todo 1" }];
    (getTodos as jest.Mock).mockResolvedValue(mockTodos);

    const { result } = renderHook(() => useTodoList());

    await waitFor(() => {
      expect(result.current.todos).toEqual(mockTodos);
      expect(result.current.loading).toBe(false);
    });
  });
});
```

### APIテスト（MSW使用）

```typescript
// packages/features/todo-list/src/api/index.test.ts
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getTodosHandler } from "@repo/shared-api-handler";

const server = setupServer(
  getTodosHandler(rest)
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("TodoList API", () => {
  it("should fetch todos", async () => {
    const todos = await getTodos({ limit: 10 });
    expect(todos).toHaveLength(10);
  });
});
```

## モックデータの使用

```typescript
import { createGetTodos } from "@repo/shared-api-mock";

describe("TodoList", () => {
  it("should render todos", () => {
    const mockTodos = createGetTodos();
    render(<TodoList todos={mockTodos} />);
    // テストを続行
  });
});
```

## チェックリスト

テスト実装後：

- [ ] **テストファイルが`src/`ディレクトリ配下に配置されている**
- [ ] テストファイルが適切な場所に配置されている（`src/ui/`, `src/model/`, `src/api/`など）
- [ ] コンポーネント、フック、APIのテストが実装されている
- [ ] モックデータを適切に使用している
- [ ] エラーハンドリングのテストが含まれている
- [ ] テストが正常に実行される

## 注意事項

- **テストファイル名**: `*.test.ts` または `*.test.tsx`
- **MSW**: APIモックには自動生成されたハンドラーを使用
- **モックデータ**: `@repo/shared-api-mock`から生成されたモックデータを使用
- **カバレッジ**: 適切なテストカバレッジを維持

