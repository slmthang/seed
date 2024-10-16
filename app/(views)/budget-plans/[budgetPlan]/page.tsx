

import { getBudgetPlanById } from "@/app/db/db";
import BudgetPlan from "./BudgetPlan"

export default async function Page({ params }: { params: { budgetPlan: string } }) {

    // budgetPlan Id
    const id = params.budgetPlan;
    
    const budgetPlan = await getBudgetPlanById(+id); // get a specific budget plan by using Id
    const expenses = await getBudgetExpensesByBudgetPlanId(+id); // get expense list by using budgetplan id

    let error = {};

    if (!budgetPlan.success && typeof budgetPlan.data === 'string') {
    }

    return (
        {
            budgetPlan.success === true && typeof budgetPlan.data !== 'string' ?

                <BudgetPlan budgetPlanId={id} budgetPlanName={budgetPlan.data.budgetPlanName} budget={budgetPlan.data.budget} expense={budgetPlan.data.expense} balance={budgetPlan.data.balance} expenses={expenses}/> : 
                (
                    <h1>lkj</h1>
                )
                
        }
        
    )

}