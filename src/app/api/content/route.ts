import { Hono } from "hono";
import { handle } from "hono/vercel";
import { getContentTree } from "@/features/content/content.service";

const app = new Hono();

app.get("/", (c) => {
  return c.json(getContentTree());
});

export const GET = handle(app);
