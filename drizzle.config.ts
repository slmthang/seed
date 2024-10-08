
import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

// config({ path: '.env.local' });

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/db/schema",
  out: "./app/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});