/**
 * Linguiの設定ファイル
 * 多言語対応のための設定を定義
 */
import { defineConfig } from "@lingui/cli";
import { formatter } from "@lingui/format-json";
import { Language } from "@repo/shared-constant";

const config: ReturnType<typeof defineConfig> = defineConfig({
  catalogs: [
    {
      path: "../locale/src/message/{locale}/index",
      include: ["<rootDir>/apps/app/", "<rootDir>/packages/"],
      exclude: [
        "../../../**/node_modules/**",
        "../../../**/public/**",
        "../../../**/dist/**",
        "../../../**/build/**",
        "../../../**/.turbo/**",
        "../../../**/.react-router/**",

        "../../**/node_modules/**",
        "../../**/dist/**",
        "../../**/build/**",
        "../../**/.turbo/**",

        "../**/node_modules/**",
        "../**/dist/**",
        "../**/build/**",
        "../**/.turbo/**",

        "../api-**",
        "../locale/**",
        "../locale/**",
      ],
    },
  ],
  rootDir: "../../../",
  locales: Language,
  fallbackLocales: {
    default: Language[0] as Language,
  },
  sourceLocale: Language[0],
  orderBy: "messageId",
  format: formatter(),
});

export default config;
