import { relations } from 'drizzle-orm/relations';
import {
    usersTable,
    budgetPlansTable,
    budgetPlanExpensesTable
} from './schema';

export const budgetPlansTableRelations = relations(
    budgetPlansTable,
    ({ one, many }) => ({
        usersTable: one(usersTable, {
            fields: [budgetPlansTable.userId],
            references: [usersTable.authId]
        }),
        budgetPlanExpensesTables: many(budgetPlanExpensesTable)
    })
);

export const usersTableRelations = relations(usersTable, ({ many }) => ({
    budgetPlansTables: many(budgetPlansTable)
}));

export const budgetPlanExpensesTableRelations = relations(
    budgetPlanExpensesTable,
    ({ one }) => ({
        budgetPlansTable: one(budgetPlansTable, {
            fields: [budgetPlanExpensesTable.budgetPlanId],
            references: [budgetPlansTable.id]
        })
    })
);
