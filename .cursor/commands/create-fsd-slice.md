# FSDスライスの作成

## 概要

Feature Sliced Designアーキテクチャに従って、新しいスライス（feature, entity, widget, page）を作成します。

## 使用方法

このコマンドを使用する際は、以下の情報を提供してください：
- **レイヤー**: `features`, `entities`, `widgets`, `pages`, `shared` のいずれか
- **スライス名**: kebab-case（例: `user-profile`, `todo-list`）
- **必要なセグメント**: `ui`, `model`, `api`, `lib`, `config`, `types` のうち必要なもの

## 作成される構造

**重要**: すべてのコードは`src/`ディレクトリ配下に配置します。

### Feature スライス例
```
packages/features/[feature-name]/
├── package.json
└── src/
    ├── index.ts
    ├── ui/
    │   └── **/
    │       └── index.tsx
    ├── model/
    │   ├── index.ts
    │   └── types.ts
    └── api/
        └── index.ts
```

### Entity スライス例
```
packages/entities/[entity-name]/
├── package.json
└── src/
    ├── index.ts
    ├── ui/
    │   └── **/
    │       └── index.tsx
    ├── model/
    │   ├── index.ts
    │   └── types.ts
    └── api/
        └── index.ts
```

### Widget スライス例
```
packages/widgets/[widget-name]/
├── package.json
└── src/
    ├── index.ts
    ├── ui/
    │   └── index.tsx
    └── model/
        └── index.ts
```

### Page スライス例
```
packages/pages/[page-name]/
├── package.json
└── src/
    ├── ui/
    │   └── index.tsx
    └── model/
        └── index.ts
```

### Shared スライス例
```
packages/shared/[shared-name]/
├── package.json
└── src/
    ├── index.ts
    ├── ui/
    │   └── **/
    │       └── index.tsx
    ├── model/
    │   ├── index.ts
    │   └── types.ts
    └── api/
        └── index.ts
```

## チェックリスト

作成後、以下を確認してください：

- [ ] スライス名がkebab-caseで命名されている
- [ ] 適切なレイヤーに配置されている
- [ ] **すべてのコードが`src/`ディレクトリ配下に配置されている**
- [ ] セグメントが適切に分離されている（`src/ui/`, `src/model/`, `src/api/`など）
- [ ] インポートルールに従っている（下位レイヤーから上位レイヤーへのインポートのみ）
- [ ] package.jsonが適切に設定されている（必要に応じて）
- [ ] 型定義が適切にエクスポートされている

## 注意事項

- **インポートルール**: 下位レイヤーから上位レイヤーへのインポートのみ許可
- **命名規則**: ファイル名はkebab-case、コンポーネント名はPascalCase
- **循環依存**: 同じスライス内やスライス間での循環依存を避ける

