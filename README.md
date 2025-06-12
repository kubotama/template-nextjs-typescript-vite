# Next.js + TypeScript + Vitest Project Template

このリポジトリは、Next.js、TypeScript、および Vitest を使用したプロジェクトのテンプレートです。

## ✨ 特徴

- **Next.js:** React ベースのフレームワークで、サーバーサイドレンダリング (SSR)、静的サイトジェネレーション (SSG) などをサポートします。
- **TypeScript:** JavaScript に静的型付けを追加し、開発効率とコードの堅牢性を向上させます。
- **Vitest:** Vite ベースの高速なユニットテストフレームワークです。

## 🚀 始め方

### 前提条件

- [Node.js](https://nodejs.org/) (v18.x 以上を推奨)
- [npm](https://www.npmjs.com/)、[yarn](https://yarnpkg.com/)、または [pnpm](https://pnpm.io/)

### インストール

1.  このリポジトリをクローンします:
    ```bash
    git clone https://github.com/kubotama/template-nextjs-typescript-vite.git
    cd template-nextjs-typescript-vite
    ```
2.  依存関係をインストールします:
    ```bash
    npm install
    # または
    yarn install
    # または
    pnpm install
    ```

## 🛠️ 利用可能なスクリプト

プロジェクトディレクトリで、以下のスクリプトを実行できます。

- `npm run dev` or `yarn dev` or `pnpm dev`
  開発モードでアプリケーションを起動します。
  ブラウザで http://localhost:3000 を開いて確認してください。

- `npm run build` or `yarn build` or `pnpm build`
  本番用にアプリケーションをビルドします。

- `npm run start` or `yarn start` or `pnpm start`
  ビルドされたアプリケーションを本番モードで起動します。

- `npm run test` or `yarn test` or `pnpm test`
  Vitest を使用してテストを実行します。

- `npm run test:watch` or `yarn test:watch` or `pnpm test:watch`
  Vitest をウォッチモードで起動し、ファイルの変更を監視してテストを再実行します。

- `npm run lint` or `yarn lint` or `pnpm lint`
  ESLint を使用してコードの静的解析を実行します。

## 📁 フォルダ構成 (例)

```
./
├── public/ # 静的ファイル
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/ # React コンポーネント
│ └── lib/ # ユーティリティ関数など
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── vite.config.ts
└── vitest.setup.ts
```
