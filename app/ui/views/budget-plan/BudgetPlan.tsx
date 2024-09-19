
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';
import { useContext } from "react";

import { VictoryPie } from "victory";

import OverviewCard from "../../components/OverviewCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
// modules (local)
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import { budgetPlanIncomeType, budgetPlanExpenseListType } from "../../components/definitions";

import DisplayChart from "../../components/DisplayChart";
import { calculateMoney, calculateTotalGeneric } from "@/app/lib/utils";
import { AppDataContext } from "@/app/lib/contexts";
import SingleOverview from "../../components/SingleOverview";
import TrioOverView from '@/app/ui/components/TrioOverview'
import Tabs from "../../components/Tabs";

export default function BudgetPlan() {

    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    let categories = ['housing', 'trasportation', 'food', 'utilities', 'insurance', 'personal', 'debt', 'savings', 'others']

    let costByCategory = {
        'housing': [],
        'trasportation': [],
        'food': [],
        'utilities': [],
        'insurance': [],
        'personal': [],
        'debt': [],
        'savings': [],
        'others': [],
    };

    let food : string[]= [];
    let utilities : string[]=[];
    let insurance : string[]=[];
    let debt : string[] = [];

    AppData.budgetPlan.expenseList.filter((e) => {
        if (e.category === 'food') {
            food.push(e.amount)
        } else if (e.category === 'utilities') {
            utilities.push(e.amount)
        } else if (e.category === 'insurance') {
            insurance.push(e.amount)
        } else if (e.category === 'debt') {
            debt.push(e.amount)
        }
    })

    let foodTotal : {x: string, y: number} = { x: 'food', y: +calculateTotalGeneric(food)}
    let utilitiesTotal : {x: string, y: number} = { x: 'utilities', y: +calculateTotalGeneric(utilities) }
    let insuranceTotal : {x: string, y: number} = { x: 'insurance', y: +calculateTotalGeneric(insurance) }
    let debtTotal : {x: string, y: number} = { x: 'debt' , y: +calculateTotalGeneric(debt)}

    // { x: 'Group A', value: 400 },

    let pieData = [foodTotal, utilitiesTotal, insuranceTotal, debtTotal]
    console.log(pieData)

    return (
        <div className="h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] w-screen overflow-y-scroll flex flex-col items-center gap-y-2">
            {/* <TrioOverView pageType="budget-plan" B={AppData.budgetPlan.balance} I={AppData.budgetPlan.budget} E={AppData.budgetPlan.expense}/> */}
            {/* <SingleOverview pageType="budget-plan" B={AppData.budgetPlan.balance}/> */}
            
            <div className="w-screen rounded-t-2xl flex flex-col items-center bg-darker pb-[4rem] relative mt-[5.5rem] pt-[5.5rem]">
                <div className="w-[90%] h-[9rem] bg-darker absolute top-[-4.5rem] rounded-2xl border-[1px] border-dark">
                    <div className="w-full h-[3rem] flex p-2">
                        <div className="w-[50%] h-[100%] flex items-center"> 
                            <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                            <p className="inline text-base font-extralight">
                                Income
                            </p>
                        </div>
                        <div className="w-[50%] h-[100%] flex items-center justify-end">
                            <p className="text-xl mt-1">$199.<span className="text-xs">00</span></p>
                        </div>
                    </div>
                    <div className="w-full h-[3rem] flex p-2">
                        <div className="w-[50%] h-[100%] flex items-center"> 
                            <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-red-500 mr-1"/>
                            <p className="inline text-base font-extralight">
                                Expense
                            </p>
                        </div>
                        <div className="w-[50%] h-[100%] flex items-center justify-end">
                            <p className="text-xl mt-1">$199.<span className="text-xs">00</span></p>
                        </div>
                    </div>
                    <div className="w-full h-[3rem] flex p-2">
                        <div className="w-[50%] h-[100%] flex items-center"> 
                            <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-blue-500 mr-1"/>
                            <p className="inline text-base font-extralight">
                                Balance
                            </p>
                        </div>
                        <div className="w-[50%] h-[100%] flex items-center justify-end">
                            <p className="text-xl mt-1">$199.<span className="text-xs">00</span></p>
                        </div>
                    </div>
                </div>
                <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                <div className="w-[90%] flex flex-col items-center pt-6">
                    {isDefaultTab ? 
                        <Items data={AppData.budgetPlan.expenseList}/> : <DisplayChart pageType="budget-plan" pieData={pieData}/>
                    }
                </div>
            </div>
        </div>

    )
}