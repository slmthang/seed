


/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from "react";
import { budgetPlanOptionsType, groupByType, orderByType, sortByType } from "@/app/lib/definitions";

// local 
import { capitalize } from "@/app/lib/utils";

export default function DropDownOption<T extends sortByType | orderByType | groupByType>(
    {
        optionName,
        optionType,
        optionValues,
        budgetPlanOptions,
        setBudgetPlanOptions
    } : 
    {
        optionName: 'Sort By' | 'Order By' | 'Group By',
        optionType: 'sortBy' | 'orderBy' | 'groupBy',
        optionValues: T[],
        budgetPlanOptions: budgetPlanOptionsType,
        setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptionsType>>
    }
) {

    const [optionsShown, setOptionShown] = useState(true);

    const optionList = optionValues.map((element) => {
        return (
            <div>
                <input type="radio" name={optionType} id={String(element)} className="mr-2" defaultChecked={budgetPlanOptions[optionType] === String(element)} onClick={() => setBudgetPlanOptions({...budgetPlanOptions, [optionType]: element})}/>
                <label htmlFor={String(element)} className="text-sm">{capitalize(String(element))}</label>
            </div>
        )
    })

    return (
        <div className="flex flex-col p-4">
            <div className="w-full bg-blue-400" onClick={() => setOptionShown(prev => !prev)}>
                <h1>{optionName}</h1>
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