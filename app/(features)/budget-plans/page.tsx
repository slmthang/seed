/* ########################################### Modules ########################################### */

// remote
import { currentUser } from '@clerk/nextjs/server';

// local
import { getBudgetPlanListByUserId } from '@/app/lib/db/drizzle/drizzle';
import BudgetPlans from '@/app/_features/budget-plans/BudgetPlanList';
import { SelectBudgetPlan } from '@/app/lib/definitions/db/types';
import MenuBar from '@/app/dfl/MenuBar';

/* ########################################### Page ########################################### */

export default async function Page() {
    const user = await currentUser();

    const budgetPlanListData: SelectBudgetPlan[] =
        await getBudgetPlanListByUserId(user?.id as string);

    return (
        <>
            <MenuBar pageName="Budget Plans" />
            <BudgetPlans budgetPlanListData={budgetPlanListData} />
        </>
    );
}
