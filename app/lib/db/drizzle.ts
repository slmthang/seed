import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
// import { config } from "dotenv";
import 'dotenv/config';

import {
    budgetPlanDataType,
    expenseDataType,
    userDataType
} from '../definitions';

// DB STUFF
import { SelectUser, usersTable } from '@/app/lib/db/schema/usersTable';
import { eq } from 'drizzle-orm';
import { calculateMoney } from '../utils';
import {
    InsertBudgetPlanExpense,
    budgetPlanExpensesTable
} from './schema/budgetPlanExpensesTable';
import {
    InsertBudgetPlan,
    SelectBudgetPlan,
    budgetPlansTable
} from './schema/budgetPlansTable';

const connectionString = process.env.DATABASE_URL!;
// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

// get user id
export async function getUserById(id: string): Promise<
    Array<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        joined: Date;
    }>
> {
    return db.select().from(usersTable).where(eq(usersTable.id, id)).limit(1);
}

/**
 * Check if a user exists by user id.
 *
 * @param id { number } - user id
 * @returns { Promise<boolean> } a promise with boolean base of the existence status
 *
 */
export async function checkUserExistByUserId(
    id: SelectUser['id']
): Promise<boolean> {
    try {
        const users = await getUserById(id);

        if (users.length === 1) {
            return true;
        }

        return false;
    } catch (err) {
        throw new Error('Failed to check user existence.');
    }
}

/**
 * Create a new user -> add the user to database
 * @param user { userDataType } - user info
 * @returns { void }
 */
export async function createNewUser(user: userDataType) {
    try {
        await db.insert(usersTable).values(user);
    } catch (err) {
        throw new Error('Failed to create new user.');
    }
}

/**
 * Check user exists. If user is new, add the new user to database.
 * @param user { userDataType } - user info
 * @returns { void }
 */
export async function validateUser(user: userDataType) {
    try {
        const checkUserExist = await checkUserExistByUserId(user?.id as string);

        if (!checkUserExist) {
            await createNewUser(user);
        }
    } catch (err) {
        throw new Error('Failed to validate user.');
    }
}

/**
 * Fetch a list of budget plans by user id.
 *
 * @param id { number } - user id
 * @returns { Promise<Array<budgetPlanDataType>> } a promise with a list of budget plans
 *
 */
export async function getBudgetPlanListByUserId(
    id: string
): Promise<Array<budgetPlanDataType>> {
    return db
        .select()
        .from(budgetPlansTable)
        .where(eq(budgetPlansTable.userId, id));
}

/**
 * Fetch a specific budget plan by using its id.
 *
 * @param id { number } - budget plan id
 * @returns { Promise<budgetPlanDataType> } a promise with a budget plan object
 *
 */
export async function getBudgetPlanByItsId(
    id: number
): Promise<budgetPlanDataType> {
    try {
        const budgetPlanArray = await db
            .select()
            .from(budgetPlansTable)
            .where(eq(budgetPlansTable.id, id));

        return budgetPlanArray[0];
    } catch (err) {
        throw new Error('Fail to fetch budget plan.');
    }
}

// create budget plan
export async function createBudgetPlan(
    budgetPlan: InsertBudgetPlan
): Promise<string> {
    try {
        const insertedId = await db
            .insert(budgetPlansTable)
            .values(budgetPlan)
            .returning({ insertedId: budgetPlansTable.id })
            .then((data) => data[0]);

        return insertedId.insertedId + '';
    } catch (err) {
        return 'Failed to create Budget Plan';
    }
}

// update budget plan by id and columns
export async function updateExpenseOfBudgetPlan(
    budgetPlanId: SelectBudgetPlan['id'],
    totalExpense: string,
    newExpense: string,
    method: 'add' | 'subtract'
): Promise<string> {
    try {
        const newTotalExpense = calculateMoney(
            totalExpense,
            newExpense,
            method
        );

        const updateBudgetPlan = await db
            .update(budgetPlansTable)
            .set({ totalExpense: newTotalExpense })
            .where(eq(budgetPlansTable.id, budgetPlanId))
            .returning({ id: budgetPlansTable.id })
            .then((data) => data[0]);

        return updateBudgetPlan.id + '';
    } catch (err) {
        return 'Failed to update expense on BudgetPlansTable';
    }
}

// update budget plan by id and columns
export async function updateBalanceOfBudgetPlan(
    budgetPlanId: SelectBudgetPlan['id'],
    totalBalance: string,
    newExpense: string,
    method: 'add' | 'subtract'
): Promise<string> {
    try {
        const newTotalBalance = calculateMoney(
            totalBalance,
            newExpense,
            method
        );

        const updateBudgetPlan = await db
            .update(budgetPlansTable)
            .set({ totalBalance: newTotalBalance })
            .where(eq(budgetPlansTable.id, budgetPlanId))
            .returning({ id: budgetPlansTable.id })
            .then((data) => data[0]);

        return updateBudgetPlan.id + '';
    } catch (err) {
        return 'Failed to update balance on BudgetPlansTable';
    }
}

// update budget plan by id and columns
export async function updateBudgetOfBudgetPlan(
    budgetPlanId: SelectBudgetPlan['id'],
    newBudgetAmount: string
): Promise<string> {
    try {
        const updateBudgetPlan = await db
            .update(budgetPlansTable)
            .set({ totalBudget: newBudgetAmount })
            .where(eq(budgetPlansTable.id, budgetPlanId))
            .returning({ id: budgetPlansTable.id })
            .then((data) => data[0]);

        return updateBudgetPlan.id + '';
    } catch (err) {
        return 'Failed to update budget on BudgetPlansTable';
    }
}

/**
 * Fetch a specific list of expenses by using a budget plan id.
 *
 * @param id { number } - budget plan id
 * @returns { Promise<expenseDataType[]> } a promise with a list of expenses
 *
 */
export async function getExpenseListByBudgetPlanId(
    id: number
): Promise<expenseDataType[]> {
    try {
        return db
            .select()
            .from(budgetPlanExpensesTable)
            .where(eq(budgetPlanExpensesTable.budgetPlanID, id));
    } catch (err) {
        throw new Error('Fail to fetch expense list.');
    }
}

// create budget plan
export async function createBudgetPlanExpense(
    budgetPlanExpense: InsertBudgetPlanExpense
): Promise<string> {
    try {
        const { budgetPlanId } = await db
            .insert(budgetPlanExpensesTable)
            .values(budgetPlanExpense)
            .returning({
                budgetPlanId: budgetPlanExpensesTable.budgetPlanID
            })
            .then((data) => data[0]);

        return budgetPlanId + '';
    } catch (err) {
        return 'Failed to create Budget plan expense';
    }
}
