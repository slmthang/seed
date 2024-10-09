
'use server'
import { createBudgetPlanExpense } from "@/app/db/db";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function AddBudgetPlan(formData: FormData) {

    const rawFormData = {
        budgetPlanId: formData.get('budgetPlanId'),
        item: formData.get('itemName'),
        amount: formData.get('amount'),
        category: formData.get('category')
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