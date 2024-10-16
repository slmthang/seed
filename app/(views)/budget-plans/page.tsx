

import { getBudgetPlansByUserId } from "@/app/lib/db/drizzle"
import BudgetPlans from "./BudgetPlans"
import { currentUser } from '@clerk/nextjs/server'


export default async function Page() {

    const user = await currentUser();

    const budgetPlans = await getBudgetPlansByUserId(user?.id as string)

    return (
        <BudgetPlans budgetPlans={budgetPlans}/>
    )

}