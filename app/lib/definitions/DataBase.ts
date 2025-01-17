import {
    usersTable,
    budgetPlansTable,
    budgetPlanExpensesTable
} from '../db/migrations/schema';

// usersTable
export type SelectUser = typeof usersTable.$inferSelect;
export type InsertUser = typeof usersTable.$inferInsert;

// budgetPlansTable
export type SelectBudgetPlan = typeof budgetPlansTable.$inferSelect;
export type InsertBudgetPlan = typeof budgetPlansTable.$inferInsert;

// budgetPlanExpensesTable
export type SelectbudgetPlanExpense =
    typeof budgetPlanExpensesTable.$inferSelect;
export type InsertbudgetPlanExpense =
    typeof budgetPlanExpensesTable.$inferInsert;
