/* ########################################### Modules ########################################### */

// remote
import { currentUser } from '@clerk/nextjs/server';

// local
import { getBudgetPlanList } from '@/app/lib/db/drizzle/drizzle';
import { SelectBudgetPlan } from '@/app/lib/definitions/DataBase';
import BudgetPlanListHelper from '@/app/components/budget-plans/BudgetPlanListHelper';

/* ########################################### Page ########################################### */

export default async function Page() {
    const user = await currentUser();

    const budgetPlanListData: SelectBudgetPlan[] = await getBudgetPlanList(
        user?.id as string
    );

    return <BudgetPlanListHelper budgetPlanListData={budgetPlanListData} />;
}
