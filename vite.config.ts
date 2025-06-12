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
      include: ["**/*.{ts,tsx,js,jsx}"],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/coverage/**",
        "**/test/**",
        "**/*.d.ts",
        "**/layout.tsx", // この行を追加
        "vite.config.ts",
        "next.config.ts",
        "**/.next/**",
      ],
    },
  },
});
