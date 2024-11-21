/* ########################################### Modules ########################################### */

// local
import {
    getBudgetPlanByItsId,
    getExpenseListByBudgetPlanId
} from '@/app/lib/db/drizzle/drizzle';
import { SelectBudgetPlan, SelectbudgetPlanExpense } from '@/app/lib/definitions/db/types';
import BudgetPlan from '@/app/_features/budget-plans/id/BudgetPlan';

/* ########################################### Page ########################################### */

export default async function Page({ params }: { params: { id: string } }) {
    const budgetPlanId = params.id;

    const budgetPlanData: SelectBudgetPlan =
        await getBudgetPlanByItsId(+budgetPlanId);
    const expenseListData: SelectbudgetPlanExpense[] =
        await getExpenseListByBudgetPlanId(+budgetPlanId);

    return (
        <BudgetPlan
            budgetPlanId={+budgetPlanId}
            budgetPlanName={budgetPlanData.budgetPlanName}
            budget={budgetPlanData.budget}
            expense={budgetPlanData.expense}
            balance={budgetPlanData.balance}
            expenseListData={expenseListData}
        />
    );
}
