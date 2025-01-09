'use client';

import { SetStateAction, Dispatch, useState } from 'react';
// modules (remote)
// local
import { FilterIcon, SearchIcon } from '../../shared/components/Icons';
import SearchBar from '../../shared/components/SearchBar';
import { budgetPlanOptions } from '../../../lib/definitions/menuOptions/BudgetPlanOptions';
import { BudgetPlanOptionMenu } from '../id/components/BudgetPlanOptionMenu';

export default function BudgetPlanListMenuBar({
    pageName,
    searchBarActive,
    setSearchBarActive,
    setSearchBarValue
}: {
    pageName: string;
    searchBarActive: boolean;
    setSearchBarActive: Dispatch<SetStateAction<boolean>>;
    setSearchBarValue: Dispatch<SetStateAction<string>>;
}) {
    const [optionsActive, setOptionsActive] = useState<boolean>(false);

    const [budgetPlanOptions, setBudgetPlanOptions] =
        useState<budgetPlanOptions>({
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

    return (
        <div className="z-30 w-full flex flex-col min-h-[3rem] fixed top-[0px] left-[0px] px-4 bg-light-surface-1">
            <nav
                className={
                    'w-full flex justify-between items-center h-[3rem] '
                }
            >
                <div>
                    <p className="text-2xl font-bold text-light-text-1">
                        {pageName}
                    </p>
                </div>

                <div className="flex">
                    <div onClick={() => setSearchBarActive((prev) => !prev)}>
                        <SearchIcon tailwindClass="size-8 stroke-1 stroke-light-text-1" />
                    </div>
                </div>
            </nav>

            {searchBarActive && (
                <div className="w-full flex py-4">
                    <div className="w-full">
                        <SearchBar searchBarName='searchBudgetPlan' searchBarPlaceholder='Search a budget plan' searchInputHandler={searchInputHandler} />
                    </div>
                    <div className="relative ml-[1rem]">
                        <div
                            className="w-[3rem] h-[2.5rem] flex justify-center items-center border-[1px] border-light-border rounded-lg"
                            onClick={() => setOptionsActive((prev) => !prev)}
                        >
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
            )}
        </div>
    );
}
