
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
// import { config } from "dotenv";
import 'dotenv/config'

// DB STUFF
import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { SelectUser, InsertUser, usersTable } from '@/app/db/schema/usersTable';
import { SelectBudgetPlan, InsertBudgetPlan, budgetPlansTable } from "./schema/budgetPlansTable";
import { SelectBudgetPlanExpense, InsertBudgetPlanExpense, budgetPlanExpensesTable } from './schema/budgetPlanExpensesTable';

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





// get budget plans by user id
export async function getBudgetPlansByUserId(id: SelectUser['id']): Promise<
  Array<{
    id: number;
    userId: string;
    budgetPlanName: string;
    budget: string;
    expense: string;
    balance: string;
    createdAt: Date;
  }>
> {
  
  return db.select().from(budgetPlansTable).where(eq(budgetPlansTable.userId, id));
}

// get budget plan by its id
export async function getBudgetPlanById(id: SelectBudgetPlan['id']): Promise<
  Array<{
    id: number;
    userId: string;
    budgetPlanName: string;
    budget: string;
    expense: string;
    balance: string;
    createdAt: Date;
  }>
> {
  
  return db.select().from(budgetPlansTable).where(eq(budgetPlansTable.id, id));
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

// get budget expenses by budgetplan id
export async function getBudgetExpensesByBudgetPlanId(id: SelectBudgetPlan['id']): Promise<
  Array<{
    budgetPlanID: number;
    item: string;
    category: string;
    amount: string;
    createdAt: Date;
  }>
> {
  
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
