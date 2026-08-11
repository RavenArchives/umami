import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  datasource: {
    // Migrations (prisma CLI / check-db) must use the DIRECT Supabase connection
    // (port 5432), not the pooled pgBouncer/Supavisor endpoint, or Prisma DDL
    // hangs on the pooler. The app runtime still connects via DATABASE_URL
    // (pooled) in src/lib/prisma.ts. Fall back to DATABASE_URL if unset.
    url: process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL,
  },
});
