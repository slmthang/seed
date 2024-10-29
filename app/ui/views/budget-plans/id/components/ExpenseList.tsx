

/* ########################################### Client Component ########################################### */

"use client"



/* ########################################### Modules ########################################### */

// remote

// local
import { sortExpenseList, splitMoney } from "@/app/lib/utils"
import { SquareIcon, SearchIcon } from "@/app/ui/Icons";
import { useState } from "react";
import { expenseDataType } from "@/app/lib/definitions";


/* ########################################### ExpenseList ########################################### */

export default function ExpenseList(
    {
        expenseListData,
        groupBy,
        sortBy,
        orderBy
    } :
     {
        expenseListData: expenseDataType[],
        groupBy: string,
        sortBy: string,
        orderBy: string
     }
) {

    console.log(orderBy, "bruh")

    const [searchBarActive, setSearchBarActive] = useState(false);
    const [searchBarValue, setSearchBarValue] = useState('');


    // search input handler
    const searchInputHandler = (element: any) => {

        const input = element.target.value.toLowerCase();

        setSearchBarValue(input);
    }

    const filteredExpenseListData = expenseListData.filter((element, index) => {

        if (searchBarValue == '') {
            return true;
        } 
        
        else {
            return element.item.toLowerCase().includes(searchBarValue);
        }

    })

    const sortedFilteredExpenseListData = sortExpenseList(filteredExpenseListData, sortBy=sortBy, orderBy=orderBy);

    let actualExpenseList = sortedFilteredExpenseListData.map((e, i) => {

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
                    <div className="w-[95%] min-h-[5rem] flex flex-col justify-between items-center p-2 pb-[1.5rem]">
                        <div className="w-full h-[3rem] flex items-center justify-center relative">
                            <div className="w-full flex items-center justify-begin pl-[0.5rem] h-[2rem]">
                                <p className="text-lg text-dark-title-text">Expenses</p>
                            </div>
                            <div onClick={() => setSearchBarActive(prev => !prev)} className="flex items-center justify-begin h-[2rem] bg-blue-500">
                                <SearchIcon tailwindClass="absolute right-[0.5rem] stroke-dark-secondary-text"/>
                            </div>
                            
                        </div>
                        {
                            searchBarActive && 

                            <div className=" w-full h-[2.5rem] flex items-center justify-center relative mt-[1rem]">

                                { 
                                    <input type="text" name="searchExpense" id="searchExpense" placeholder="Search an Expense" onChange={searchInputHandler} className="w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-dark-primary-text border-[1px] border-dark-border text-light-primary-text text-sm placeholder-light-secondary-text"/>
                                }
                                
                            </div>
                        }
                        
                    </div>

                    {actualExpenseList}
                </div>
            
            </div>
        </div>
    )

}