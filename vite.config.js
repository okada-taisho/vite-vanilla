import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // index.html の場所
  root: "app",
  // アセットなどのパスを変換するベースとなるパス
  // `/foo/` とすると `/foo/` 始まりのパスに変換される
  base: "/",
  // 静的ファイルの場所
  //  `public` を指定した場合 `<root>/public` が静的ファイルの格納場所になる
  publicDir: "public",
  build: {
    // `root` からの相対パスで指定する
    outDir: "../dist",
  },
  envDir: "../",
  plugins: [
    // `vite-tsconfig-paths` を使う場合、プラグインの指定方法が異なります
    tsconfigPaths({
      root: "../",
    }),
  ],
  // 下記を追加する
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
