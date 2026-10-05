/* eslint-disable no-undef */
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// // https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react()],
        server: { host: true },
        base: env.VITE_BASENAME || "/",
    };
});
