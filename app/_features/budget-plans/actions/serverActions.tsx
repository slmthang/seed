/* ########################################### SERVER ########################################### */

'use server';

/* ########################################### IMPORTS ########################################### */

import { AddExpenseFormData } from '@/app/lib/definitions/forms/AddExpenseForm/types';
import { AddBudgetPlanFormData } from '@/app/lib/definitions/forms/AddBudgetPlanForm/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';

/* ########################################### SERVER ACTIONS ########################################### */

/**
 * AddExpenseAction : ( server action )
 * Add an expense to a budget plan.
 * Updates expense and balance of the budget plan.
 * @param { AddExpenseFormDataType } formData : form data from addExpenseForm form
 */

import {
    createBudgetPlan,
    createBudgetPlanExpense,
    updateBalanceOfBudgetPlan,
    updateExpenseOfBudgetPlan
} from '@/app/lib/db/drizzle/drizzle';

export async function AddExpenseAction(formData: AddExpenseFormData) {
    // add item
    const id = await createBudgetPlanExpense({
        budgetPlanId: Number(formData.budgetPlanId),
        item: formData.item,
        amount: formData.amount,
        categoryId: formData.category
    });

    // update the budget plan with new expense
    await updateExpenseOfBudgetPlan(
        formData.budgetPlanId,
        formData.totalExpense,
        formData.amount,
        'add'
    );
    // update the budget plan with new balance
    await updateBalanceOfBudgetPlan(
        +formData.budgetPlanId,
        formData.totalBalance,
        formData.amount,
        'subtract'
    );

    revalidatePath(`/budget-plans/${id}`); // Update cached budgetplans
    redirect(`/budget-plans/${id}`); // Navigate to the new post page
}

/**
 * AddBudgetPlanAction : ( server action )
 * Add a new budget plan.
 * @param { AddBudgetPlanFormData } formData : form data from addExpenseForm form
 */

export default async function AddBudgetPlanAction(
    formData: AddBudgetPlanFormData
) {
    const user = await currentUser();

    const id = await createBudgetPlan({
        userId: user?.id + '',
        budgetPlanName: formData.budgetPlanName,
        budget: formData.budgetAmount,
        expense: 0.0,
        balance: formData.budgetAmount
    });

    revalidatePath('/budget-plans'); // Update cached budgetplans
    redirect(`/budget-plans/${id}`); // Navigate to the new post page
}
