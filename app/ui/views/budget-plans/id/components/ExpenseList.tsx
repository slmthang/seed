

/* ########################################### Client Component ########################################### */

"use client"

/* ########################################### Modules ########################################### */

// remote
import { Dispatch, SetStateAction, useState } from "react";

// local
import { sortExpenseList, splitMoney } from "@/app/lib/utils"
import { SquareIcon, SearchIcon, FilterIcon, SortByIcon, OrderByIcon, GroupByIcon, TrashIcon } from "@/app/ui/Icons";
import { expenseDataType, sortOptionsType, sortByType, groupByType, orderByType } from "@/app/lib/definitions";
import Option from "../../../components/Option";
import DropDownOption from "../../../components/DropDownOption";

/* ########################################### ExpenseList ########################################### */

function ExpenseListSideOptions(
    {
        expenseListOptions,
        setExpenseListOptions
    } : 
    {
        expenseListOptions: sortOptionsType,
        setExpenseListOptions: Dispatch<SetStateAction<sortOptionsType>>
    }
) {

    return (
        <div className="absolute right-0 w-[14rem] z-10 bg-dark-surface-2 rounded-xl px-4 py-2">
            <DropDownOption optionName="Sort By" OptionIcon={SortByIcon} optionType="sortBy" optionValues={['name', 'amount']} options={expenseListOptions} setOptions={setExpenseListOptions}/>
            <DropDownOption optionName="Order By" OptionIcon={OrderByIcon} optionType="orderBy" optionValues={['asc', 'desc']} options={expenseListOptions} setOptions={setExpenseListOptions}/>
            <DropDownOption optionName="Group By" OptionIcon={GroupByIcon} optionType="groupBy" optionValues={['item', 'category']} options={expenseListOptions} setOptions={setExpenseListOptions}/>  
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

export function List(
    {
        expenseListData
    } :
     {
        expenseListData: expenseDataType[]
     }
) {

    const [filterActive, setFilterActive] = useState(false);
    const [searchBarValue, setSearchBarValue] = useState('');

    const [expenseListOptions, setExpenseListOptions] = useState<sortOptionsType>(
        {
            groupBy: 'item',
            sortBy: 'amount',
            orderBy: 'desc'
        }
    )


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

    const sortedFilteredExpenseListData = sortExpenseList(filteredExpenseListData, expenseListOptions.sortBy, expenseListOptions.orderBy);

    const expenseItemList = sortedFilteredExpenseListData.map((e, i) => {

        const [amountDollars, amountCents] = splitMoney(String(e.amount));

        return (
            <div key={e.budgetPlanID + i + ''} className="w-[95%] h-[4rem] flex flex-col justify-between items-center p-2  rounded-xl">
                
                <div className="w-full h-[3rem] flex flex-col">
                    <div className="w-full h-[2rem] flex items-center relative justify-center">
                        <div className="absolute left-0 flex items-center">
                            <SquareIcon tailwindClass="fa-fw fa-2xs mr-1 text-red-500"/>
                            <p className="inline">{e.item}</p>
                        </div>
                        <div className="absolute right-0">
                            <p className="text-base mt-1">${amountDollars}.<span className="text-xs">{amountCents}</span></p>
                        </div>
                    </div>
                    <div className="w-full h-[1rem] flex items-center relative">

                        <div className="flex gap-x-2 right-0 absolute">
                            <p className="text-xs font-light">{e.category}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    })

    return (

        <div className="w-full min-h-fit bg-dark-surface-1 rounded-2xl border-[1px] border-dark-border flex flex-col justify-center  items-center py-2" >
    
            <div className="w-[100%] flex flex-col items-center">
                
                <div className="w-full flex flex-col justify-center items-center mt-2">

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
                                expenseListOptions={expenseListOptions}
                                setExpenseListOptions={setExpenseListOptions}
                            />
                        }

                        <ExpenseSearchBar searchInputHandler={searchInputHandler}/>

                    </div>

                    
                    {/*  border-dark-border border-2 divide-y-2 divide-dark-border */}
                    <div className="flex flex-col justify-center  items-center w-[95%] gap-y-2"> 
                        {expenseItemList}
                    </div>
                    
                </div>
            
            </div>
        </div>
    )

}

export function Empty() {
    return (

        <div className="w-[90%] min-h-fit bg-dark-surface-1 rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center my-4">
            
            <div className="w-[100%] flex flex-col items-center">

                <div className="w-full flex flex-col justify-center items-center mt-2 p-5">
                    <h1 className="text-xl mb-4">EMPTY</h1>
                    <p className="text-sm font-thin">Add an item by clicking the add button.</p>
                </div>
            
            </div>
        </div>
        
    )
}