

/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// remote
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

// local
import { ChevronLeftIcon, MeatBallMenuIcon } from "@/app/ui/Icons";
import { budgetPlanOptionsType } from "@/app/lib/definitions";


/* ########################################### BudgetPlanHeader ########################################### */

export default function BudgetPlanHeader(
    {
        budgetPlanOptions,
        setBudgetPlanOptions
    } : 
    {
        budgetPlanOptions: budgetPlanOptionsType,
        setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptionsType>>
    }
) {

    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="relative w-[90%] mb-[1rem]">
            <div className="w-full h-[3rem] flex items-center justify-center relative">
                <Link href='/budget-plans' className="absolute left-[0px]">
                    <div className="h-full flex items-center justify-center ">
                        <ChevronLeftIcon tailwindClass=" stroke-1"/>
                        <p className="text-sm ml-[0.2rem]">Budget Plans</p>
                    </div>
                </Link>
                <div className="h-full flex items-center justify-center absolute right-[0px]" onClick={() => setShowOptions(prev => !prev)}>
                    <MeatBallMenuIcon tailwindClass=" stroke-1"/>
                </div>
            </div>
        </div>
    )
}