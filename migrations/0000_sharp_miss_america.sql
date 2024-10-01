CREATE TABLE IF NOT EXISTS "budget_plan_expenses" (
	"budget_plan_id" bigserial NOT NULL,
	"item" varchar(120) NOT NULL,
	"category" varchar(120) NOT NULL,
	"amount" varchar(30) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "budget_plans" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" bigserial NOT NULL,
	"budget_plan_name" varchar(120) NOT NULL,
	"budget" varchar(30) NOT NULL,
	"expense" varchar(30) NOT NULL,
	"balance" varchar(30) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"first_name" varchar(120) NOT NULL,
	"last_name" varchar(120) NOT NULL,
	"email" varchar(120) NOT NULL,
	"joined" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget_plan_expenses" ADD CONSTRAINT "budget_plan_expenses_budget_plan_id_budget_plans_id_fk" FOREIGN KEY ("budget_plan_id") REFERENCES "public"."budget_plans"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget_plans" ADD CONSTRAINT "budget_plans_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
