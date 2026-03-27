import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    // Exemple : Ignorer tous les fichiers JS par défaut, sauf ceux dans src/
    globalIgnores(["**/*.js", "!src/**/*.js"]),

    {
        files: ["src/**/*.js"],
        rules: {
            semi: "error"
        }
    }
]);