
import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/lib/db/schema",
  out: "./app/lib/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});