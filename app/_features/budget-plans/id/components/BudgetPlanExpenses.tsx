/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from 'react';

// local
import { expenseDataType, sortOptionsType } from '@/app/lib/definitions';
import { sortExpenseList, splitMoney } from '@/app/lib/utils';
import {
    FilterIcon,
    GroupByIcon,
    OrderByIcon,
    SortByIcon,
    SquareIcon
} from '@/app/_features/shared/components/Icons';
import DropDownOption from '@/app/_features/shared/components/DropDownOption';

/* ########################################### BudgetPlanExpenses ########################################### */

function BudgetPlanExpensesOptionsMenu({
    budgetPlanExpensesOptions,
    setBudgetPlanExpensesOptions
}: {
    budgetPlanExpensesOptions: sortOptionsType;
    setBudgetPlanExpensesOptions: Dispatch<SetStateAction<sortOptionsType>>;
}) {
    return (
        <div className="absolute flex flex-col right-0 min-w-[12rem] z-10 bg-dark-surface-2 rounded-xl gap-y-2 p-4">
            <DropDownOption
                optionName="Sort By"
                OptionIcon={SortByIcon}
                optionType="sortBy"
                optionValues={['name', 'amount']}
                options={budgetPlanExpensesOptions}
                setOptions={setBudgetPlanExpensesOptions}
            />
            <DropDownOption
                optionName="Order By"
                OptionIcon={OrderByIcon}
                optionType="orderBy"
                optionValues={['asc', 'desc']}
                options={budgetPlanExpensesOptions}
                setOptions={setBudgetPlanExpensesOptions}
            />
            <DropDownOption
                optionName="Group By"
                OptionIcon={GroupByIcon}
                optionType="groupBy"
                optionValues={['item', 'category']}
                options={budgetPlanExpensesOptions}
                setOptions={setBudgetPlanExpensesOptions}
            />
        </div>
    );
}

function ExpenseSearchBar({
    searchInputHandler
}: {
    searchInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className=" w-full h-[2.5rem] flex items-center justify-center relative mt-[1rem]">
            {
                <input
                    type="text"
                    name="searchExpense"
                    id="searchExpense"
                    placeholder="Search an Expense"
                    onChange={searchInputHandler}
                    className="w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-dark-primary-text border-[1px] border-dark-border text-light-primary-text text-sm placeholder-light-secondary-text"
                />
            }
        </div>
    );
}

function BudgetPlanExpensesHeader({
    budgetPlanExpensesOptions,
    setBudgetPlanExpensesOptions,
    searchInputHandler
}: {
    budgetPlanExpensesOptions: sortOptionsType;
    setBudgetPlanExpensesOptions: Dispatch<SetStateAction<sortOptionsType>>;
    searchInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    const [filterActive, setFilterActive] = useState(false);

    return (
        <div className="w-full min-h-[3rem] mb-[1rem] relative">
            <div className="w-full min-h-[3rem] flex items-center justify-center">
                <div className="w-full flex items-center justify-begin pl-[0.5rem] h-[2rem]">
                    <p className="text-xl font-bold">Expenses</p>
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
                <BudgetPlanExpensesOptionsMenu
                    budgetPlanExpensesOptions={budgetPlanExpensesOptions}
                    setBudgetPlanExpensesOptions={setBudgetPlanExpensesOptions}
                />
            )}

            <ExpenseSearchBar searchInputHandler={searchInputHandler} />
        </div>
    );
}

function BudgetPlanExpensesCards({
    sortedFilteredExpenseListData
}: {
    sortedFilteredExpenseListData: expenseDataType[];
}) {
    const sortedFilteredExpenseListCards = sortedFilteredExpenseListData.map(
        (e, i) => {
            const [amountDollars, amountCents] = splitMoney(String(e.amount));

            return (
                <div
                    key={e.budgetPlanID + i + ''}
                    className="w-full h-[4rem] flex flex-col justify-between items-center  rounded-xl"
                >
                    <div className="w-full h-[3rem] flex flex-col">
                        <div className="w-full h-[2rem] flex items-center relative justify-center">
                            <div className="absolute left-0 flex items-center">
                                <SquareIcon tailwindClass="fa-fw fa-2xs mr-1 text-red-500" />
                                <p className="inline">{e.item}</p>
                            </div>
                            <div className="absolute right-0">
                                <p className="text-base mt-1">
                                    ${amountDollars}.
                                    <span className="text-xs">
                                        {amountCents}
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
        }
    );

    return (
        <div className="w-[100%] flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center p-2">
                <div className="flex flex-col justify-center  items-center w-full gap-y-2">
                    {sortedFilteredExpenseListCards}
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
    const [searchBarValue, setSearchBarValue] = useState('');

    const [budgetPlanExpensesOptions, setBudgetPlanExpensesOptions] =
        useState<sortOptionsType>({
            groupBy: 'item',
            sortBy: 'amount',
            orderBy: 'desc'
        });

    // search input handler
    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        const value = element.value;

        setSearchBarValue(value);
    };

    const filteredExpenseListData = expenseListData.filter((element) => {
        if (searchBarValue == '') {
            return true;
        } else {
            return element.item.toLowerCase().includes(searchBarValue);
        }
    });

    const sortedFilteredExpenseListData = sortExpenseList(
        filteredExpenseListData,
        budgetPlanExpensesOptions.sortBy,
        budgetPlanExpensesOptions.orderBy
    );

    return (
        <div className="w-full min-h-fit bg-dark-surface-1 rounded-2xl border-[1px] border-dark-border flex flex-col justify-center  items-center py-[1rem] px-[1rem]">
            <BudgetPlanExpensesHeader
                budgetPlanExpensesOptions={budgetPlanExpensesOptions}
                setBudgetPlanExpensesOptions={setBudgetPlanExpensesOptions}
                searchInputHandler={searchInputHandler}
            />
            <BudgetPlanExpensesCards
                sortedFilteredExpenseListData={sortedFilteredExpenseListData}
            />
        </div>
    );
}
