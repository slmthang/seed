

import { getBudgetPlanByItsId, getExpenseListByBudgetPlanId } from "@/app/lib/db/drizzle";
import BudgetPlan from "@/app/ui/views/budget-plans/id/BudgetPlan";


export default async function Page({ params }: { params: { id: string } }) {

    const budgetPlanId = params.id;
    
    const budgetPlanData = await getBudgetPlanByItsId(+budgetPlanId);
    const expenseList = await getExpenseListByBudgetPlanId(+budgetPlanId);

    return (
        <BudgetPlan budgetPlanId={budgetPlanId} budgetPlanName={budgetPlanData.budgetPlanName} totalBudget={budgetPlanData.budget} totalExpense={budgetPlanData.expense} totalBalance={budgetPlanData.balance} expenseList={expenseList}/>
    )

}