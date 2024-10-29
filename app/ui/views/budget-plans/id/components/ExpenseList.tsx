

/* ########################################### Client Component ########################################### */

"use client"



/* ########################################### Modules ########################################### */

// remote

// local
import { splitMoney } from "@/app/lib/utils"
import { SquareIcon, SearchIcon } from "@/app/ui/Icons";
import { useState } from "react";


/* ########################################### ExpenseList ########################################### */

export default function ExpenseList(
    {expenseList} :
     {
        expenseList: {
            budgetPlanID: number;
            item: string;
            category: string;
            amount: string;
            createdAt: Date;
        }[]
     }
) {

    const [searchBarActive, setSearchBarActive] = useState(false);

    let expenseListCards = expenseList.map((e, i) => {

        const [amountDollars, amountCents] = splitMoney(e.amount);

        return (
            <div key={e.budgetPlanID + i + ''} className="w-[95%] h-[5rem] flex justify-between items-center p-2">
                <div className="w-full h-full flex flex-col">
                    <div className="w-full h-[3rem] flex items-center relative justify-center">
                        <div className="absolute left-0 flex items-center">
                            <SquareIcon tailwindClass="fa-fw fa-2xs mr-1 text-red-500"/>
                            <p className="inline">{e.item}</p>
                        </div>
                        <div className="absolute right-0">
                            <p className="text-lg mt-1">${amountDollars}.<span className="text-xs">{amountCents}</span></p>
                        </div>
                    </div>
                    <div className="w-full h-[2rem] flex items-center relative">
                        <div className="flex gap-x-2 right-0 absolute">
                            <p className="text-xs font-light">{e.category}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    })

    return (

        <div className="w-[90%] min-h-fit bg-dark-surface-1 rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center my-4">
    
            <div className="w-[100%] flex flex-col items-center">
                
                <div className="w-full flex flex-col justify-center items-center mt-2 divide-y-[2px] divide-dark-border">
                    <div className="w-[95%] min-h-[5rem] flex justify-between items-center p-2 pb-[1.5rem]">
                        <div className="w-full min-h-[5rem] flex flex-col items-start justify-center relative">
                            <div className="flex items-center justify-center h-[2rem] mb-[0.5rem]">
                                <p className="text-lg text-dark-title-text">Expenses</p>
                            </div>
                    
                            <div className=" w-full h-[2.5rem] flex items-center justify-center relative">

                                { 
                                    // searchBarActive && 
                                    <input type="text" name="searchExpense" id="searchExpense" className="w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-dark-primary-text border-[1px] border-dark-border text-light-primary-text text-sm"/>
                                }

                                {
                                    // !searchBarActive &&
                                    <SearchIcon tailwindClass="absolute right-[0.5rem] stroke-dark-secondary-text"/>
                                }
                                
                            </div>
                        </div>
                    </div>
                    {expenseListCards}
                </div>
            
            </div>
        </div>
    )

}