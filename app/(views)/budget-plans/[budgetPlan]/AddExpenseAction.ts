
'use server'
import { createBudgetPlanExpense, getBudgetPlanById } from "@/app/db/db";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { AddExpenseFormData } from "./AddExpenseFormUtils";

export default async function AddExpenseAction(formData: AddExpenseFormData) {

    // add item
    const id = await createBudgetPlanExpense({
        budgetPlanID: Number(formData.budgetPlanId),
        item: formData.item,
        amount: formData.amount,
        category: formData.category
    })

    // update the budget plan with new expense
    await getBudgetPlanById(+formData.budgetPlanId)

    revalidatePath(`/budget-plans/${id}`) // Update cached budgetplans
    redirect(`/budget-plans/${id}`) // Navigate to the new post page
}