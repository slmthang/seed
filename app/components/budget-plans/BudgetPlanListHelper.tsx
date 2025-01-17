'use client';

import { useState } from 'react';
import { SelectBudgetPlan } from '@/app/lib/definitions/DataBase';

import BudgetPlans from '@/app/components/budget-plans/BudgetPlanList';
import BudgetPlanListMenuBar from '@/app/components/budget-plans/components/BudgetPlanListMenuBar';

export default function BudgetPlanListHelper({
    budgetPlanListData
}: {
    budgetPlanListData: SelectBudgetPlan[];
}) {
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
    const [searchBarValue, setSearchBarValue] = useState('');

    return (
        <div className="w-full relative min-h-full">
            <BudgetPlanListMenuBar
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
