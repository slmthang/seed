/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { useState, SetStateAction, Dispatch } from 'react';
import { VictoryPie } from 'victory';

// local
import { sortOptionsType } from '@/app/lib/definitions/menuOptions/types';

import { categorizedExpenseType } from '@/app/lib/definitions/types';
import {
    pieExpenseList,
    sortCategorizedList,
    splitMoney,
    categorizeExpenseList
} from '@/app/lib/utils';
import {
    SquareIcon,
    FilterIcon,
    SortByIcon,
    OrderByIcon,
    ChevronDownIcon,
    ChevronUpIcon
} from '@/app/_features/shared/components/Icons';
import DropDownOption from '@/app/_features/shared/components//DropDownOption';

import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/types';

function BudgetPlanStatsChart({
    expenseListData
}: {
    expenseListData: SelectbudgetPlanExpense[];
}) {
    return (
        <div className="w-full py-6 px-2 border-[1px] border-dark-border rounded-xl">
            <div className="w-full h-[15rem]">
                <VictoryPie
                    style={{
                        data: {
                            fill: ({ datum }) => datum.fill
                        },
                        labels: {
                            fontSize: 20,
                            fill: '#dadada'
                        }
                    }}
                    data={pieExpenseList(expenseListData)}
                />
            </div>
        </div>
    );
}

function BugetPlanStatsOptionMenu({
    budgetPlanStatsOptions,
    setBudgetPlanStatsOptions
}: {
    budgetPlanStatsOptions: sortOptionsType;
    setBudgetPlanStatsOptions: Dispatch<SetStateAction<sortOptionsType>>;
}) {
    return (
        <div className="absolute flex flex-col right-0 min-w-[12rem] z-10 bg-dark-surface-2 rounded-xl gap-y-2 p-4">
            <DropDownOption
                optionName="Sort By"
                OptionIcon={SortByIcon}
                optionType="sortBy"
                optionValues={['name', 'amount']}
                options={budgetPlanStatsOptions}
                setOptions={setBudgetPlanStatsOptions}
            />
            <DropDownOption
                optionName="Order By"
                OptionIcon={OrderByIcon}
                optionType="orderBy"
                optionValues={['asc', 'desc']}
                options={budgetPlanStatsOptions}
                setOptions={setBudgetPlanStatsOptions}
            />
        </div>
    );
}

function BudgetPlanStatsHeader({
    budgetPlanStatsOptions,
    setBudgetPlanStatsOptions
}: {
    budgetPlanStatsOptions: sortOptionsType;
    setBudgetPlanStatsOptions: Dispatch<SetStateAction<sortOptionsType>>;
}) {
    const [filterActive, setFilterActive] = useState(false);

    return (
        <div className="w-full min-h-[3rem] relative px-2">
            <div className="w-full min-h-[3rem] flex items-center justify-center">
                <div className="w-full flex items-center justify-begin pl-[0.5rem] h-[2rem]">
                    <p className="text-xl font-bold">Stats</p>
                </div>

                <div className="flex gap-x-[1rem] absolute right-[0.5rem]">
                    <div
                        onClick={() => setFilterActive((prev) => !prev)}
                        className="flex items-center justify-begin h-[2rem]"
                    >
                        <FilterIcon />
                    </div>
                </div>
            </div>

            {filterActive && (
                <BugetPlanStatsOptionMenu
                    budgetPlanStatsOptions={budgetPlanStatsOptions}
                    setBudgetPlanStatsOptions={setBudgetPlanStatsOptions}
                />
            )}
        </div>
    );
}

