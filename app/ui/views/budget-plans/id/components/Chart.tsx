/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// remote
import { useState, SetStateAction, Dispatch } from "react";
import { VictoryPie, VictoryTheme } from "victory";

// local
import { categoriedExpenseType, expenseDataType, pieDataType, sortOptionsType } from "@/app/lib/definitions";
import { pieExpenseList, sortCategorizedList, splitMoney, categorizeExpenseList } from "@/app/lib/utils";
import { SquareIcon, SearchIcon, FilterIcon, SortByIcon, OrderByIcon, GroupByIcon, TrashIcon } from "@/app/ui/Icons";
import DropDownOption from "../../../components/DropDownOption";

export default function Main(
    {
        expenseListData
    } : {
        expenseListData: expenseDataType[]
    }
) {
    return (
        <div className="w-full flex flex-col bg-dark-surface-1 border-[1px] border-dark-border rounded-xl gap-y-[1rem]">
            <Chart 
                expenseListData={expenseListData}
            />
            <BreakDown
                categorizedExpenseList={categorizeExpenseList(expenseListData)}
            />
        </div>
    )
}

function Chart(
    {
        expenseListData
    } : 
    {
        expenseListData: expenseDataType[]
    }
) {
    return (

        <div className="w-full py-6 px-2">

            <div className="w-full h-[15rem]">
                <VictoryPie
                    style={{
                        data: {
                            fill: ({datum}) => datum.fill
                        },
                        labels: {
                            fontSize: 20,
                            fill: "#dadada",
                        },
                    }}
                    data={pieExpenseList(expenseListData)}
                />
            </div>
        
        </div>

    )
}

function BreakDownSideOptions(
    {
        breakDownOptions,
        setBreakDownOptions
    } : 
    {
        breakDownOptions: sortOptionsType,
        setBreakDownOptions: Dispatch<SetStateAction<sortOptionsType>>
    }
) {

    return (
        <div className="absolute right-0 w-[14rem] z-10 bg-dark-surface-2 rounded-xl px-4 py-2">
            <DropDownOption optionName="Sort By" OptionIcon={SortByIcon} optionType="sortBy" optionValues={['name', 'amount']} options={breakDownOptions} setOptions={setBreakDownOptions}/>
            <DropDownOption optionName="Order By" OptionIcon={OrderByIcon} optionType="orderBy" optionValues={['asc', 'desc']} options={breakDownOptions} setOptions={setBreakDownOptions}/>
            <DropDownOption optionName="Group By" OptionIcon={GroupByIcon} optionType="groupBy" optionValues={['item', 'category']} options={breakDownOptions} setOptions={setBreakDownOptions}/>  
        </div>
    )
}

function BreakDown(
    {
        categorizedExpenseList
    }:
    {
        categorizedExpenseList: categoriedExpenseType[]
    }
) {

    const [filterActive, setFilterActive] = useState(false);

    const [breakDownOptions, setBreakDownOptions] = useState<sortOptionsType>(
        {
            sortBy: 'amount',
            orderBy: 'desc'
        }
    )

    const sortedCategorizedExpenseList = sortCategorizedList(categorizedExpenseList, breakDownOptions.sortBy, breakDownOptions.orderBy);

    const categoriedExpenseCardList = sortedCategorizedExpenseList.map((e, i) => {

        console.log(e.amount)
        const [amountDollars, amountCents] = splitMoney(String(e.amount));

        return (
            <div key={e.category + i + ''} className="w-[95%] h-[4rem] flex flex-col justify-between items-center p-2  rounded-xl">
                
                <div className="w-full h-[3rem] flex flex-col">
                    <div className="w-full h-[2rem] flex items-center relative justify-center">
                        <div className="absolute left-0 flex items-center">
                            <SquareIcon tailwindClass="fa-fw fa-2xs mr-1 text-red-500"/>
                            <p className="inline">{e.category}</p>
                        </div>
                        <div className="absolute right-0">
                            <p className="text-base mt-1">${amountDollars}.<span className="text-xs">{amountCents ? amountCents : '00'}</span></p>
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
        <div className="w-full min-h-fit flex flex-col justify-center  items-center py-2" >
    
            <div className="w-[100%] flex flex-col items-center">
                
                <div className="w-full flex flex-col justify-center items-center mt-2">

                    <div className="w-[90%] min-h-[3rem] mb-[1rem] relative">
                        <div className="w-full min-h-[3rem] flex items-center justify-center">
                            <div className="w-full flex items-center justify-begin pl-[0.5rem] h-[2rem]">
                                <p className="text-xl font-bold">Break Down</p>
                            </div>

                            <div className="flex gap-x-[1rem] absolute right-[0.5rem]">
                                <div onClick={() => setFilterActive(prev => !prev)} className="flex items-center justify-begin h-[2rem]">
                                    <FilterIcon/>
                                </div>
                            </div>
                            
                            
                        </div>

                        {
                            filterActive &&

                            <BreakDownSideOptions 
                                breakDownOptions={breakDownOptions}
                                setBreakDownOptions={setBreakDownOptions}
                            />
                        }

                    </div>

                    
                    {/*  border-dark-border border-2 divide-y-2 divide-dark-border */}
                    <div className="flex flex-col justify-center  items-center w-[95%] gap-y-2"> 
                        {/* {expenseItemList} */}
                        {categoriedExpenseCardList}
                    </div>
                    
                </div>
            
            </div>
        </div>
    )
}
