/* ########################################### CLIENT COMPONENT ########################################### */

'use client';

/* ########################################### MODULES ########################################### */

// remote
import { useState } from 'react';

// local
import BudgetPlanCard from '@/app/components/budget-plans/components/BudgetPlanCard';
import { AddButtonIcon } from '@/app/components/shared/components/Icons';
import AddBudgetPlanForm from '@/app/components/budget-plans/components/BudgetPlanForm';
import EmptyBudgetPlansCard from '@/app/components/budget-plans/components/EmptyBudgetPlansCard';
import { SelectBudgetPlan } from '@/app/lib/definitions/db/DataBaseDefinitions';

/* ########################################### BudgetPlanList ########################################### */

export default function BudgetPlanList({
    budgetPlanListData,
    searchBarValue
}: {
    budgetPlanListData: SelectBudgetPlan[];
    searchBarValue: string;
}) {
    const [formActive, setFormActive] = useState<boolean>(false);

    const filteredBudgetPlans = budgetPlanListData.filter((element) => {
        if (searchBarValue == '') {
            return true;
        } else {
            return element.budgetPlanName
                .toLowerCase()
                .includes(searchBarValue.toLowerCase());
        }
    });

    const BudgetPlanCards = filteredBudgetPlans.map((item) => {
        return (
            <BudgetPlanCard
                key={item.id + '' + item.createdAt}
                budget={item.budget}
                expense={item.expense}
                balance={item.balance}
                budgetPlanId={item.id}
                budgetPlanName={item.budgetPlanName}
            />
        );
    });

    return (
        <div className="w-full">
            {formActive && <AddBudgetPlanForm toggleForm={setFormActive} />}

            <div className=" w-full h-[calc(100dvh-(6rem))] overflow-y-scroll px-4 pb-[8rem] relative">
                <div className="w-full border-dark gap-y-[1rem] relative flex flex-col  items-center">
                    {budgetPlanListData.length >= 1 ? (
                        BudgetPlanCards
                    ) : (
                        <EmptyBudgetPlansCard />
                    )}
                </div>

                <div onClick={() => setFormActive((prev) => !prev)}>
                    <AddButtonIcon tailwindClass="stroke-indigo-500 text-indigo-500" />
                </div>
            </div>
        </div>
    );
}
