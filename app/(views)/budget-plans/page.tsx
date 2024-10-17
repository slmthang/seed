

/* ########################################### Modules ########################################### */

// remote
import { currentUser } from '@clerk/nextjs/server'

// local
import { getBudgetPlanListByUserId } from "@/app/lib/db/drizzle"
import BudgetPlans from "../../ui/views/budget-plans/BudgetPlanList"



/* ########################################### Page ########################################### */

export default async function Page() {

    const user = await currentUser();

    const budgetPlanList = await getBudgetPlanListByUserId(user?.id as string)

    return (
        <BudgetPlans budgetPlanList={budgetPlanList}/>
    )

}