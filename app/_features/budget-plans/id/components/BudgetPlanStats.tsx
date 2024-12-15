/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { useState } from 'react';
import { VictoryPie } from 'victory';

// local
import { budgetPlanOptions } from '@/app/lib/definitions/menuOptions/types';

import {
    ChevronDownIcon,
    ChevronRightIcon,
    SquareIcon
} from '@/app/_features/shared/components/Icons';
import { categorizedExpense } from '@/app/lib/definitions/categories/type';
import {
    categorizeBudgetExpenseList,
    sortBudgetPlanExpenseList,
    sortCategorizedExpenseList,
    splitMoney,
    toPieChartData
} from '@/app/lib/utils';

import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/types';

function BudgetPlanStatsChart({
    expenseListData
}: {
    expenseListData: SelectbudgetPlanExpense[];
}) {
    const categorizedExpenseListData =
        categorizeBudgetExpenseList(expenseListData);

    return (
        <div className="w-full py-6 px-2 border-[1px] border-dark-border rounded-xl">
            <div className="w-full h-[12rem]">
                <VictoryPie
                    style={{
                        data: {
                            fill: ({ datum }) => datum.fill
                        },
                        labels: {
                            fontSize: 22,
                            fill: '#dadada'
                        }
                    }}
                    data={toPieChartData(categorizedExpenseListData)}
                />
            </div>
        </div>
    );
}

function BudgetPlanStatsBreakDownCard({
    categorizedExpenseData,
    expenseListData,
    expense
}: {
    categorizedExpenseData: categorizedExpense;
    expenseListData: SelectbudgetPlanExpense[];
    expense: number;
}) {
    const [categorizedExpenseDataDollars, categorizedExpenseDataCents] =
        splitMoney(String(categorizedExpenseData.amount));

    const percentage = (+categorizedExpenseData.amount / expense) * 100;

    const [showMoreActive, SetShowMoreActive] = useState<boolean>(false);

    const expenseListDataSorted = sortBudgetPlanExpenseList(
        expenseListData,
        'amount',
        'desc'
    );

    const expenseListCards = expenseListDataSorted.map((expenseData) => {
        if (expenseData.category === categorizedExpenseData.name) {
            const [expenseDataAmountDollars, expenseDataAmountCents] =
                splitMoney(String(expenseData.amount));

            return (
                <div
                    key={expenseData.id}
                    className="w-full h-[2.5rem] flex justify-center items-center"
                >
                    <div className="w-[2rem] h-[2.5rem] flex justify-center items-center"></div>
                    <div className="w-full h-[2.5rem] flex items-center justify-between border-l-[2px] border-dark-border pl-2">
                        <div className="flex items-center">
                            <SquareIcon tailwindClass="fa-fw fa-2xs mr-1 text-red-500" />
                            <p className="inline">{expenseData.item}</p>
                        </div>
                        <div>
                            <p className="mt-1">
                                ${expenseDataAmountDollars}.
                                <span className="text-xs">
                                    {expenseDataAmountCents
                                        ? expenseDataAmountCents
                                        : '00'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    });

    return (
        <div className="w-full min-h-[3rem] flex flex-col justify-between items-center rounded-xl  py-2 px-4 border-dark-border border-[1px] shadow-sm shadow-dark-border">
            <div
                className="w-full h-[3rem] flex justify-center items-center"
                onClick={() => SetShowMoreActive((prev) => !prev)}
            >
                <div className="w-[2rem] h-[3rem] flex justify-center items-center">
                    {showMoreActive ? (
                        <ChevronDownIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </div>
                <div className="w-full h-[3rem] flex items-center relative justify-between">
                    <div className="flex h-full items-center justify-center">
                        <p className="inline">{categorizedExpenseData.name}</p>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <p className="inline font-thin text-xs">
                            {Math.round(percentage)}%
                        </p>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <p className="mt-1">
                            ${categorizedExpenseDataDollars}.
                            <span className="text-xs">
                                {categorizedExpenseDataCents
                                    ? categorizedExpenseDataCents
                                    : '00'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {showMoreActive && expenseListCards}
        </div>
    );
}

function BudgetPlanStatsBreakDown({
    expenseListData,
    budgetPlanOptions,
    expense
}: {
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
    expense: number;
}) {
    // categorize and sort expenseListData
    const sortedCategorizedExpenseListData = sortCategorizedExpenseList(
        categorizeBudgetExpenseList(expenseListData),
        budgetPlanOptions.sortBy!,
        budgetPlanOptions.orderBy!
    );

    const sortedCategorizedExpenseListCards =
        sortedCategorizedExpenseListData.map((e, i) => {
            return (
                <BudgetPlanStatsBreakDownCard
                    key={i + '' + e.name}
                    categorizedExpenseData={e}
                    expenseListData={expenseListData}
                    expense={expense}
                />
            );
        });

    return (
        <div className="w-full min-h-fit flex flex-col justify-center items-center">
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col justify-center items-center gap-y-2">
                    {sortedCategorizedExpenseListCards}
                </div>
            </div>
        </div>
    );
}

export default function Main({
    expenseListData,
    expense,
    budgetPlanOptions
}: {
    expenseListData: SelectbudgetPlanExpense[];
    expense: number;
    budgetPlanOptions: budgetPlanOptions;
}) {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-[1rem] py-[1rem] px-[1rem] bg-dark-surface-1 border-[1px] border-dark-border rounded-xl">
            <BudgetPlanStatsChart expenseListData={expenseListData} />
            <BudgetPlanStatsBreakDown
                expenseListData={expenseListData}
                budgetPlanOptions={budgetPlanOptions}
                expense={expense}
            />
        </div>
    );
}
