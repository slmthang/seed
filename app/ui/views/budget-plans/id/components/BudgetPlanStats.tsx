/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { useState, SetStateAction, Dispatch } from 'react';
import { VictoryPie } from 'victory';

// local
import {
    categoriedExpenseType,
    expenseDataType,
    sortOptionsType
} from '@/app/lib/definitions';
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
} from '@/app/ui/Icons';
import DropDownOption from '../../../components/DropDownOption';

function BudgetPlanStatsChart({
    expenseListData
}: {
    expenseListData: expenseDataType[];
}) {
    return (
        <div className="w-full py-6 px-2">
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

function BudgetPlanStatsBreakDown({
    sortedCategorizedExpenseListData
}: {
    sortedCategorizedExpenseListData: categoriedExpenseType[];
}) {
    const [breakDownActive, setBreakDownActive] = useState<boolean>(false);

    const sortedCategorizedExpenseListCards =
        sortedCategorizedExpenseListData.map((e, i) => {
            const [amountDollars, amountCents] = splitMoney(String(e.amount));

            return (
                <div
                    key={e.category + i + ''}
                    className="w-[95%] h-[4rem] flex flex-col justify-between items-center rounded-xl"
                >
                    <div className="w-full h-[3rem] flex flex-col">
                        <div className="w-full h-[2rem] flex items-center relative justify-center">
                            <div className="absolute left-0 flex items-center">
                                <SquareIcon tailwindClass="fa-fw fa-2xs mr-1 text-red-500" />
                                <p className="inline">{e.category}</p>
                            </div>
                            <div className="absolute right-0">
                                <p className="text-base mt-1">
                                    ${amountDollars}.
                                    <span className="text-xs">
                                        {amountCents ? amountCents : '00'}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[1rem] flex items-center relative">
                            <div className="flex gap-x-2 right-0 absolute">
                                <p className="text-xs font-light">
                                    {e.category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

    return (
        <div className="w-full min-h-fit flex flex-col justify-center items-center bg-dark-surface-2 rounded-xl">
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
    expenseListData: expenseDataType[];
}) {
    const [budgetPlanStatsOptions, setBudgetPlanStatsOptions] =
        useState<sortOptionsType>({
            sortBy: 'amount',
            orderBy: 'desc'
        });

    // categorize and sort expenseListData
    const sortedCategorizedExpenseListData = sortCategorizedList(
        categorizeExpenseList(expenseListData),
        budgetPlanStatsOptions.sortBy,
        budgetPlanStatsOptions.orderBy
    );

    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-[1rem] py-[1rem] px-[1rem] bg-dark-surface-1 border-[1px] border-dark-border rounded-xl">
            <BudgetPlanStatsHeader
                budgetPlanStatsOptions={budgetPlanStatsOptions}
                setBudgetPlanStatsOptions={setBudgetPlanStatsOptions}
            />
            <BudgetPlanStatsChart expenseListData={expenseListData} />
            <BudgetPlanStatsBreakDown
                sortedCategorizedExpenseListData={
                    sortedCategorizedExpenseListData
                }
            />
        </div>
    );
}
