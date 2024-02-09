import { defineConfig, loadEnv } from "vite";
// import path from "path";

import relay from "vite-plugin-relay";
import react from "@vitejs/plugin-react-swc";
import styleX from "vite-plugin-stylex";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  console.log(process.cwd())

  return {
    plugins: [react(), styleX(), relay],
    server: {
      host: env.VITE_HOST,
    },
    // resolve: {
    //   alias: [{ find: "@styled-system", replacement: path.resolve("styled-system") }],
    // },
  };
});
