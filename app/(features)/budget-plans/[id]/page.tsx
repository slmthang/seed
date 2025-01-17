/* ########################################### Modules ########################################### */
// remote
import { currentUser } from '@clerk/nextjs/server';

// local
import {
    getBudgetPlan,
    getBudgetPlanExpenseList
} from '@/app/lib/db/drizzle/drizzle';
import {
    SelectBudgetPlan,
    SelectbudgetPlanExpense
} from '@/app/lib/definitions/DataBase';
import BudgetPlan from '@/app/components/budget-plans/id/BudgetPlan';
import BudgetPlanNestedMenuBar from '@/app/components/budget-plans/id/components/BudgetPlanNestedMenuBar';

/* ########################################### Page ########################################### */

export default async function Page({ params }: { params: { id: string } }) {
    const user = await currentUser();
    const budgetPlanId = params.id;

    const budgetPlanData: SelectBudgetPlan = await getBudgetPlan(
        +budgetPlanId,
        user?.id as string
    );
    const expenseListData: SelectbudgetPlanExpense[] =
        await getBudgetPlanExpenseList(+budgetPlanId, user?.id as string);

    return (
        <div className="w-full min-h-full">
            <BudgetPlanNestedMenuBar pageName={budgetPlanData.budgetPlanName} />
            <BudgetPlan
                budgetPlanId={+budgetPlanId}
                budget={budgetPlanData.budget}
                expense={budgetPlanData.expense}
                balance={budgetPlanData.balance}
                expenseListData={expenseListData}
            />
        </div>
    );
}