function BudgetPlanStatsBreakDownCard({
    categorizedExpenseData,
    expenseListData
}: {
    categorizedExpenseData: categorizedExpenseType;
    expenseListData: SelectbudgetPlanExpense[];
}) {
    const [categorizedExpenseDataDollars, categorizedExpenseDataCents] =
        splitMoney(String(categorizedExpenseData.amount));

    const [showMoreActive, SetShowMoreActive] = useState<boolean>(false);

    const expenseListCards = expenseListData.map((expenseData) => {
        if (expenseData.categoryId === categorizedExpenseData.id) {
            const [expenseDataAmountDollars, expenseDataAmountCents] =
                splitMoney(String(expenseData.amount));

            return (
                <div
                    key={expenseData.id}
                    className="w-full h-[3rem] flex justify-center items-center px-2"
                >
                    <div className="w-[2rem] h-[3rem] flex justify-center items-center"></div>
                    <div className="w-full h-[3rem] flex items-center justify-between">
                        <div className="flex items-center">
                            <SquareIcon tailwindClass="fa-fw fa-2xs mr-1 text-red-500" />
                            <p className="inline">{expenseData.item}</p>
                        </div>
                        <div>
                            <p className="text-base mt-1">
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
        <div className="w-full min-h-[2rem] flex flex-col justify-between items-center rounded-xl bg-dark-surface-2 p-2">
            <div
                className="w-full h-[2rem] flex justify-center items-center"
                onClick={() => SetShowMoreActive((prev) => !prev)}
            >
                <div className="w-[2rem] h-[2rem] flex justify-center items-center">
                    {showMoreActive ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
                <div className="w-full h-[2rem] flex items-center relative justify-between px-2">
                    <div className="flex items-center">
                        <p className="inline">{categorizedExpenseData.name}</p>
                    </div>
                    <div>
                        <p className="text-base mt-1">
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
    budgetPlanStatsOptions
}: {
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanStatsOptions: sortOptionsType;
}) {
    const [breakDownActive, setBreakDownActive] = useState<boolean>(false);

    // categorize and sort expenseListData
    const sortedCategorizedExpenseListData = sortCategorizedList(
        categorizeExpenseList(expenseListData),
        budgetPlanStatsOptions.sortBy,
        budgetPlanStatsOptions.orderBy
    );

    const sortedCategorizedExpenseListCards =
        sortedCategorizedExpenseListData.map((e, i) => {
            return (
                <BudgetPlanStatsBreakDownCard
                    key={i + '' + e.id}
                    categorizedExpenseData={e}
                    expenseListData={expenseListData}
                />
            );
        });

    return (
        <div className="w-full min-h-fit flex flex-col justify-center items-center bg-dark-surface-1 border-[1px] border-dark-border rounded-xl">
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col justify-center items-center">
                    <div
                        className="w-full flex items-center justify-between h-[3.5rem] px-4"
                        onClick={() => setBreakDownActive((prev) => !prev)}
                    >
                        <p className="text-lg font-bold">Breakdown</p>
                        {breakDownActive ? (
                            <ChevronUpIcon />
                        ) : (
                            <ChevronDownIcon />
                        )}
                    </div>
                    {breakDownActive && (
                        <div className="flex flex-col w-full items-center justify-center gap-y-2 p-4">
                            {sortedCategorizedExpenseListCards}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Main({
    expenseListData
}: {
    expenseListData: SelectbudgetPlanExpense[];
}) {
    const [budgetPlanStatsOptions, setBudgetPlanStatsOptions] =
        useState<sortOptionsType>({
            sortBy: 'amount',
            orderBy: 'desc'
        });

    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-[1rem] py-[1rem] px-[1rem] bg-dark-surface-1 border-[1px] border-dark-border rounded-xl">
            <BudgetPlanStatsHeader
                budgetPlanStatsOptions={budgetPlanStatsOptions}
                setBudgetPlanStatsOptions={setBudgetPlanStatsOptions}
            />
            <BudgetPlanStatsChart expenseListData={expenseListData} />
            <BudgetPlanStatsBreakDown
                expenseListData={expenseListData}
                budgetPlanStatsOptions={budgetPlanStatsOptions}
            />
        </div>
    );
}
