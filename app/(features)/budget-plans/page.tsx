/* ########################################### Modules ########################################### */

// remote
import { currentUser } from '@clerk/nextjs/server';

// local
import { getBudgetPlanList } from '@/app/lib/db/drizzle/drizzle';
import BudgetPlans from '@/app/components/budget-plans/BudgetPlanList';
import { SelectBudgetPlan } from '@/app/lib/definitions/db/DataBaseDefinitions';
import MenuBar from '@/app/dfl/MenuBar';

/* ########################################### Page ########################################### */

export default async function Page() {
    const user = await currentUser();

    const budgetPlanListData: SelectBudgetPlan[] = await getBudgetPlanList(
        user?.id as string
    );

    return (
        <div className="w-full relative min-h-full">
            <MenuBar pageName="Budget Plans" />
            <BudgetPlans budgetPlanListData={budgetPlanListData} />
        </div>
    );
}
