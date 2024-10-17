ALTER TABLE "budget_plans" ADD COLUMN "total_budget" varchar(30) NOT NULL;--> statement-breakpoint
ALTER TABLE "budget_plans" ADD COLUMN "total_expense" varchar(30) NOT NULL;--> statement-breakpoint
ALTER TABLE "budget_plans" ADD COLUMN "total_balance" varchar(30) NOT NULL;--> statement-breakpoint
ALTER TABLE "budget_plans" DROP COLUMN IF EXISTS "budget";--> statement-breakpoint
ALTER TABLE "budget_plans" DROP COLUMN IF EXISTS "expense";--> statement-breakpoint
ALTER TABLE "budget_plans" DROP COLUMN IF EXISTS "balance";