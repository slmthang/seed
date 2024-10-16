
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
// import { config } from "dotenv";
import 'dotenv/config'
import getMessageError from '../lib/getMessageError';

import { budgetPlanListType, budgetPlanType, expenseListType } from '../lib/definitions';

// DB STUFF
import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { SelectUser, InsertUser, usersTable } from '@/app/db/schema/usersTable';
import { SelectBudgetPlan, InsertBudgetPlan, budgetPlansTable } from "./schema/budgetPlansTable";
import { SelectBudgetPlanExpense, InsertBudgetPlanExpense, budgetPlanExpensesTable } from './schema/budgetPlanExpensesTable';
import { calculateMoney } from '../lib/utils';

const connectionString = process.env.DATABASE_URL!
// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client);

// get user id
export async function getUserById(id: SelectUser['id']): Promise<
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

// check user exists
export async function userExistById(id: SelectUser['id']) : Promise<Boolean> {

  const users = await getUserById(id);

  if (users.length === 1) {
    return true;
  }

  return false;
}

// create user
export async function createUser(data: InsertUser) : Promise<Boolean> {

  try {
    
    await db.insert(usersTable).values(data);

  } catch (err) {
    console.error('Something went wrong with creating user.')
    console.log('Data: ', data)
    console.log(err)
    return false;
  }

  return true;
  
}





/**
 * Fetch a list of budget plans by user id.
 *
 * @param id { number } - user id
 * @returns { Promise<Array<budgetPlanType>> } a promise with a list of budget plans
 *
 */
export async function getBudgetPlans( id: string): Promise<Array<budgetPlanType>> {
  
  return db.select().from(budgetPlansTable).where(eq(budgetPlansTable.userId, id));
}



/**
 * Fetch a specific budget plan by using its id.
 *
 * @param id { number } - user id
 * @returns { Promise<budgetPlanType> } a promise with a budget plan object
 *
 */
export async function getBudgetPlanById(id: number): Promise<budgetPlanType> {
  
  try {
    
    const budgetPlanArray = await db.select().from(budgetPlansTable).where(eq(budgetPlansTable.userId, id)));
    
    
    return budgetPlanArray[0]

  } catch (err) {

    throw "Errr: " + err;

  }
}




// create budget plan
export async function createBudgetPlan(budgetPlan: InsertBudgetPlan): Promise<string> {

  try {
    
    const insertedId = await db.insert(budgetPlansTable).values(budgetPlan).returning({insertedId: budgetPlansTable.id}).then(data => data[0]);

    return insertedId.insertedId + '';

  } catch (err) {
    return "Failed to create Budget Plan";
  }
}

// update budget plan by id and columns
export async function updateBudgetPlanExpense(
  budgetPlanId: SelectBudgetPlan['id'],
  totalExpense: string,
  newExpense: string,
  method: 'add' | 'subtract'
): Promise<string> {

  try {

    const newTotalExpense = calculateMoney(totalExpense, newExpense, method)
    
    const updateBudgetPlan = await db.update(budgetPlansTable)
      .set({expense: newTotalExpense})
      .where(eq(budgetPlansTable.id, budgetPlanId))
      .returning({ id : budgetPlansTable.id }).then(data => data[0]);

    return updateBudgetPlan.id + '';

  } catch (err) {
    return "Failed to update expense on BudgetPlansTable";
  }
}

// update budget plan by id and columns
export async function updateBudgetPlanBalance(
  budgetPlanId: SelectBudgetPlan['id'],
  totalBalance: string,
  newExpense: string,
  method: 'add' | 'subtract'
): Promise<string> {

  try {

    const newTotalBalance = calculateMoney(totalBalance, newExpense, method);
    
    const updateBudgetPlan = await db.update(budgetPlansTable)
      .set({ balance : newTotalBalance})
      .where(eq(budgetPlansTable.id, budgetPlanId))
      .returning({ id : budgetPlansTable.id }).then(data => data[0]);

    return updateBudgetPlan.id + '';

  } catch (err) {
    return "Failed to update balance on BudgetPlansTable";
  }
}

// update budget plan by id and columns
export async function updateBudgetPlanBudgetAmount(
  budgetPlanId: SelectBudgetPlan['id'],
  newBudgetAmount: string
): Promise<string> {

  try {
    
    const updateBudgetPlan = await db.update(budgetPlansTable)
      .set({ budget : newBudgetAmount})
      .where(eq(budgetPlansTable.id, budgetPlanId))
      .returning({ id : budgetPlansTable.id }).then(data => data[0]);

    return updateBudgetPlan.id + '';

  } catch (err) {
    return "Failed to update budget on BudgetPlansTable";
  }
}

/**
 * Fetch a specific list of expenses by using a budget plan id.
 *
 * @param id { number } - budget plan id
 * @returns { Promise<expenseListType> } a promise with a list of expenses
 *
 */
export async function getExpenseList(id: number): Promise<expenseListType> {
  
  return db.select().from(budgetPlanExpensesTable).where(eq(budgetPlanExpensesTable.budgetPlanID, id));
}


// create budget plan
export async function createBudgetPlanExpense(budgetPlanExpense: InsertBudgetPlanExpense): Promise<string> {

  try {
    
    const {budgetPlanId} = await db.insert(budgetPlanExpensesTable).values(budgetPlanExpense).returning({budgetPlanId: budgetPlanExpensesTable.budgetPlanID}).then(data => data[0]);

    return budgetPlanId + '';

  } catch (err) {
    return "Failed to create Budget plan expense";
  }
}
