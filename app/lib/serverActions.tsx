

/* ########################################### SERVER ########################################### */

'use server'


/* ########################################### IMPORTS ########################################### */

import { createBudgetPlanExpense, updateBalanceOfBudgetPlan, updateExpenseOfBudgetPlan } from "@/app/lib/db/drizzle";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { AddExpenseFormDataType } from "@/app/lib/definitions";

import { createBudgetPlan } from "@/app/lib/db/drizzle";
import { currentUser } from "@clerk/nextjs/server";
import { AddBudgetPlanFormDataType } from "@/app/lib/definitions";

/* ########################################### SERVER ACTIONS ########################################### */

/**
 * AddExpenseAction : ( server action )
 * Add an expense to a budget plan.
 * Updates expense and balance of the budget plan.
 * @param { AddExpenseFormDataType } formData : form data from addExpenseForm form
 */

export async function AddExpenseAction(formData: AddExpenseFormDataType) {

    // add item
    const id = await createBudgetPlanExpense({
        budgetPlanID: Number(formData.budgetPlanId),
        item: formData.item,
        amount: formData.amount,
        category: formData.category
    })

    // update the budget plan with new expense
    await updateExpenseOfBudgetPlan(+formData.budgetPlanId, formData.totalExpense, formData.amount, "add")
    // update the budget plan with new balance
    await updateBalanceOfBudgetPlan(+formData.budgetPlanId, formData.totalBalance, formData.amount, "subtract")

    revalidatePath(`/budget-plans/${id}`) // Update cached budgetplans
    redirect(`/budget-plans/${id}`) // Navigate to the new post page
}




/**
 * AddBudgetPlanAction : ( server action )
 * Add a new budget plan.
 * @param { AddBudgetPlanFormDataType } formData : form data from addExpenseForm form
 */

export default async function AddBudgetPlanAction(formData: AddBudgetPlanFormDataType) {

    const user = await currentUser();

    const id = await createBudgetPlan({
        userId: user?.id + '',
        budgetPlanName: formData.budgetPlanName,
        totalBudget: formData.budgetAmount,
        totalExpense: '0.00',
        totalBalance: formData.budgetAmount
    })

    revalidatePath('/budget-plans') // Update cached budgetplans
    redirect(`/budget-plans/${id}`) // Navigate to the new post page
}