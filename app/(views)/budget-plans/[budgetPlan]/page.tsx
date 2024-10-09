

import { getBudgetPlanById, getBudgetExpensesByBudgetPlanId } from "@/app/db/db";
import BudgetPlan from "./BudgetPlan"



export default async function Page({ params }: { params: { budgetPlan: string } }) {

    const id = params.budgetPlan;

    const budgetPlan = await getBudgetPlanById(+id).then(data => data[0]);
    const expenses = await getBudgetExpensesByBudgetPlanId(+id);

    return (
        <BudgetPlan budgetPlanName={budgetPlan.budgetPlanName} budget={budgetPlan.budget} expense={budgetPlan.expense} balance={budgetPlan.balance} expenses={expenses}/>
        // <></>
    )

}