import { SelectbudgetPlanExpense } from '@/app/lib/definitions/DataBase';
import { budgetPlanOptions } from '@/app/lib/definitions/Options';
import { Dispatch, SetStateAction, useState } from 'react';
import SearchBar from '@/app/components/shared/SearchBar';
import { FilterIcon, ArrowUpwardIcon } from '@/app/components/shared/Icons';
import BudgetPlanExpensesTabOptions from './BudgetPlanExpensesTabOptions';
import { sortBudgetPlanExpenseList, splitMoney } from '@/app/lib/utils';

export default function BudgetPlanExpensesTab({
    expenseListData,
    budgetPlanOptions,
    setBudgetPlanOptions
}: {
    expenseListData: SelectbudgetPlanExpense[];
    budgetPlanOptions: budgetPlanOptions;
    setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
}) {
    const [searchBarValue, setSearchBarValue] = useState('');
    const [optionsActive, setOptionsActive] = useState<boolean>(false);

    // search input handler
    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        const value = element.value;

        setSearchBarValue(value);
    };

    return (
        <div className="w-full min-h-fit rounded-2xl bg-light-surface-2 border-[1px] border-light-border flex flex-col justify-center items-center py-[1.5rem] px-[1rem] ">
            <div className="w-full">
                <div className="w-full flex items-center justify-between">
                    <div className="w-full flex">
                        <div className="w-full">
                            <SearchBar
                                searchBarName="searchBudgetExpense"
                                searchBarPlaceholder="Search an expense"
                                searchInputHandler={searchInputHandler}
                            />
                        </div>
                        <div className="relative ml-[1rem]">
                            <div
                                className="w-[3rem] h-[2.5rem] flex justify-center items-center border-[1px] border-light-border rounded-lg mb-2 bg-white"
                                onClick={() =>
                                    setOptionsActive((prev) => !prev)
                                }
                            >
                                <FilterIcon tailwindClass="size-7 stroke-light-text-1" />
                            </div>

                            {optionsActive && (
                                <BudgetPlanExpensesTabOptions
                                    budgetPlanOptions={budgetPlanOptions}
                                    setBudgetPlanOptions={setBudgetPlanOptions}
                                />
                            )}
                        </div>
                    </div>
                </div>
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
                className="w-full h-[4rem] flex flex-col justify-center items-center border-[1px] border-light-border rounded-xl p-2"
            >
                <div className="w-full h-full flex items-center relative justify-center ">
                    <div className="absolute h-full left-2 flex items-center">
                        <div className="w-[2rem] h-[2.5rem] flex justify-center items-center">
                            <ArrowUpwardIcon tailwindClass="size-5 stroke-red-500 text-red-500" />
                        </div>

                        <div className="h-[2.5rem] flex justify-center items-center">
                            <p className="inline">{e.item}</p>
                        </div>
                    </div>
                    <div className="absolute h-full right-2  flex flex-col justify-around items-end">
                        <p>
                            ${amountDollars}.
                            <span className="text-xs">{amountCents}</span>
                        </p>
                        <div className="">
                            <p className="text-xs font-thin">{e.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-2 rounded-xl">
            {cards}
        </div>
    );
}
