/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from 'react';

// local
import { BudgetExpenseForm } from './components/BudgetExpenseForm';
import BudgetPlanAtGlance from '@/app/components/budget-plans/id/components/BudgetPlanAtGlance';
import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/DataBaseDefinitions';
import { AddButtonIcon } from '@/app/components/shared/components/Icons';
import BudgetPlanEmptyExpenses from './components/BudgetPlanEmptyExpenses';
import {
    BudgetPlanExpensesTab,
    BudgetPlanStatsTab
} from './components/BudgetPlanBreakDown';

import { budgetPlanOptions } from '@/app/lib/definitions/menuOptions/BudgetPlanOptions';
import BudgetPlanChart from './components/BudgetPlanChart';
import TabsDuo from '../../shared/components/TabsDuo';

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
    budget: string;
    expense: string;
    balance: string;
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
    setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
}) {
    const [formActive, setFormActive] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<'Expenses' | 'Stats'>(
        'Expenses'
    );

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
            <div className="relative w-full h-[calc(100dvh-(6rem))] flex flex-col items-center overflow-y-scroll">
                <div className="w-full relative flex flex-col items-center  border-dark-border gap-y-[0.75rem] py-[1rem]">
                    {/* <div className="w-full min-h-full rounded-xl bg-light-surface-0 border-light-border border-t-[1px] absolute top-[6rem] -z-20"></div> */}

                    <div className="w-full px-4">
                        <BudgetPlanAtGlance
                            budget={budget}
                            expense={expense}
                            balance={balance}
                        />
                    </div>

                    <div className="w-full px-4">
                        <TabsDuo
                            fields={['Expenses', 'Stats']}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    </div>

                    <div className="w-full justify-center items-center flex flex-col px-4 gap-y-[0.75rem]">
                        {expenseListData.length <= 0 ? (
                            <BudgetPlanEmptyExpenses />
                        ) : selectedTab === 'Expenses' ? (
                            <BudgetPlanExpensesTab
                                expenseListData={expenseListData}
                                budgetPlanOptions={budgetPlanOptions}
                                setBudgetPlanOptions={setBudgetPlanOptions}
                            />
                        ) : (
                            <>
                                <BudgetPlanChart
                                    expenseListData={expenseListData}
                                />
                                <BudgetPlanStatsTab
                                    expenseListData={expenseListData}
                                    budgetPlanOptions={budgetPlanOptions}
                                    setBudgetPlanOptions={setBudgetPlanOptions}
                                    expense={expense}
                                />
                            </>
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
    budget,
    expense,
    balance,
    expenseListData
}: {
    budgetPlanId: number;
    budget: string;
    expense: string;
    balance: string;
    expenseListData: SelectbudgetPlanExpense[];
}) {
    const [budgetPlanOptions, setBudgetPlanOptions] =
        useState<budgetPlanOptions>({
            groupBy: 'item',
            sortBy: 'amount',
            orderBy: 'desc'
        });

    return (
        <BudgetPlan
            budgetPlanId={budgetPlanId}
            budget={budget}
            expense={expense}
            balance={balance}
            expenseListData={expenseListData}
            budgetPlanOptions={budgetPlanOptions}
            setBudgetPlanOptions={setBudgetPlanOptions}
        />
    );
}
