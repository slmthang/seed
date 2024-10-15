

/* ########################################### SERVER ########################################### */

'use server'


/* ########################################### IMPORTS ########################################### */

import { createBudgetPlanExpense, updateBudgetPlanBalance, updateBudgetPlanExpense } from "@/app/db/db";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { AddExpenseFormData } from "@/app/lib/definitions";


/* ########################################### SERVER ACTIONS ########################################### */

/**
 * AddExpenseAction : ( server action )
 * Add an expense to a budget plan.
 * Updates expense and balance of the budget plan.
 * @param { AddExpenseFormData } formData : form data from addExpenseForm form
 */

export async function AddExpenseAction(formData: AddExpenseFormData) {

    // add item
    const id = await createBudgetPlanExpense({
        budgetPlanID: Number(formData.budgetPlanId),
        item: formData.item,
        amount: formData.amount,
        category: formData.category
    })

    // update the budget plan with new expense
    await updateBudgetPlanExpense(+formData.budgetPlanId, formData.totalExpense, formData.amount, "add")
    // update the budget plan with new balance
    await updateBudgetPlanBalance(+formData.budgetPlanId, formData.totalBalance, formData.amount, "subtract")

    revalidatePath(`/budget-plans/${id}`) // Update cached budgetplans
    redirect(`/budget-plans/${id}`) // Navigate to the new post page
}
