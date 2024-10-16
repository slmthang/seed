
import { bigserial, varchar, pgTable, timestamp } from 'drizzle-orm/pg-core';
import { budgetPlansTable } from './budgetPlansTable';


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


export type InsertBudgetPlanExpense = typeof budgetPlanExpensesTable.$inferInsert;
export type SelectBudgetPlanExpense = typeof budgetPlanExpensesTable.$inferSelect;