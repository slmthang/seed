

import { bigserial, varchar, pgTable, timestamp } from 'drizzle-orm/pg-core';
import { usersTable } from './usersTable';

export const budgetPlansTable = pgTable('budget_plans', {
  id: bigserial('id', {mode: 'number'}).primaryKey(),
  userId: varchar('user_id', { length: 200 })
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  budgetPlanName: varchar('budget_plan_name', { length: 120 }).notNull(),
  budget: varchar('budget', { length: 30 }).notNull(),
  expense: varchar('expense', { length: 30 }).notNull(),
  balance: varchar('balance', { length: 30 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  // updatedAt: timestamp('updated_at')
  //   .notNull()
  //   .$onUpdate(() => new Date()),
});

export type InsertBudgetPlan = typeof budgetPlansTable.$inferInsert;
export type SelectBudgetPlan = typeof budgetPlansTable.$inferSelect;