'use client';

import { useState } from 'react';
import { SelectBudgetPlan } from '@/app/lib/definitions/db/DataBaseDefinitions';

import BudgetPlans from '@/app/components/budget-plans/BudgetPlanList';
import MenuBar from '@/app/dfl/MenuBar';

export default function BudgetPlanListHelper({
    budgetPlanListData
}: {
    budgetPlanListData: SelectBudgetPlan[];
}) {
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
    const [searchBarValue, setSearchBarValue] = useState('');

    return (
        <div className="w-full relative min-h-full">
            <MenuBar
                pageName="Budget Plans"
                searchBarActive={searchBarActive}
                setSearchBarActive={setSearchBarActive}
                setSearchBarValue={setSearchBarValue}
            />
            <BudgetPlans
                budgetPlanListData={budgetPlanListData}
                searchBarValue={searchBarValue}
            />
        </div>
    );
}
