'use server'
import { createBudgetPlan } from "@/app/db/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function AddBudgetPlan(formData: FormData) {

    const user = await currentUser();

    const rawFormData = {
        budgetPlanName: formData.get('budgetPlanName'),
        budgetAmount: formData.get('budgetAmount'),
    }

    const id = await createBudgetPlan({
        userId: user?.id + '',
        budgetPlanName: rawFormData?.budgetPlanName + '',
        budget: rawFormData?.budgetAmount + '',
        expense: '0.00',
        balance: rawFormData?.budgetAmount + ''
    })

    revalidatePath('/budget-plans') // Update cached budgetplans
    redirect(`/budget-plans/${id}`) // Navigate to the new post page
}