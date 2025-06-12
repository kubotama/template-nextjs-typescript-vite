// vite.config.ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    css: true, // Tailwind CSSをテストで有効にする
    coverage: {
      provider: "v8",
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/coverage/**",
        "**/test/**",
        "**/*.d.ts",
        "**/layout.tsx", // layout.tsxは、自動生成したままのため、テストのカバレッジからは除外します。
        "vite.config.ts",
        "next.config.ts",
        "**/.next/**",
        "**/postcss.config.mjs",
        "**/eslint.config.mjs",
      ],
    },
  },
});
