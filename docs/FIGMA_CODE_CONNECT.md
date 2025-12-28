# Figma Code Connect 導入ガイド

このドキュメントでは、Figma Code Connect をプロジェクトに導入・運用する方法を説明します。

## 目次

1. [概要](#概要)
2. [前提条件](#前提条件)
3. [Figma Personal Access Token の取得](#figma-personal-access-token-の取得)
4. [Figma コンポーネントの準備](#figma-コンポーネントの準備)
5. [新しいコンポーネント接続の追加](#新しいコンポーネント接続の追加)
6. [プロパティマッピングの書き方](#プロパティマッピングの書き方)
7. [公開・更新の手順](#公開更新の手順)
8. [トラブルシューティング](#トラブルシューティング)

---

## 概要

Figma Code Connect は、Figma のデザインシステムコンポーネントとコードベースのコンポーネントを接続するツールです。Dev Mode でコンポーネントを選択すると、対応する実際のコードスニペットが表示されます。

### このプロジェクトでの構成

FSD（Feature-Sliced Design）アーキテクチャに沿って、各パッケージに個別の設定を配置しています：

```
packages/
├── entities/todo/
│   ├── figma.config.json
│   └── src/ui/
│       ├── button/index.figma.tsx
│       ├── card/index.figma.tsx
│       └── ...
└── features/todo/
    ├── figma.config.json
    └── src/ui/
        └── ...
```

### URL の管理方法

Figma コンポーネントの URL は `figma.config.json` の `documentUrlSubstitutions` で一元管理しています。
これにより、`.figma.tsx` ファイルではプレースホルダーを使用し、URL の変更は設定ファイルのみで完結します。

```json
// figma.config.json
{
  "codeConnect": {
    "include": ["src/ui/**/*.tsx"],
    "exclude": ["node_modules", "dist"],
    "label": "React (@repo/entities-todo)",
    "importPaths": {
      "src/ui/*": "@repo/entities-todo/ui/$1"
    },
    "documentUrlSubstitutions": {
      "<FIGMA_TODO_BUTTON>": "https://figma.com/design/...",
      "<FIGMA_TODO_CARD>": "https://figma.com/design/..."
    }
  }
}
```

```tsx
// index.figma.tsx（プレースホルダーを使用）
figma.connect(TodoButton, "<FIGMA_TODO_BUTTON>", {
  props: { ... },
  example: (props) => <TodoButton {...props} />
});
```

---

## 前提条件

- Node.js 18 以上
- pnpm（このプロジェクトのパッケージマネージャー）
- Figma アカウント（Dev Mode にアクセス可能なプラン）
- Figma Personal Access Token

---

## Figma Personal Access Token の取得

1. Figma にログイン
2. 右上のアイコンをクリック → **Settings**
3. 左メニューから **Security** を選択
4. **Personal access tokens** セクションで **Generate new token** をクリック
5. トークン名を入力（例: `code-connect`）
6. 以下の権限を付与：
  - **Code Connect: Write**
  - **File content: Read**
7. **Generate token** をクリック
8. 表示されたトークンをコピー（一度しか表示されません）

### 環境変数での管理

プロジェクトルートの `.env` ファイルにトークンを設定：

```bash
# .env
FIGMA_TOKEN=your-token-here
```

---

## Figma コンポーネントの準備

### コンポーネント URL の取得

1. Figma で **Dev Mode** に切り替え
2. 接続したいコンポーネントを選択
3. **右クリック** → **Copy link to selection**

---

## 新しいコンポーネント接続の追加

### Step 1: figma.config.json に URL を追加

まず、`figma.config.json` の `documentUrlSubstitutions` に新しいコンポーネントの URL を追加します。

```json
{
  "codeConnect": {
    "include": ["src/ui/**/*.tsx"],
    "exclude": ["node_modules", "dist"],
    "label": "React (@repo/entities-todo)",
    "importPaths": {
      "src/ui/*": "@repo/entities-todo/ui/$1"
    },
    "documentUrlSubstitutions": {
      "<FIGMA_TODO_BUTTON>": "https://figma.com/design/...",
      "<FIGMA_NEW_COMPONENT>": "https://figma.com/design/..."
    }
  }
}
```

### Step 2: .figma.tsx ファイルを作成

コンポーネントと同じディレクトリに `.figma.tsx` ファイルを作成し、プレースホルダーを使用します。

```tsx
// packages/entities/todo/src/ui/new-component/index.figma.tsx
import figma from "@figma/code-connect";
import { NewComponent } from "./index";

figma.connect(NewComponent, "<FIGMA_NEW_COMPONENT>", {
  imports: ["import { NewComponent } from '@repo/entities-todo/ui/new-component'"],
  props: {
    // プロパティマッピング
  },
  example: (props) => <NewComponent {...props} />,
});
```

### CLI による自動生成（オプション）

```bash
cd packages/entities/todo
npx figma connect create "https://figma.com/design/..."
```

生成後、URL をプレースホルダーに置き換え、`figma.config.json` に追加してください。

---

## プロパティマッピングの書き方

### 基本的なマッピング関数

| 関数 | 用途 | 例 |
|------|------|-----|
| `figma.string("Prop")` | テキストプロパティ | `title: figma.string("Title")` |
| `figma.boolean("Prop")` | Boolean プロパティ | `disabled: figma.boolean("Disabled")` |
| `figma.enum("Prop", {...})` | バリアントプロパティ | 下記参照 |
| `figma.instance("Prop")` | ネストされたコンポーネント | `icon: figma.instance("Icon")` |
| `figma.children("Layer")` | 子コンポーネント | `content: figma.children("Content")` |

### enum マッピングの例

```tsx
figma.connect(Button, "...", {
  props: {
    type: figma.enum("Type", {
      Primary: "primary",
      Secondary: "secondary",
      Danger: "danger",
    }),
  },
  example: ({ type }) => <Button type={type} />,
});
```

### Boolean マッピングの例

```tsx
figma.connect(Button, "...", {
  props: {
    disabled: figma.boolean("Disabled"),
  },
  example: ({ disabled }) => <Button disabled={disabled} />,
});
```

### ネストされたコンポーネントの例

```tsx
figma.connect(Card, "...", {
  props: {
    icon: figma.instance("Leading Icon"),
  },
  example: ({ icon }) => (
    <Card>
      {icon}
      <Content />
    </Card>
  ),
});
```

---

## 公開・更新の手順

### 全パッケージの一括公開（推奨）

```bash
pnpm figma:publish
```

### 単一パッケージの公開

```bash
cd packages/entities/todo
npx figma connect publish
```

公開後、Figma の Dev Mode でコンポーネントを選択すると、右パネルにコードスニペットが表示されます。

### 接続の削除

```bash
cd packages/entities/todo
npx figma connect unpublish
```

---

## トラブルシューティング

### "No Code Connect files found"

`figma.config.json` の `include` パスと `.figma.tsx` ファイルの配置場所を確認してください。

### "Invalid Figma URL"

Dev Mode でコンポーネントを選択し、右クリック → "Copy link to selection" で URL を再取得してください。

### "Unauthorized"

Figma Settings → Security でトークンの権限（Code Connect: Write / File content: Read）を確認してください。

### プロパティマッピングが反映されない

Figma のプロパティ名（Design Panel → Properties）と `figma.enum()` などの第一引数が一致しているか確認してください。

---

## 参考リンク

- [Figma Code Connect 公式ドキュメント](https://developers.figma.com/docs/code-connect/)
- [React 向けガイド](https://developers.figma.com/docs/code-connect/react/)
- [設定ファイルリファレンス](https://developers.figma.com/docs/code-connect/api/config-file/)
- [GitHub リポジトリ](https://github.com/figma/code-connect)
