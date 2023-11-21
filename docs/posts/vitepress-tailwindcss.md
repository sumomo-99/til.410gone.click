---
title: VitePressでTailwind CSSを使う
description: VitePressでTailwind CSSを利用するための設定方法です...
---
# VitePressでTailwind CSSを使う
VitePressでTailwind CSSを利用するための設定方法です。
## 確認環境
- Tailwind CSS 3.3.5
- VitePress 1.0.0-rc.29
- autoprefixer 10.4.16
- PostCSS 8.4.31
## Tailwind CSSのインストールと設定
VitePressはインストール済みとします。

1. Tailwind CSSのインストールをします。
[公式サイト](https://tailwindcss.com/docs/installation/using-postcss)
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. PostCSSの設定ファイル(postcss.config.js)にTailwindを追記します。postcss.config.jsはVitePressプロジェクトディレクトリの直下に作成します。
```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

3. Tailwindの設定ファイル(tailwind.config.js)にTailwindを適用するファイルのパスを設定します。以下はdocsディレクトリにマークダウンファイルを格納している場合の例です。
```js{4}
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./docs/**/*.{html,js,md}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. VitePressのデフォルトテーマにCSSを追加します。
```js
// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```
5. カスタムCSSを追加します。
```css
/* .vitepress/theme/custom.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. ローカル開発サーバを起動して確認をします。
```sh
npm run docs:dev
```