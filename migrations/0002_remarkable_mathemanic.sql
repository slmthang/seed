ALTER TABLE "budget_plans" ADD COLUMN "user_id" varchar(200) NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget_plans" ADD CONSTRAINT "budget_plans_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
