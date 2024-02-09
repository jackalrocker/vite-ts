import type { IGraphQLConfig } from "graphql-config";
import dotenv from "dotenv";


dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

// const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const config: IGraphQLConfig = {
  projects: {
    web: {
      // ...
      schema: [process.env.WEB_GRAPHQL_ENDPOINT],
      extensions: {
        codegen: {
          generates: {
            "apps/web/data/schema.graphql": {
              plugins: ["schema-ast"],
            },
          },
        }
      }
    },
    web2: {
      // ...
      schema: [process.env.WEB_GRAPHQL_ENDPOINT],
      extensions: {
        codegen: {
          generates: {
            "apps/web/data/schema2.graphql": {
              plugins: ["schema-ast"],
            },
          },
        }
      }
    }
  }
};

export default config;
