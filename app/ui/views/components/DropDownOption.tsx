


/* ########################################### Modules ########################################### */

// remote
import { Dispatch, FC, SetStateAction, useState } from "react";
import { sortOptionsType, groupByType, orderByType, sortByType } from "@/app/lib/definitions";
import { ChevronDownIcon, ChevronRightIcon } from "../../Icons";

// local 
import { capitalize } from "@/app/lib/utils";

export default function DropDownOption<T extends sortByType | orderByType | groupByType>(
    {
        optionName,
        OptionIcon,
        optionType,
        optionValues,
        options,
        setOptions
    } : 
    {
        OptionIcon: React.ComponentType<{
            tailwindClass?: string;
        }>,
        optionName: 'Sort By' | 'Order By' | 'Group By',
        optionType: 'sortBy' | 'orderBy' | 'groupBy',
        optionValues: T[],
        options: sortOptionsType,
        setOptions: Dispatch<SetStateAction<sortOptionsType>>
    }
) {

    const [optionsShown, setOptionShown] = useState(false);

    const optionList = optionValues.map((element, index) => {
        return (
            <div key={element + '' + index}>
                <input type="radio" name={optionType} id={String(element)} className="mr-2" defaultChecked={options[optionType] === String(element)} onClick={() => setOptions({...options, [optionType]: element})}/>
                <label htmlFor={String(element)} className="text-sm">{capitalize(String(element))}</label>
            </div>
        )
    })

    return (

        <div className="flex flex-col">
            <div className="w-full flex" onClick={() => setOptionShown(prev => !prev)}>
                <div className="flex items-center justify-center h-[3rem] w-[2rem] mr-[0.5rem]">
                    <OptionIcon tailwindClass="size-5"/>
                </div>
                <div className="flex flex-col items-start justify-center h-[3rem] w-[7rem] ">
                    <h1>{optionName}</h1>
                    <p className="text-xs font-thin">{options[optionType]}</p>
                </div>
                <div className="flex items-center justify-center h-[3rem] w-[2rem]">
                    {optionsShown ? <ChevronDownIcon tailwindClass="size-5" /> : <ChevronRightIcon tailwindClass="size-5" />}
                </div>
            </div>

            {
                optionsShown &&

                (
                    <div className="flex flex-col pl-[1rem] py-[0.5rem]">
                        {optionList}
                    </div>
                )
            }
                    
        </div>
    )
}