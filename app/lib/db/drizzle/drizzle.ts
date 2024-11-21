import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
// import { config } from "dotenv";
import 'dotenv/config';

// DB STUFF
import { eq } from 'drizzle-orm';
import { calculateMoney } from '../../utils';

const connectionString = process.env.DATABASE_URL!;
// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

// types
import {
    InsertBudgetPlan,
    SelectBudgetPlan,
    SelectUser,
    SelectbudgetPlanExpense,
    InsertbudgetPlanExpense,
    InsertUser
} from '../../definitions/db/types';
import {
    budgetPlanExpensesTable,
    budgetPlansTable,
    usersTable,
} from '../migrations/schema';
// get user id
export async function getUserById(id: string): Promise<SelectUser[]> {
    return db
        .select()
        .from(usersTable)
        .where(eq(usersTable.authId, id))
        .limit(1);
}

/**
 * Check if a user exists by user id.
 *
 * @param id { number } - user id
 * @returns { Promise<boolean> } a promise with boolean base of the existence status
 *
 */
export async function checkUserExistByUserId(
    id: SelectUser['authId']
): Promise<boolean> {
    try {
        const users = await getUserById(id);
        
        if (users.length === 1) {
            return true;
        }

        return false;
    } catch (err) {
        throw new Error('Failed to check user existence: ');
    }
}

/**
 * Create a new user -> add the user to database
 * @param user { SelectUser } - user info
 * @returns { void }
 */
export async function createNewUser(user: InsertUser) {
    try {
        await db.insert(usersTable).values(user);
    } catch (err) {
        throw new Error('Failed to create new user.');
    }
}

/**
 * Check user exists. If user is new, add the new user to database.
 * @param user { SelectUser } - user info
 * @returns { void }
 */
export async function validateUser(user: InsertUser) {
    try {
        const checkUserExist = await checkUserExistByUserId(
            user?.authId as string
        );


        if (!checkUserExist) {
            await createNewUser(user);
        }
    } catch (err) {
        // throw new Error('Failed to validate user.');
        console.log(err)
    }
}

/**
 * Fetch a list of budget plans by user id.
 *
 * @param id { number } - user id
 * @returns { Promise<SelectBudgetPlan[]> } a promise with a list of budget plans
 *
 */
export async function getBudgetPlanListByUserId(
    id: string
): Promise<SelectBudgetPlan[]> {
    return db
        .select()
        .from(budgetPlansTable)
        .where(eq(budgetPlansTable.userId, id));
}

/**
 * Fetch a specific budget plan by using its id.
 *
 * @param id { number } - budget plan id
 * @returns { Promise<SelectBudgetPlan> } a promise with a budget plan object
 *
 */
export async function getBudgetPlanByItsId(
    id: number
): Promise<SelectBudgetPlan> {
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
): Promise<number> {
    try {
        const insertedId = await db
            .insert(budgetPlansTable)
            .values(budgetPlan)
            .returning({ insertedId: budgetPlansTable.id })
            .then((data) => data[0]);

        return insertedId.insertedId;
    } catch (err) {
        throw new Error('Failed to create Budget Plan');
    }
}

// update budget plan by id and columns
export async function updateExpenseOfBudgetPlan(
    budgetPlanId: SelectBudgetPlan['id'],
    expense: number,
    newExpense: number,
    method: 'add' | 'subtract'
): Promise<number> {
    try {
        const newTotalExpense = calculateMoney(expense, newExpense, method);

        const updateBudgetPlan = await db
            .update(budgetPlansTable)
            .set({ expense: newTotalExpense })
            .where(eq(budgetPlansTable.id, budgetPlanId))
            .returning({ id: budgetPlansTable.id })
            .then((data) => data[0]);

        return updateBudgetPlan.id;
    } catch (err) {
        throw new Error('Failed to update expense on BudgetPlansTable');
    }
}

// update budget plan by id and columns
export async function updateBalanceOfBudgetPlan(
    budgetPlanId: SelectBudgetPlan['id'],
    balance: number,
    newExpense: number,
    method: 'subtract'
): Promise<number> {
    try {
        const newTotalBalance = calculateMoney(balance, newExpense, method);

        const updateBudgetPlan = await db
            .update(budgetPlansTable)
            .set({ balance: newTotalBalance })
            .where(eq(budgetPlansTable.id, budgetPlanId))
            .returning({ id: budgetPlansTable.id })
            .then((data) => data[0]);

        return updateBudgetPlan.id;
    } catch (err) {
        throw new Error('Failed to update balance on BudgetPlansTable');
    }
}

// update budget plan by id and columns
export async function updateBudgetOfBudgetPlan(
    budgetPlanId: SelectBudgetPlan['id'],
    newBudgetAmount: number
): Promise<string> {
    try {
        const updateBudgetPlan = await db
            .update(budgetPlansTable)
            .set({ budget: newBudgetAmount })
            .where(eq(budgetPlansTable.id, budgetPlanId))
            .returning({ id: budgetPlansTable.id })
            .then((data) => data[0]);

        return updateBudgetPlan.id + '';
    } catch (err) {
        throw new Error('Failed to update budget on BudgetPlansTable');
    }
}

/**
 * Fetch a specific list of expenses by using a budget plan id.
 *
 * @param id { number } - budget plan id
 * @returns { Promise<SelectbudgetPlanExpenses[]> } a promise with a list of expenses
 *
 */
export async function getExpenseListByBudgetPlanId(
    id: number
): Promise<SelectbudgetPlanExpense[]> {
    try {
        return db
            .select()
            .from(budgetPlanExpensesTable)
            .where(eq(budgetPlanExpensesTable.budgetPlanId, id));
    } catch (err) {
        throw new Error('Fail to fetch expense list.');
    }
}

// create budget plan
export async function createBudgetPlanExpense(
    budgetPlanExpense: InsertbudgetPlanExpense
): Promise<number> {
    try {
        const { budgetPlanId } = await db
            .insert(budgetPlanExpensesTable)
            .values(budgetPlanExpense)
            .returning({
                budgetPlanId: budgetPlanExpensesTable.budgetPlanId
            })
            .then((data) => data[0]);

        return budgetPlanId;
    } catch (err) {
        throw new Error('Failed to create Budget plan expense');
    }
}
