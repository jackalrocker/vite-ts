import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnv } from "vite";

const env = loadEnv(process.cwd(), "");

const config: CodegenConfig = {
  // ...
  schema: [env.VITE_GRAPHQL_ENDPOINT],
  generates: {
    "data/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};
export default config;
