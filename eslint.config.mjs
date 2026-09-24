import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next";

// Patch CJS/ESM interop in @next/eslint-plugin-next rules for ESLint 9 compatibility
for (const [key, rule] of Object.entries(nextPlugin.rules)) {
  if (rule && typeof rule === "object" && rule.default && !rule.create) {
    nextPlugin.rules[key] = rule.default;
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;


