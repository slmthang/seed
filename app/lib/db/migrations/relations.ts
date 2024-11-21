import { relations } from "drizzle-orm/relations";
import { usersTable, categoriesTable, budgetPlansTable, budgetPlanExpensesTable } from "./schema";

export const categoriesTableRelations = relations(categoriesTable, ({one, many}) => ({
	usersTable: one(usersTable, {
		fields: [categoriesTable.userId],
		references: [usersTable.authId]
	}),
	budgetPlanExpensesTables: many(budgetPlanExpensesTable),
}));

export const usersTableRelations = relations(usersTable, ({many}) => ({
	categoriesTables: many(categoriesTable),
	budgetPlansTables: many(budgetPlansTable),
}));

export const budgetPlansTableRelations = relations(budgetPlansTable, ({one, many}) => ({
	usersTable: one(usersTable, {
		fields: [budgetPlansTable.userId],
		references: [usersTable.authId]
	}),
	budgetPlanExpensesTables: many(budgetPlanExpensesTable),
}));

export const budgetPlanExpensesTableRelations = relations(budgetPlanExpensesTable, ({one}) => ({
	budgetPlansTable: one(budgetPlansTable, {
		fields: [budgetPlanExpensesTable.budgetPlanId],
		references: [budgetPlansTable.id]
	}),
	categoriesTable: one(categoriesTable, {
		fields: [budgetPlanExpensesTable.categoryId],
		references: [categoriesTable.id]
	}),
}));