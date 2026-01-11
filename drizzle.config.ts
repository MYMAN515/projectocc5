import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "sqlite",
  dbCredentials: {
    url: process.env.LIBSQL_URL ?? "file:local.db"
  }
} satisfies Config;
