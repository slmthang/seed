/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from 'react';

import {
    sortBy,
    orderBy,
    groupBy,
    budgetPlanOptions
} from '@/app/lib/definitions/Options';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

// local
import { capitalizeString } from '@/app/lib/utils';

export default function SingleDropDownOption<T extends sortBy | orderBy | groupBy>({
    optionName,
    OptionIcon,
    optionType,
    optionValues,
    options,
    setOptions
}: {
    OptionIcon: React.ComponentType<{
        tailwindClass?: string;
    }>;
    optionName: 'Sort By' | 'Order By' | 'Group By';
    optionType: 'sortBy' | 'orderBy' | 'groupBy';
    optionValues: T[];
    options: budgetPlanOptions;
    setOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
}) {
    const [optionsShown, setOptionShown] = useState(false);

    const optionList = optionValues.map((element, index) => {
        return (
            <div key={element + '' + index}>
                <input
                    type="radio"
                    name={optionType}
                    id={String(element)}
                    className="mr-1"
                    defaultChecked={options[optionType] === String(element)}
                    onClick={() =>
                        setOptions({
                            ...options,
                            [optionType]: element
                        })
                    }
                />
                <label htmlFor={String(element)} className="text-xs font-thin">
                    {capitalizeString(String(element))}
                </label>
            </div>
        );
    });

    return (
        <div className="flex flex-col">
            <div
                className="w-full h-[2.5rem] flex justify-center items-center"
                onClick={() => setOptionShown((prev) => !prev)}
            >
                <div className="flex items-center justify-center w-[2rem] ">
                    <OptionIcon tailwindClass="size-4 stroke-light-text-1" />
                </div>
                <div className="flex flex-col items-start justify-center w-[4rem] ">
                    <h1 className='text-xs'>{optionName}</h1>
                    <p className="text-xs font-light text-light-text-2">
                        {options[optionType]}
                    </p>
                </div>
                <div className="flex items-center justify-center w-[1.25rem]">
                    {optionsShown ? (
                        <ChevronUpIcon tailwindClass="size-4 stroke-light-text-1" />
                    ) : (
                        <ChevronDownIcon tailwindClass="size-4 stroke-light-text-1" />
                    )}
                </div>
            </div>

            {optionsShown && (
                <div className="flex flex-col pl-[1rem] py-[0.5rem]">
                    {optionList}
                </div>
            )}
        </div>
    );
}
