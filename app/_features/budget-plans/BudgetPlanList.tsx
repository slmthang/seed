/* ########################################### CLIENT COMPONENT ########################################### */

'use client';

/* ########################################### MODULES ########################################### */

// remote
import { useState } from 'react';

// local
import BudgetPlanCard from '@/app/_features/budget-plans/components/BudgetPlanCard';
import { AddButtonIcon } from '@/app/_features/shared/components/Icons';
import AddBudgetPlanForm from '@/app/_features/budget-plans/components/BudgetPlanForm';
import EmptyBudgetPlansCard from '@/app/_features/budget-plans/components/EmptyBudgetPlansCard';
import { SelectBudgetPlan } from '@/app/lib/definitions/db/types';

/* ########################################### BudgetPlanList ########################################### */

export default function BudgetPlanList({
    budgetPlanListData
}: {
    budgetPlanListData: SelectBudgetPlan[];
}) {
    const BudgetPlanCards = budgetPlanListData.map((item) => {
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

    const [formActive, setFormActive] = useState<boolean>(false);

    return (
        <div className="w-full">
            {formActive && <AddBudgetPlanForm toggleForm={setFormActive} />}

            <div className=" w-full h-[calc(100dvh-(6rem))] overflow-y-scroll pt-[1rem] px-4 pb-[8rem] relative">
                <div className="w-full border-dark gap-y-[1rem] relative flex flex-col  items-center">
                    {budgetPlanListData.length >= 1 ? (
                        BudgetPlanCards
                    ) : (
                        <EmptyBudgetPlansCard />
                    )}
                </div>

                <div onClick={() => setFormActive((prev) => !prev)}>
                    <AddButtonIcon />
                </div>
            </div>
        </div>
    );
}
