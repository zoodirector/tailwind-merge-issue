import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/jsx-runtime.js";

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    {
        rules: {
            "react/no-children-prop": "off",
        },
    },
    {
        ignores: ["tailwind.config.js", "vite.config.js", "dist/*"],
    },
];
