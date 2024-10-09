

import { getBudgetPlansByUserId } from "@/app/db/db"
import BudgetPlans from "./BudgetPlans"
import { currentUser } from '@clerk/nextjs/server'


export default async function Page() {

    const user = await currentUser();

    const budgetPlans = await getBudgetPlansByUserId(user?.id as string)

    return (
        <BudgetPlans budgetPlans={budgetPlans}/>
    )

}