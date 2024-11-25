/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { useState } from 'react';

// local
import { BudgetExpenseForm } from './components/BudgetExpenseForm';
import BudgetPlanAtGlance from '@/app/_features/budget-plans/id/components/BudgetPlanAtGlance';
import BudgetPlanExpenses from '@/app/_features/budget-plans/id/components/BudgetPlanExpenses';
import BudgetPlanStats from '@/app/_features/budget-plans/id/components/BudgetPlanStats';
import TabsDuo from '@/app/_features/shared/components/TabsDuo';

import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/types';
import { AddButtonIcon } from '@/app/_features/shared/components/Icons';
import BudgetPlanEmptyExpenses from './components/BudgetPlanEmptyExpenses';
import BudgetPlanHeader from './components/BudgetPlanHeader';

/* ########################################### Budget Plan ########################################### */

export default function BudgetPlan({
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
    const [formActive, setFormActive] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<string>('Expenses');

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
            <div className=" w-screen h-dvh h-dvh overflow-y-scroll z-20 fixed top-[0px] bg-dark-surface-1">
                <div className="w-screen flex items-center justify-center">
                    <BudgetPlanHeader budgetPlanName={budgetPlanName} />
                </div>

                <div className="w-screen min-h-screen relative flex flex-col items-center  border-dark gap-y-[0.75rem] pb-[2rem]">
                    {/* background card */}
                    <div className="w-full bg-dark-surface-0 h-[calc(100%-5rem)] top-[5rem] absolute border-t-[1px] border-dark-border rounded-t-xl z-[-10]"></div>

                    <div className="w-[90%]">
                        <BudgetPlanAtGlance
                            budget={budget}
                            expense={expense}
                            balance={balance}
                        />
                    </div>

                    <TabsDuo
                        fields={['Expenses', 'Stats']}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />

                    <div className="w-[90%] justify-center items-center flex">
                        {expenseListData.length <= 0 ? (
                            <BudgetPlanEmptyExpenses />
                        ) : selectedTab === 'Expenses' ? (
                            <BudgetPlanExpenses
                                expenseListData={expenseListData}
                            />
                        ) : (
                            <BudgetPlanStats
                                expenseListData={expenseListData}
                                expense={expense}
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
