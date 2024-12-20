/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from 'react';

// local
import { budgetPlanOptions } from '@/app/lib/definitions/menuOptions/BudgetPlanOptions';
import {
    categories,
    categoryList
} from '@/app/lib/definitions/categories/CategoriesDefinitions';
import { BudgetPlanOptionMenu } from './BudgetPlanOptionMenu';

import {
    ChevronDownIcon,
    ChevronRightIcon,
    CircleIcon,
    FilterIcon,
    SearchIcon,
    SquareIcon
} from '@/app/components/shared/components/Icons';
import { categorizedExpense } from '@/app/lib/definitions/categories/CategoriesDefinitions';
import {
    categorizeBudgetExpenseList,
    sortBudgetPlanExpenseList,
    sortCategorizedExpenseList,
    splitMoney
} from '@/app/lib/utils';

import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/DataBaseDefinitions';

function CategorizedCard({
    categorizedExpenseData,
    expenseListData,
    expense
}: {
    categorizedExpenseData: categorizedExpense;
    expenseListData: SelectbudgetPlanExpense[];
    expense: string;
}) {
    const [categorizedExpenseDataDollars, categorizedExpenseDataCents] =
        splitMoney(String(categorizedExpenseData.amount));

    const percentage = (+categorizedExpenseData.amount / +expense) * 100;

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
                    <div className="w-full h-[2.5rem] flex items-center justify-between border-l-[2px] border-light-border pl-2">
                        <div className="flex items-center">
                            <CircleIcon
                                tailwindClass={`fa-fw fa-2xs mr-1 text-red-500`}
                            />
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
        <div className="w-full min-h-[3rem] flex flex-col justify-between items-center rounded-xl  py-2 px-4 bg-light-surface-2 shadow shadow-light-border">
            <div
                className="w-full h-[3rem] flex justify-center items-center"
                onClick={() => SetShowMoreActive((prev) => !prev)}
            >
                <div className="w-[2rem] h-[3rem] flex justify-center items-center">
                    {showMoreActive ? (
                        <ChevronDownIcon tailwindClass="size-5" />
                    ) : (
                        <ChevronRightIcon tailwindClass="size-5" />
                    )}
                </div>
                <div className="w-full h-[3rem] flex items-center relative justify-between">
                    <div className="flex h-full items-center justify-center">
                        <SquareIcon
                            tailwindClass={`fa-fw fa-2xs mr-1`}
                            style={{
                                color: categoryList[
                                    categorizedExpenseData.name as categories
                                ]
                            }}
                        />
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

function CategorizedCardList({
    expenseListData,
    budgetPlanOptions,
    expense,
    searchBarValue
}: {
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
    expense: string;
    searchBarValue: string;
}) {
    // categorize and sort expenseListData
    const sortedCategorizedExpenseListData = sortCategorizedExpenseList(
        categorizeBudgetExpenseList(expenseListData),
        budgetPlanOptions.sortBy!,
        budgetPlanOptions.orderBy!
    );

    const filteredSortedCategorizedExpenseListData =
        sortedCategorizedExpenseListData.filter((element) => {
            if (searchBarValue == '') {
                return true;
            } else {
                return element.name
                    .toLowerCase()
                    .includes(searchBarValue.toLowerCase());
            }
        });

    const cards = filteredSortedCategorizedExpenseListData.map((e, i) => {
        return (
            <CategorizedCard
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
                    {cards}
                </div>
            </div>
        </div>
    );
}

/* ########################################### BudgetPlanExpenses ########################################### */

function ExpenseSearchBar({
    searchInputHandler
}: {
    searchInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className=" w-full h-[2.5rem] flex items-center justify-center relative">
            {
                <input
                    type="text"
                    name="searchExpense"
                    id="searchExpense"
                    placeholder="Search..."
                    onChange={searchInputHandler}
                    className="w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-light-surface-1 border-[1px] border-light-border text-light-text-2 text-sm placeholder-light-text-2 outline-none focus:outline-none focus:border-blue-700"
                />
            }
        </div>
    );
}

function ItemizedCardList({
    expenseListData,
    searchBarValue,
    budgetPlanOptions
}: {
    expenseListData: SelectbudgetPlanExpense[];
    searchBarValue: string;
    budgetPlanOptions: budgetPlanOptions;
}) {
    const filteredExpenseListData = expenseListData.filter((element) => {
        if (searchBarValue == '') {
            return true;
        } else {
            return element.item
                .toLowerCase()
                .includes(searchBarValue.toLowerCase());
        }
    });

    const sortedFilteredExpenseListData = sortBudgetPlanExpenseList(
        filteredExpenseListData,
        budgetPlanOptions.sortBy!,
        budgetPlanOptions.orderBy!
    );

    const cards = sortedFilteredExpenseListData.map((e, i) => {
        const [amountDollars, amountCents] = splitMoney(String(e.amount));

        return (
            <div
                key={e.budgetPlanId + i + ''}
                className="w-full h-[4rem] flex flex-col justify-center items-center rounded-xl px-4 py-2 bg-light-surface-2 shadow shadow-light-border"
            >
                <div className="w-full h-[3rem] flex flex-col">
                    <div className="w-full h-[3rem] flex items-center relative justify-center">
                        <div className="absolute left-0 flex items-center">
                            <CircleIcon tailwindClass="fa-fw fa-2xs mr-1 text-red-500" />
                            <p className="inline">{e.item}</p>
                        </div>
                        <div className="absolute right-0">
                            <p className="text-base mt-1">
                                ${amountDollars}.
                                <span className="text-xs">{amountCents}</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[1rem] flex items-center justify-center relative">
                        <div className="flex gap-x-2 right-0 absolute flex items-center">
                            <p className="text-xs font-thin">{e.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-2 ">
            {cards}
        </div>
    );
}

export default function BudgetPlanBreakDown({
    expenseListData,
    budgetPlanOptions,
    setBudgetPlanOptions,
    expense
}: {
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
    setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
    expense: string;
}) {
    const [searchBarValue, setSearchBarValue] = useState('');
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
    const [optionsActive, setOptionsActive] = useState<boolean>(false);

    // search input handler
    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        const value = element.value;

        setSearchBarValue(value);
    };

    return (
        <div className="w-full min-h-fit rounded-2xl bg-light-surface-0 border-[1px] border-light-border flex flex-col justify-center  items-center py-[1rem] px-[1rem] ">
            <div className="w-full mb-[1rem]">
                <div className="w-full flex items-center justify-between">
                    <div onClick={() => setSearchBarActive((prev) => !prev)}>
                        <SearchIcon tailwindClass="size-7" />
                    </div>
                    <div className="relative">
                        <div onClick={() => setOptionsActive((prev) => !prev)}>
                            <FilterIcon />
                        </div>

                        {optionsActive && (
                            <BudgetPlanOptionMenu
                                budgetPlanOptions={budgetPlanOptions}
                                setBudgetPlanOptions={setBudgetPlanOptions}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full">
                {searchBarActive && (
                    <ExpenseSearchBar searchInputHandler={searchInputHandler} />
                )}
            </div>

            <div className="w-full mt-[1rem] overflow-hidden overflow-y-scroll ">
                {budgetPlanOptions.groupBy === 'item' ? (
                    <ItemizedCardList
                        expenseListData={expenseListData}
                        searchBarValue={searchBarValue}
                        budgetPlanOptions={budgetPlanOptions}
                    />
                ) : (
                    <CategorizedCardList
                        expenseListData={expenseListData}
                        budgetPlanOptions={budgetPlanOptions}
                        expense={expense}
                        searchBarValue={searchBarValue}
                    />
                )}
            </div>
        </div>
    );
}

export function BudgetPlanExpensesTab({
    expenseListData,
    budgetPlanOptions,
    setBudgetPlanOptions
}: {
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
    setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
}) {
    const [searchBarValue, setSearchBarValue] = useState('');
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
    const [optionsActive, setOptionsActive] = useState<boolean>(false);

    // search input handler
    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        const value = element.value;

        setSearchBarValue(value);
    };

    return (
        <div className="w-full min-h-fit rounded-2xl bg-light-surface-1 border-[1px] border-light-border flex flex-col justify-center  items-center py-[1rem] px-[1rem] ">
            <div className="w-full mb-[1rem]">
                <div className="w-full flex items-center justify-between">
                    <div onClick={() => setSearchBarActive((prev) => !prev)}>
                        <SearchIcon tailwindClass="size-7 stroke-light-text-1" />
                    </div>
                    <div className="relative">
                        <div onClick={() => setOptionsActive((prev) => !prev)}>
                            <FilterIcon tailwindClass="size-7 stroke-light-text-1" />
                        </div>

                        {optionsActive && (
                            <BudgetPlanOptionMenu
                                budgetPlanOptions={budgetPlanOptions}
                                setBudgetPlanOptions={setBudgetPlanOptions}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full">
                {searchBarActive && (
                    <ExpenseSearchBar searchInputHandler={searchInputHandler} />
                )}
            </div>

            <div className="w-full mt-[1rem] overflow-hidden overflow-y-scroll ">
                <ItemizedCardList
                    expenseListData={expenseListData}
                    searchBarValue={searchBarValue}
                    budgetPlanOptions={budgetPlanOptions}
                />
            </div>
        </div>
    );
}

export function BudgetPlanStatsTab({
    expenseListData,
    budgetPlanOptions,
    setBudgetPlanOptions,
    expense
}: {
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
    setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
    expense: string;
}) {
    const [searchBarValue, setSearchBarValue] = useState('');
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
    const [optionsActive, setOptionsActive] = useState<boolean>(false);

    // search input handler
    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        const value = element.value;

        setSearchBarValue(value);
    };

    return (
        <div className="w-full min-h-fit rounded-2xl bg-light-surface-1 border-[1px] border-light-border flex flex-col justify-center  items-center py-[1rem] px-[1rem] ">
            <div className="w-full mb-[1rem]">
                <div className="w-full flex items-center justify-between">
                    <div onClick={() => setSearchBarActive((prev) => !prev)}>
                        <SearchIcon tailwindClass="size-7 stroke-light-text-1" />
                    </div>
                    <div className="relative">
                        <div onClick={() => setOptionsActive((prev) => !prev)}>
                            <FilterIcon tailwindClass="size-7 stroke-light-text-1" />
                        </div>

                        {optionsActive && (
                            <BudgetPlanOptionMenu
                                budgetPlanOptions={budgetPlanOptions}
                                setBudgetPlanOptions={setBudgetPlanOptions}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full">
                {searchBarActive && (
                    <ExpenseSearchBar searchInputHandler={searchInputHandler} />
                )}
            </div>

            <div className="w-full mt-[1rem] overflow-hidden overflow-y-scroll ">
                <CategorizedCardList
                    expenseListData={expenseListData}
                    budgetPlanOptions={budgetPlanOptions}
                    expense={expense}
                    searchBarValue={searchBarValue}
                />
            </div>
        </div>
    );
}
