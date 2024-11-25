// SERVER ACTION
'use server';

// remote
import { BudgetExpenseFormData } from '@/app/lib/definitions/forms/BudgetExpenseForm/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// local
import {
    createBudgetPlanExpense,
    updateBalanceOfBudgetPlan,
    updateExpenseOfBudgetPlan
} from '@/app/lib/db/drizzle/drizzle';
import { validateMoneyInput } from '@/app/lib/utils';

/**
 * AddNewBudgetExpense : ( server action )
 * Add an expense to a budget plan.
 * Updates expense and balance of the budget plan.
 * @param { AddExpenseFormDataType } formData : form data from addExpenseForm form
 */

export async function AddNewBudgetExpense(formData: BudgetExpenseFormData) {
    // add item
    const id = await createBudgetPlanExpense({
        budgetPlanId: Number(formData.budgetPlanId),
        item: formData.item,
        amount: validateMoneyInput(formData.amount),
        category: formData.category
    });

    // update the budget plan with new expense
    await updateExpenseOfBudgetPlan(
        +formData.budgetPlanId,
        validateMoneyInput(formData.expense),
        validateMoneyInput(formData.amount),
        'add'
    );
    // update the budget plan with new balance
    await updateBalanceOfBudgetPlan(
        +formData.budgetPlanId,
        validateMoneyInput(formData.balance),
        validateMoneyInput(formData.amount),
        'subtract'
    );

    revalidatePath(`/budget-plans/${id}`); // Update cached budgetplans
    redirect(`/budget-plans/${id}`); // Navigate to the new post page
}
