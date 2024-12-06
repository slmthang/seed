/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from 'react';

// local
import { BudgetExpenseForm } from './components/BudgetExpenseForm';
import BudgetPlanAtGlance from '@/app/_features/budget-plans/id/components/BudgetPlanAtGlance';
import NestedMenuBar from '@/app/dfl/BudgetPlanNestedMenuBar';
import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/types';
import { AddButtonIcon } from '@/app/_features/shared/components/Icons';
import BudgetPlanEmptyExpenses from './components/BudgetPlanEmptyExpenses';
import BudgetPlanBreakDown from './components/BudgetPlanBreakDown';

import { budgetPlanOptions } from '@/app/lib/definitions/menuOptions/types';
import BudgetPlanChart from './components/BudgetPlanChart';

/* ########################################### Budget Plan ########################################### */

function BudgetPlan({
    budgetPlanId,
    budget,
    expense,
    balance,
    expenseListData,
    budgetPlanOptions,
    setBudgetPlanOptions
}: {
    budgetPlanId: number;
    budget: number;
    expense: number;
    balance: number;
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
    setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
}) {
    const [formActive, setFormActive] = useState<boolean>(false);

    return (
        <>
            {/* Form to add expense */}
            {formActive && (
                <BudgetExpenseForm
                    expense={expense}
                    balance={balance}
                    budgetPlanId={budgetPlanId}
                    toggleForm={setFormActive}
                />
            )}

            {/* Budget Plan */}
            <div className="relative w-full h-dvh min-h-dvh overflow-y-scroll mt-[3rem] pt-[2rem] px-4 pb-[6rem] ">
                <div className="w-full min-h-full relative flex flex-col items-center  border-dark gap-y-[0.75rem]">
                    <div className="w-full">
                        <BudgetPlanAtGlance
                            budget={budget}
                            expense={expense}
                            balance={balance}
                        />
                    </div>

                    <div className="w-full justify-center items-center flex">
                        <BudgetPlanChart expenseListData={expenseListData} />
                    </div>

                    <div className="w-full justify-center items-center flex">
                        {expenseListData.length <= 0 ? (
                            <BudgetPlanEmptyExpenses />
                        ) : (
                            <BudgetPlanBreakDown
                                expenseListData={expenseListData}
                                expense={expense}
                                budgetPlanOptions={budgetPlanOptions}
                                setBudgetPlanOptions={setBudgetPlanOptions}
                            />
                        )}
                    </div>
                </div>

                {/* Add Button for Add Expense Form */}
                <div onClick={() => setFormActive((prev) => !prev)}>
                    <AddButtonIcon />
                </div>
            </div>
        </>
    );
}

export default function Main({
    budgetPlanId,
    budgetPlanName,
    budget,
    expense,
    balance,
    expenseListData
}: {
    budgetPlanId: number;
    budgetPlanName: string;
    budget: number;
    expense: number;
    balance: number;
    expenseListData: SelectbudgetPlanExpense[];
}) {
    const [budgetPlanOptions, setBudgetPlanOptions] =
        useState<budgetPlanOptions>({
            groupBy: 'item',
            sortBy: 'amount',
            orderBy: 'desc'
        });

    return (
        <>
            <NestedMenuBar pageName={budgetPlanName} />
            <BudgetPlan
                budgetPlanId={budgetPlanId}
                budget={budget}
                expense={expense}
                balance={balance}
                expenseListData={expenseListData}
                budgetPlanOptions={budgetPlanOptions}
                setBudgetPlanOptions={setBudgetPlanOptions}
            />
        </>
    );
}
