-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 10000 CACHE 1),
	"auth_id" varchar(255) NOT NULL,
	"first_name" varchar(120) NOT NULL,
	"last_name" varchar(120) NOT NULL,
	"email" varchar(120) NOT NULL,
	"joined" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_table_auth_id_key" UNIQUE("auth_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories_table" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "categories_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 10000 CACHE 1),
	"user_id" varchar(255) NOT NULL,
	"name" varchar(120) NOT NULL,
	"color" varchar(120) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "budget_plans_table" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "budget_plans_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 10000 CACHE 1),
	"user_id" varchar(255) NOT NULL,
	"budget_plan_name" varchar(120) NOT NULL,
	"budget" bigint NOT NULL,
	"expense" bigint NOT NULL,
	"balance" bigint NOT NULL,
	"createdat" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "budget_plan_expenses_table" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "budget_plan_expenses_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 10000 CACHE 1),
	"budget_plan_id" bigint NOT NULL,
	"category_id" bigint NOT NULL,
	"item" varchar(120) NOT NULL,
	"amount" bigint NOT NULL,
	"createdat" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories_table" ADD CONSTRAINT "categories_table_fk_user" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("auth_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget_plans_table" ADD CONSTRAINT "budget_plan_table_fk_user" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("auth_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget_plan_expenses_table" ADD CONSTRAINT "budget_plan_expenses_table_fk_budget_plan" FOREIGN KEY ("budget_plan_id") REFERENCES "public"."budget_plans_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget_plan_expenses_table" ADD CONSTRAINT "budget_plan_expenses_table_fk_category" FOREIGN KEY ("category_id") REFERENCES "public"."categories_table"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/