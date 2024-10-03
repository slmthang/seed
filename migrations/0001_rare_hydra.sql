ALTER TABLE "budget_plans" DROP CONSTRAINT "budget_plans_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "budget_plans" DROP COLUMN IF EXISTS "user_id";