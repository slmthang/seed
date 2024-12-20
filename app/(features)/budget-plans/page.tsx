/* ########################################### Modules ########################################### */

// remote
import { currentUser } from '@clerk/nextjs/server';

// local
import { getBudgetPlanList } from '@/app/lib/db/drizzle/drizzle';
import { SelectBudgetPlan } from '@/app/lib/definitions/db/DataBaseDefinitions';
import BudgetPlanListHelper from './BudgetPlanListHelper';

/* ########################################### Page ########################################### */

export default async function Page() {
    const user = await currentUser();

    const budgetPlanListData: SelectBudgetPlan[] = await getBudgetPlanList(
        user?.id as string
    );

    return <BudgetPlanListHelper budgetPlanListData={budgetPlanListData} />;
}
