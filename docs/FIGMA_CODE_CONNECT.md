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
├── entities/
│   └── todo/
│       ├── figma.config.json        # entities/todo 専用設定（URL管理含む）
│       └── src/ui/
│           ├── badge/
│           │   └── index.figma.tsx  # TodoBadge 接続
│           └── card/
│               └── index.figma.tsx  # TodoCard 接続
└── features/
    └── todo/
        ├── figma.config.json        # features/todo 専用設定（URL管理含む）
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
    "include": ["src/ui/**/*.figma.tsx"],
    "documentUrlSubstitutions": {
      "<FIGMA_TODO_BADGE>": "https://figma.com/design/FILE_KEY?node-id=BADGE_NODE_ID",
      "<FIGMA_TODO_CARD>": "https://figma.com/design/FILE_KEY?node-id=CARD_NODE_ID"
    }
  }
}
```

```tsx
// index.figma.tsx（プレースホルダーを使用）
figma.connect(TodoBadge, "<FIGMA_TODO_BADGE>", { ... });
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

### 環境変数での管理（推奨）

```bash
# .zshrc or .bashrc に追加
export FIGMA_TOKEN="your-token-here"
```

---

## Figma コンポーネントの準備

### コンポーネントの作成

1. Figma でコンポーネントを作成
2. **右クリック** → **Create component** でコンポーネント化
3. バリアントを設定（例: Status, Priority）

### コンポーネント URL の取得

1. Figma で **Dev Mode** に切り替え（右上のトグル）
2. 接続したいコンポーネントを選択
3. **右クリック** → **Copy link to selection**
4. クリップボードにコピーされた URL を使用

---

## 新しいコンポーネント接続の追加

### Step 1: figma.config.json に URL を追加

まず、`figma.config.json` の `documentUrlSubstitutions` に新しいコンポーネントの URL を追加します。

```json
{
  "codeConnect": {
    "include": ["src/ui/**/*.figma.tsx"],
    "exclude": ["node_modules", "dist"],
    "documentUrlSubstitutions": {
      "<FIGMA_TODO_BADGE>": "https://figma.com/design/FILE_KEY?node-id=BADGE_NODE_ID",
      "<FIGMA_NEW_COMPONENT>": "https://figma.com/design/FILE_KEY?node-id=NEW_NODE_ID"
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
  props: {
    // プロパティマッピング
  },
  example: (props) => <NewComponent {...props} />,
});
```

### CLI による自動生成（オプション）

```bash
# パッケージディレクトリに移動
cd packages/entities/todo

# コンポーネントリンクから自動生成
npx figma connect create "https://figma.com/design/FILE_KEY?node-id=NODE_ID" --token=$FIGMA_TOKEN

# 生成後、URL をプレースホルダーに置き換え、figma.config.json に追加
```

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
    // Figma の "Type" バリアントプロパティをマッピング
    type: figma.enum("Type", {
      // Figma の値: コードの値
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
    // Figma の "Disabled" プロパティをマッピング
    // true/false, yes/no, on/off を自動的に正規化
    disabled: figma.boolean("Disabled"),
  },
  example: ({ disabled }) => <Button disabled={disabled} />,
});
```

### ネストされたコンポーネントの例

```tsx
figma.connect(Card, "...", {
  props: {
    // instance-swap プロパティをマッピング
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

### 単一パッケージの公開

```bash
# パッケージディレクトリに移動
cd packages/entities/todo

# 公開
npx figma connect publish --token=$FIGMA_TOKEN
```

### 全パッケージの一括公開

```bash
# プロジェクトルートから
pnpm figma:publish
```

**注意:** このコマンドはすべてのパッケージの `figma:publish` スクリプトを実行します。

### 公開の確認

1. Figma で Dev Mode に切り替え
2. 接続したコンポーネントを選択
3. 右パネルにコードスニペットが表示される

### 接続の削除（非公開化）

```bash
cd packages/entities/todo
npx figma connect unpublish --token=$FIGMA_TOKEN
```

---

## トラブルシューティング

### "No Code Connect files found" エラー

**原因:** `figma.config.json` の `include` パターンがファイルにマッチしていない

**解決策:**
1. `figma.config.json` の `include` パスを確認
2. `.figma.tsx` ファイルの配置場所を確認

```json
{
  "codeConnect": {
    "include": ["src/ui/**/*.figma.tsx"]
  }
}
```

### "Invalid Figma URL" エラー

**原因:** Figma コンポーネントの URL が不正

**解決策:**
1. Dev Mode でコンポーネントを選択
2. 右クリック → "Copy link to selection" で URL を再取得
3. URL が `https://figma.com/design/...?node-id=...` 形式であることを確認

### "Unauthorized" エラー

**原因:** トークンの権限不足または無効

**解決策:**
1. Figma Settings → Security でトークンを確認
2. 必要な権限が付与されていることを確認：
   - Code Connect: Write
   - File content: Read
3. トークンを再生成

### プロパティマッピングが反映されない

**原因:** Figma 側のプロパティ名とコード側のマッピング名が一致していない

**解決策:**
1. Figma でプロパティ名を確認（Design Panel → Properties）
2. `figma.enum()` などの第一引数を正確に指定

```tsx
// Figma のプロパティ名が "Priority Level" の場合
priority: figma.enum("Priority Level", { ... })
```

---

## 参考リンク

- [Figma Code Connect 公式ドキュメント](https://developers.figma.com/docs/code-connect/)
- [React 向けガイド](https://developers.figma.com/docs/code-connect/react/)
- [設定ファイルリファレンス](https://developers.figma.com/docs/code-connect/api/config-file/)
- [GitHub リポジトリ](https://github.com/figma/code-connect)
