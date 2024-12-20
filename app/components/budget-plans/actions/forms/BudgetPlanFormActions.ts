// SERVER ACTION
'use server';

// remote
import { BudgetPlanFormData } from '@/app/lib/definitions/forms/BudgetPlanFormDefinitions';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// local
import { createBudgetPlan } from '@/app/lib/db/drizzle/drizzle';
import { validateMoneyInput } from '@/app/lib/utils';

/**
 * AddBudgetPlanAction : ( server action )
 * Add a new budget plan.
 * @param { BudgetPlanFormData } formData : form data from addExpenseForm form
 */

export async function AddNewBudgetPlan(formData: BudgetPlanFormData) {
    const user = await currentUser();

    const id = await createBudgetPlan({
        userId: String(user?.id),
        budgetPlanName: formData.budgetPlanName,
        budget: validateMoneyInput(formData.budgetAmount),
        expense: validateMoneyInput('0.00'),
        balance: validateMoneyInput(formData.budgetAmount)
    });

    revalidatePath('/budget-plans'); // Update cached budgetplans
    redirect(`/budget-plans/${id}`); // Navigate to the new post page
}
