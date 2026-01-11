import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({
  url: process.env.LIBSQL_URL ?? "file:local.db",
  authToken: process.env.LIBSQL_AUTH_TOKEN
});

export const db = drizzle(client);
