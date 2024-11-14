import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    envDir: "../..",
    resolve: {
        alias: [
            // this must match the "paths" key in tsconfig.json
            { find: "@", replacement: path.resolve(__dirname, "src") },
        ],
    },
});
