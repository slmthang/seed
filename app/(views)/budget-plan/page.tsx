

import BudgetPlan from "@/app/ui/views/budget-plan/BudgetPlan"

import { budgetPlanData } from "@/app/lib/placeholder-data";


export default function Page() {
    return (
        <BudgetPlan data={budgetPlanData}/>
    )

}