
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
import { calculateMoney, calculatePieData, calculateTotalGeneric } from "@/app/lib/utils";
import { AppDataContext } from "@/app/lib/contexts";
import SingleOverview from "../../components/SingleOverview";
import TrioOverView from '@/app/components/TrioOverview'
import Tabs from "../../components/Tabs";
import BudgetPlanCard from '@/app/components/BudgetPlanCard';
import BudgetPlanX from "./one/BudgetPlan";

export default function BudgetPlan() {

    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    let pieData = calculatePieData(AppData.budgetPlan.expenseList);

    const [selectedPlan, setSelectedPlan] = useState<Boolean>(false);

    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] relative">

            { selectedPlan &&  <BudgetPlanX budgetPlanData={AppData} setSelectedPlan={setSelectedPlan}/> }
            
            <div className="w-screen min-h-[100%] border-t-[1px] border-dark gap-y-[1rem] relative pt-[1rem] pb-[6rem] flex flex-col  items-center border-t-[1px] border-dark">
                <BudgetPlanCard setSelectedPlan={setSelectedPlan} cardName="Weekly Budget Plan" isDefault={true} isShared={true} pathName="/budget-plans/one" Balance={AppData.tracker.balance} Budget={AppData.tracker.income} Expense={AppData.tracker.expense}/>
                <BudgetPlanCard setSelectedPlan={setSelectedPlan}  cardName="Roadtrip Budget Plan" pathName="/budget-plans/one" Balance={AppData.tracker.balance} Budget={AppData.tracker.income} Expense={AppData.tracker.expense}/>
                <BudgetPlanCard setSelectedPlan={setSelectedPlan}  cardName="Monthly Budget Plan" pathName="/budget-plans/one" isShared={true} Balance={AppData.tracker.balance} Budget={AppData.tracker.income} Expense={AppData.tracker.expense}/>
            </div>
            
        </div>

    )
}


                // <div className="w-[90%] h-[10rem] bg-darker absolute top-[-4.5rem] rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
                //     <div className="w-full h-[3rem] flex px-6 ">
                //         <div className="w-[50%] h-[100%] flex items-center"> 
                //             <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                //             <p className="inline text-base font-extralight">
                //                 Income
                //             </p>
                //         </div>
                //         <div className="w-[50%] h-[100%] flex items-center justify-end">
                //             <p className="text-xl mt-1">$199.<span className="text-xs">00</span></p>
                //         </div>
                //     </div>
                //     <div className="w-full h-[3rem] flex px-6 ">
                //         <div className="w-[50%] h-[100%] flex items-center"> 
                //             <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-red-500 mr-1"/>
                //             <p className="inline text-base font-extralight">
                //                 Expense
                //             </p>
                //         </div>
                //         <div className="w-[50%] h-[100%] flex items-center justify-end">
                //             <p className="text-xl mt-1">$199.<span className="text-xs">00</span></p>
                //         </div>
                //     </div>
                //     <div className="w-full h-[3rem] flex px-6 ">
                //         <div className="w-[50%] h-[100%] flex items-center"> 
                //             <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-blue-500 mr-1"/>
                //             <p className="inline text-base font-extralight">
                //                 Balance
                //             </p>
                //         </div>
                //         <div className="w-[50%] h-[100%] flex items-center justify-end">
                //             <p className="text-xl mt-1">$199.<span className="text-xs">00</span></p>
                //         </div>
                //     </div>
                // </div>

                
                // {/* <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                //     <div className="w-[90%] flex flex-col items-center pt-6">
                //         {isDefaultTab ? 
                //             <Items data={AppData.budgetPlan.expenseList}/> : <DisplayChart pageType="budget-plan" pieData={pieData}/>
                //         }
                //     </div> */}