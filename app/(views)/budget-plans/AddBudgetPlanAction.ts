'use server'
import { createBudgetPlan } from "@/app/lib/db/drizzle";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { AddBudgetPlanFormData } from "./AddBudgetPlanFormUtils";

export default async function AddBudgetPlanAction(formData: AddBudgetPlanFormData) {

    const user = await currentUser();

    const id = await createBudgetPlan({
        userId: user?.id + '',
        budgetPlanName: formData.budgetPlanName,
        budget: formData.budgetAmount,
        expense: '0.00',
        balance: formData.budgetAmount
    })

    revalidatePath('/budget-plans') // Update cached budgetplans
    redirect(`/budget-plans/${id}`) // Navigate to the new post page
}