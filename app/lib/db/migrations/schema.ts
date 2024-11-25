import {
    pgTable,
    unique,
    integer,
    varchar,
    timestamp,
    foreignKey,
    bigint
} from 'drizzle-orm/pg-core';

export const usersTable = pgTable(
    'users_table',
    {
        id: integer('id').primaryKey().generatedAlwaysAsIdentity({
            name: 'users_table_id_seq',
            startWith: 10000,
            increment: 1,
            minValue: 1,
            maxValue: 2147483647,
            cache: 1
        }),
        authId: varchar('auth_id', { length: 255 }).notNull(),
        firstName: varchar('first_name', { length: 120 }).notNull(),
        lastName: varchar('last_name', { length: 120 }).notNull(),
        email: varchar('email', { length: 120 }).notNull(),
        joinedOn: timestamp('joined_on', { mode: 'string' })
            .defaultNow()
            .notNull()
    },
    (table) => {
        return {
            usersTableAuthIdKey: unique('users_table_auth_id_key').on(
                table.authId
            )
        };
    }
);

export const budgetPlansTable = pgTable(
    'budget_plans_table',
    {
        id: integer('id').primaryKey().generatedAlwaysAsIdentity({
            name: 'budget_plans_table_id_seq',
            startWith: 10000,
            increment: 1,
            minValue: 1,
            maxValue: 2147483647,
            cache: 1
        }),
        userId: varchar('user_id', { length: 255 }).notNull(),
        budgetPlanName: varchar('budget_plan_name', { length: 120 }).notNull(),
        budget: varchar('budget', { length: 15 }).notNull(),
        expense: varchar('expense', { length: 15 }).notNull(),
        balance: varchar('balance', { length: 15 }).notNull(),
        createdAt: timestamp('created_at', { mode: 'string' })
            .defaultNow()
            .notNull()
    },
    (table) => {
        return {
            budgetPlanTableFkUser: foreignKey({
                columns: [table.userId],
                foreignColumns: [usersTable.authId],
                name: 'budget_plan_table_fk_user'
            }).onDelete('cascade')
        };
    }
);

export const budgetPlanExpensesTable = pgTable(
    'budget_plan_expenses_table',
    {
        id: integer('id').primaryKey().generatedAlwaysAsIdentity({
            name: 'budget_plan_expenses_table_id_seq',
            startWith: 10000,
            increment: 1,
            minValue: 1,
            maxValue: 2147483647,
            cache: 1
        }),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        budgetPlanId: bigint('budget_plan_id', { mode: 'number' }).notNull(),
        item: varchar('item', { length: 120 }).notNull(),
        amount: varchar('amount', { length: 15 }).notNull(),
        category: varchar('category', { length: 120 }).notNull(),
        createdAt: timestamp('created_at', { mode: 'string' })
            .defaultNow()
            .notNull()
    },
    (table) => {
        return {
            budgetPlanExpensesTableFkBudgetPlan: foreignKey({
                columns: [table.budgetPlanId],
                foreignColumns: [budgetPlansTable.id],
                name: 'budget_plan_expenses_table_fk_budget_plan'
            }).onDelete('cascade')
        };
    }
);
