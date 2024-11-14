


/* ########################################### Modules ########################################### */

// remote
import { Dispatch, FC, SetStateAction, useState } from "react";
import { budgetPlanOptionsType, groupByType, orderByType, sortByType } from "@/app/lib/definitions";
import { ChevronDownIcon, ChevronRightIcon } from "../../Icons";

// local 
import { capitalize } from "@/app/lib/utils";

export default function DropDownOption<T extends sortByType | orderByType | groupByType>(
    {
        optionName,
        OptionIcon,
        optionType,
        optionValues,
        budgetPlanOptions,
        setBudgetPlanOptions
    } : 
    {
        OptionIcon: React.ComponentType<{
            tailwindClass?: string;
        }>,
        optionName: 'Sort By' | 'Order By' | 'Group By',
        optionType: 'sortBy' | 'orderBy' | 'groupBy',
        optionValues: T[],
        budgetPlanOptions: budgetPlanOptionsType,
        setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptionsType>>
    }
) {

    const [optionsShown, setOptionShown] = useState(false);

    const optionList = optionValues.map((element) => {
        return (
            <div>
                <input type="radio" name={optionType} id={String(element)} className="mr-2" defaultChecked={budgetPlanOptions[optionType] === String(element)} onClick={() => setBudgetPlanOptions({...budgetPlanOptions, [optionType]: element})}/>
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
                <div className="flex items-center justify-start h-[3rem] w-[7rem]">
                    <h1>{optionName}</h1>
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