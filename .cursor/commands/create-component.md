# コンポーネントの作成

## 概要

FSDアーキテクチャに従って、適切なレイヤーとセグメントにコンポーネントを作成します。

## 使用方法

このコマンドを使用する際は、以下の情報を提供してください：
- **コンポーネント名**: PascalCase（例: `UserCard`, `TodoList`）
- **配置先**: どのスライスの`src/ui/`セグメントに配置するか
- **コンポーネントタイプ**: `server` または `client`
- **Props型**: 必要なPropsの型定義

## Server Component vs Client Component

### Server Component（デフォルト）
- インタラクティブな機能が不要な場合
- データフェッチングを直接行う場合
- パフォーマンスを最適化したい場合

```typescript
// ✅ Good - Server Component
export const UserCard = async ({ userId }: { userId: string }) => {
  const user = await fetchUser(userId);
  return <div>{user.name}</div>;
};
```

### Client Component
- `useState`, `useEffect`, イベントハンドラが必要な場合
- ブラウザAPIを使用する場合
- インタラクティブな機能が必要な場合

```typescript
// ✅ Good - Client Component
"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

## 作成されるファイル構造

**重要**: すべてのコードは`src/`ディレクトリ配下に配置します。

```
[slice-name]/
└── src/
    └── ui/
        └── [component-name]/
            └── index.tsx
```

## チェックリスト

作成後、以下を確認してください：

- [ ] コンポーネント名がPascalCaseで命名されている
- [ ] ファイル名がkebab-caseで命名されている
- [ ] **`src/ui/`セグメント配下に配置されている**
- [ ] 適切なレイヤーに配置されている
- [ ] Server ComponentとClient Componentが適切に使い分けられている
- [ ] Props型が適切に定義されている
- [ ] 型安全性が保たれている（`any`を使用していない）

## 注意事項

- **デフォルトはServer Component**: 特別な理由がない限りServer Componentを使用
- **"use client"ディレクティブ**: Client Componentの場合のみ先頭に記述
- **型定義**: Propsは必ず型定義を明示的に記述
- **インポート順序**: 外部ライブラリ → 内部パッケージ → 相対パス

