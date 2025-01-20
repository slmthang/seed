'use client';

import { SetStateAction, Dispatch, useState } from 'react';
// modules (remote)
// local
import { FilterIcon, SearchIcon } from '../../shared/Icons';
import SearchBar from '../../shared/SearchBar';
import { budgetPlanOptions } from '../../../lib/definitions/Options';
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
        <div className="z-30 w-full flex flex-col min-h-[3rem] fixed top-[0px] left-[0px] px-4 bg-light-surface-2">
            <nav
                className={'w-full flex justify-between items-center h-[3rem] '}
            >
                <p className="text-2xl font-bold text-light-text-1">
                    {pageName}
                </p>

                <div onClick={() => setSearchBarActive((prev) => !prev)}>
                    <SearchIcon tailwindClass="size-8 stroke-1 stroke-light-text-1" />
                </div>
            </nav>

            {searchBarActive && (
                <div className="w-full flex py-4">
                    <div className="w-full">
                        <SearchBar
                            searchBarName="searchBudgetPlan"
                            searchBarPlaceholder="Search a budget plan"
                            searchInputHandler={searchInputHandler}
                        />
                    </div>
                    <div className="relative ml-[1rem]">
                        <div
                            className="w-[3rem] h-[2.5rem] flex justify-center items-center border-[1px] bg-white border-light-border rounded-lg"
                            onClick={() => setOptionsActive((prev) => !prev)}
                        >
                            <FilterIcon tailwindClass="size-7 stroke-light-text-1 " />
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
