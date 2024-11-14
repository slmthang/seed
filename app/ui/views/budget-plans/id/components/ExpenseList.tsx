

/* ########################################### Client Component ########################################### */

"use client"



/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from "react";

// local
import { sortExpenseList, splitMoney } from "@/app/lib/utils"
import { SquareIcon, SearchIcon, FilterIcon, EditModeIcon, ReadModeIcon, TrashIcon } from "@/app/ui/Icons";
import { expenseDataType, budgetPlanOptionsType, sortByType, groupByType, orderByType } from "@/app/lib/definitions";
import Option from "../../../components/Option";
import DropDownOption from "../../../components/DropDownOption";

/* ########################################### ExpenseList ########################################### */

function ExpenseListSideOptions(
    {
        budgetPlanOptions,
        setBudgetPlanOptions
    } : 
    {
        budgetPlanOptions: budgetPlanOptionsType,
        setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptionsType>>
    }
) {

    function updateOptions<T extends sortByType | orderByType | groupByType >(optionProperty: string, optionValue: T) {

        setBudgetPlanOptions({
            ...budgetPlanOptions,
            [optionProperty]: optionValue
        })
    }

    const [s, setS] = useState(true);

    return (
        <div className="absolute right-0 w-[12rem] z-10 bg-dark-surface-1 rounded-xl">
            {/* <div className="flex flex-col p-4">
                <div className="w-full bg-blue-400" onClick={() => setS(prev => !prev)}>
                    <h1>Sort By</h1>
                </div>
                {
                    s &&
                    (
                        <div className="flex flex-col pl-[1rem] py-[0.5rem]">
                            <div>
                                <input type="radio" name="sortBy" id="name" value='name' className="mr-2" defaultChecked={budgetPlanOptions.sortBy === 'name'} onClick={() => updateOptions<sortByType>('sortBy', 'name')}/>
                                <label htmlFor="name" className="text-sm">Name</label>
                            </div>
                            <div>
                                <input type="radio" name="sortBy" id="amount" value='amount' className="mr-2 " defaultChecked={budgetPlanOptions.sortBy === 'amount'} onClick={() => updateOptions<sortByType>('sortBy', 'amount')}/>
                                <label htmlFor="amount" className="text-sm">Amount</label>
                            </div>
                        </div>
                    )
                }
                        
            </div>
            <div className="flex flex-col p-4 border-t-[1px] border-dark-border">
                <div >
                    <h1>Order By</h1>
                </div>

                <div className="flex flex-col pl-[1rem] py-[0.5rem]">
                    <div>
                        <input type="radio" name="orderBy" id="asc" value='asc' className="mr-2" defaultChecked={budgetPlanOptions.orderBy === 'asc'} onClick={() => updateOptions<orderByType>('orderBy', 'asc')}/>
                        <label htmlFor="asc" className="text-sm">Asc</label>
                    </div>
                    <div>
                        <input type="radio" name="orderBy" id="desc" value='desc' className="mr-2" defaultChecked={budgetPlanOptions.orderBy === 'desc'} onClick={() => updateOptions<orderByType>('orderBy', 'desc')}/>
                        <label htmlFor="desc" className="text-sm">Desc</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-4 border-t-[1px] border-dark-border">
                <div>
                    <h1>Group By</h1>
                </div>

                <div className="flex flex-col pl-[1rem] py-[0.5rem]">
                    <div>
                        <input type="radio" name="groupBy" id="item" value='item' className="mr-2" defaultChecked={budgetPlanOptions.groupBy === 'item'} onClick={() => updateOptions<groupByType>('groupBy', 'item')}/>
                        <label htmlFor="item" className="text-sm">Item</label>
                    </div>
                    <div>
                        <input type="radio" name="groupBy" id="category" value='category' className="mr-2" defaultChecked={budgetPlanOptions.groupBy === 'category'} onClick={() => updateOptions<groupByType>('groupBy', 'category')}/>
                        <label htmlFor="category" className="text-sm">Category</label>
                    </div>
                </div>
            </div> */}

            <DropDownOption displayOptionName="Sort By" optionType="sortBy" subOptions={['name', 'amount']}  />
        </div>
    )
}

function ExpenseSearchBar(
    {
        searchInputHandler
    } : {
        searchInputHandler: (element: any) => void
    }
) {
    return (
        <div className=" w-full h-[2.5rem] flex items-center justify-center relative mt-[1rem]">

            { 
                <input type="text" name="searchExpense" id="searchExpense" placeholder="Search an Expense" onChange={searchInputHandler} className="w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-dark-primary-text border-[1px] border-dark-border text-light-primary-text text-sm placeholder-light-secondary-text"/>
            }
            
        </div>
    )
}

export default function ExpenseList(
    {
        expenseListData,
        budgetPlanOptions,
        setBudgetPlanOptions
    } :
     {
        expenseListData: expenseDataType[],
        budgetPlanOptions: budgetPlanOptionsType,
        setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptionsType>>
     }
) {

    const [filterActive, setFilterActive] = useState(false);
    const [searchBarValue, setSearchBarValue] = useState('');
    const [editActive, setEditActive] = useState(false);


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

    const sortedFilteredExpenseListData = sortExpenseList(filteredExpenseListData, budgetPlanOptions.sortBy, budgetPlanOptions.orderBy);

    const expenseItemList = sortedFilteredExpenseListData.map((e, i) => {

        const [amountDollars, amountCents] = splitMoney(e.amount);

        return (
            <div key={e.budgetPlanID + i + ''} className="w-[90%] min-h-[5rem] flex flex-col justify-between items-center p-2">
                
                <div className="w-full h-[5rem] flex flex-col">
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

        <div className="w-[90%] min-h-fit bg-dark-surface-2 rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center my-4">
    
            <div className="w-[100%] flex flex-col items-center">
                
                <div className="w-full flex flex-col justify-center items-center mt-2 divide-y-[2px] divide-dark-border">

                    <div className="w-[90%] min-h-[3rem] mb-[1rem] relative">
                        <div className="w-full min-h-[3rem] flex items-center justify-center">
                            <div className="w-full flex items-center justify-begin pl-[0.5rem] h-[2rem]">
                                <p className="text-xl font-bold">Expenses</p>
                            </div>

                            <div className="flex gap-x-[1rem] absolute right-[0.5rem]">
                                <div onClick={() => setFilterActive(prev => !prev)} className="flex items-center justify-begin h-[2rem]">
                                    <FilterIcon/>
                                </div>
                            </div>
                            
                            
                        </div>

                        {
                            filterActive &&

                            <ExpenseListSideOptions 
                                budgetPlanOptions={budgetPlanOptions}
                                setBudgetPlanOptions={setBudgetPlanOptions}
                            />
                        }

                        <ExpenseSearchBar searchInputHandler={searchInputHandler}/>

                    </div>

                    
                    

                    {expenseItemList}
                </div>
            
            </div>
        </div>
    )

}