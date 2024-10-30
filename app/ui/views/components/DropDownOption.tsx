

/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from "react"
import clsx from "clsx";

// local
import { ChevronRightIcon, ChevronDownIcon } from "@/app/ui/Icons";
import { sortByType, orderByType, groupByType, budgetPlanOptions } from "@/app/lib/definitions";
import { setupFsCheck } from "next/dist/server/lib/router-utils/filesystem";

/* ########################################### Option ########################################### */

export default function DropDownOption(
    {
        displayOptionName,
        subOptions,
        setFunction,
        defaultOption,
        order
    } : 
    {
        displayOptionName: sortByType,
        subOptions : Array<sortByType>,
        setFunction: Dispatch<SetStateAction<sortByType>>,
        defaultOption: sortByType,
        order?: 'first' | 'last'
    }
) {

    const [showOptions, setShowOptions] = useState(false);

    const [selectedOption, setSelectedOption] = useState<sortByType>(defaultOption);

    return (
        <div>
            <div 
                className={clsx(
                    "w-full h-[3rem] flex items-center relative border-0 bg-dark-surface-1",
                    {
                        'rounded-t-xl': order === 'first',
                        'rounded-b-xl': order === 'last' && !showOptions
                    }
                )}

                onClick={() => setShowOptions(prev => !prev)}
            >
                <h1 className="pl-[1rem]">{displayOptionName}</h1>
                {!showOptions && <ChevronRightIcon tailwindClass="absolute right-[1rem] stroke-2"/> }
                {showOptions && <ChevronDownIcon tailwindClass="absolute right-[1rem] stroke-2"/> }
            </div>

            {
                showOptions && 

                (
                    <div 
                        className={clsx(
                            "w-full min-h-[4rem] flex flex-wrap items-center gap-[1rem] p-[1rem] bg-dark-surface-2 border-0",
                            {
                                'rounded-b-xl': order === 'last'
                            }
                        )}
                    >

                        {
                            subOptions.map((subOption, index) => {
                                return (
                                    <div 

                                        key={subOption + index}
                                        
                                        className={clsx(
                                            "flex items-center justify-center w-[5rem] h-[2.25rem] p-2 rounded-xl border border-dark-surface-2",
                                            {
                                                'bg-dark': subOption === selectedOption
                                            }
                                        )}

                                        onClick={
                                            () => { 
                                                setSelectedOption(subOption);
                                                setFunction(subOption);
                                            }
                                        }
                                    >
                                        <p className="text-sm">{subOption}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
                    
        </div>
    )
}