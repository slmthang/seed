/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import { useState } from 'react';

// local
import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/DataBaseDefinitions';
import { sortBudgetPlanExpenseList, splitMoney } from '@/app/lib/utils';
import { SquareIcon } from '@/app/components/shared/components/Icons';
import { budgetPlanOptions } from '@/app/lib/definitions/menuOptions/BudgetPlanOptions';

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
                    placeholder="Search an Expense"
                    onChange={searchInputHandler}
                    className="w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-dark-surface-3 border-[1px] border-dark-border text-dark-text-2 text-sm placeholder-dark-text-2 outline-none"
                />
            }
        </div>
    );
}

function BudgetPlanExpensesCards({
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
            return element.item.toLowerCase().includes(searchBarValue);
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
                className="w-full h-[4rem] flex flex-col justify-center items-center rounded-xl px-4 py-2 border-dark-border border-[1px] shadow-sm shadow-dark-border"
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
                                <span className="text-xs">{amountCents}</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[1rem] flex items-center relative">
                        <div className="flex gap-x-2 right-0 absolute">
                            <p className="text-xs font-thin">{e.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center  items-center w-full gap-y-2">
                    {cards}
                </div>
            </div>
        </div>
    );
}

export default function Main({
    expenseListData,
    budgetPlanOptions
}: {
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
}) {
    const [searchBarValue, setSearchBarValue] = useState('');

    // search input handler
    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        const value = element.value;

        setSearchBarValue(value);
    };

    return (
        <div className="w-full min-h-fit bg-dark-surface-1 rounded-2xl border-[1px] border-dark-border flex flex-col justify-center  items-center py-[2rem] px-[1rem] gap-y-4">
            <ExpenseSearchBar searchInputHandler={searchInputHandler} />
            <BudgetPlanExpensesCards
                expenseListData={expenseListData}
                searchBarValue={searchBarValue}
                budgetPlanOptions={budgetPlanOptions}
            />
        </div>
    );
}
