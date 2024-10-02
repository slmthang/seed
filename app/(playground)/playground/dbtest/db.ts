
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

import { SelectUser , usersTable, budgetPlansTable, budgetPlanExpensesTable, SelectBudgetPlan } from './schema';
import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';

config({ path: ".env" }); // or .env.local

const neon_sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(neon_sql);

// get user id
export async function getUserById(id: SelectUser['id']): Promise<
  Array<{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    joined: Date;
  }>
> {
  
  return db.select().from(usersTable).where(eq(usersTable.id, id)).limit(1);
}


// get budget plans by user id
export async function getBudgetPlansByUserId(id: SelectUser['id']): Promise<
  Array<{
    id: number;
    userId: number;
    budgetPlanName: string;
    budget: string;
    expense: string;
    balance: string;
    createdAt: Date;
    updatedAt: Date;
  }>
> {
  
  return db.select().from(budgetPlansTable).where(eq(budgetPlansTable.userId, id));
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

