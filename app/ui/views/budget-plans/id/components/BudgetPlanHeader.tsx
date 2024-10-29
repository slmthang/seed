

/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// remote
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

// local
import { BackButtonIcon, MeatBallMenuIcon } from "@/app/ui/Icons";
import Option from "../../../components/Option";
import DropDownOption from "../../../components/DropDownOption";
import { expenseListOptionsType, groupByType, orderByType, sortByType } from "@/app/lib/definitions";


/* ########################################### BudgetPlanHeader ########################################### */

export default function BudgetPlanHeader(
    {
        budgetPlanName,
        expenseListOptions,
        setExpenseListOptions
    } : 
    {
        budgetPlanName: string,
        expenseListOptions: expenseListOptionsType,
        setExpenseListOptions: Dispatch<SetStateAction<expenseListOptionsType>>
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
        
            {
                showOptions && 
                
                (
                    <div className="w-[15rem] min-h-[5rem] absolute right-[0px] z-20">
                        <Option optionName="Edit" order="first" />
                        <DropDownOption displayOptionName="Group By" optionName="groupBy" subOptions={['Item', 'Category']} setFunction={setExpenseListOptions}/>
                        <DropDownOption displayOptionName="Sort By" optionName="sortBy" subOptions={['Name', 'Amount']} setFunction={setExpenseListOptions}/>
                        <DropDownOption displayOptionName="Order By" optionName="orderBy" order="last" subOptions={['Asc', 'Desc']} setFunction={setExpenseListOptions}/>
                    </div>
                )
            }
        </div>
    )
}