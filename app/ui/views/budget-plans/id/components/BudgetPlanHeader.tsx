

/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// remote
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

// local
import { BackButtonIcon, MeatBallMenuIcon } from "@/app/ui/Icons";
import { budgetPlanOptionsType } from "@/app/lib/definitions";


/* ########################################### BudgetPlanHeader ########################################### */

export default function BudgetPlanHeader(
    {
        budgetPlanName,
        budgetPlanOptions,
        setBudgetPlanOptions
    } : 
    {
        budgetPlanName: string,
        budgetPlanOptions: budgetPlanOptionsType,
        setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptionsType>>
    }
) {

    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="relative w-[90%] mb-[1rem]">
            <div className="w-full h-[3rem] mb-[0.5rem] flex items-center justify-center relative">
                <Link href='/budget-plans'>
                    <div className="h-full flex items-center justify-center">
                        <BackButtonIcon tailwindClass="absolute left-[0px] stroke-2"/>
                    </div>
                </Link>
                <div className="h-full flex items-center justify-center">
                    <p>{budgetPlanName}</p>
                </div>
                <div className="h-full flex items-center justify-center" onClick={() => setShowOptions(prev => !prev)}>
                    <MeatBallMenuIcon tailwindClass="absolute right-[0px] stroke-1"/>
                </div>
            </div>
        </div>
    )
}