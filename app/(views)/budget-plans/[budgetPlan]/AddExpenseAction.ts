
'use server'
import { createBudgetPlanExpense } from "@/app/db/db";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { AddExpenseFormData } from "./AddExpenseFormUtils";

export default async function AddBudgetPlan(formData: AddExpenseFormData) {

    const rawFormData = {
        budgetPlanId: formData.budgetPlanId,
        item: formData.item,
        amount: formData.amount,
        category: formData.category
    }

    const id = await createBudgetPlanExpense({
        budgetPlanID: +rawFormData?.budgetPlanId!,
        item: rawFormData?.item + '',
        amount: rawFormData?.amount + '',
        category: rawFormData?.category + ''
    })

    revalidatePath(`/budget-plans/${id}`) // Update cached budgetplans
    redirect(`/budget-plans/${id}`) // Navigate to the new post page
}