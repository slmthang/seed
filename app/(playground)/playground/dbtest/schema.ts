
import { bigserial, varchar, integer, pgTable, serial, text, time, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: bigserial('id', {mode: 'number'}).primaryKey(),
  firstName: varchar('first_name', { length: 120 }).notNull(),
  lastName: varchar('last_name', { length: 120 }).notNull(),
  email: varchar('email', { length: 120 }).notNull().unique(),
  joined: timestamp('joined').notNull().defaultNow()
});

export const budgetPlansTable = pgTable('budget_plans', {
  id: bigserial('id', {mode: 'number'}).primaryKey(),
  userId: bigserial('user_id', {mode: 'number'})
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  budgetPlanName: varchar('budget_plan_name', { length: 120 }).notNull(),
  budget: varchar('budget', { length: 30 }).notNull(),
  expense: varchar('expense', { length: 30 }).notNull(),
  balance: varchar('balance', { length: 30 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const budgetPlanExpensesTable  = pgTable('budget_plan_expenses', {
  id: bigserial('id', {mode: 'number'}).primaryKey(),
  budgetPlanID: bigserial('budget_plan_id', {mode: 'number'})
    .notNull()
    .references(() => budgetPlansTable.id, { onDelete: 'cascade' }),
  item: varchar('item', { length: 120 }).notNull(),
  category: varchar('category', { length: 120 }).notNull(),
  amount: varchar('amount', { length: 30 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertBudgetPlan = typeof budgetPlansTable.$inferInsert;
export type SelectBudgetPlan = typeof budgetPlansTable.$inferSelect;

export type InsertBudgetPlanExpense = typeof budgetPlanExpensesTable.$inferInsert;
export type SelectBudgetPlanExpense = typeof budgetPlanExpensesTable.$inferSelect;