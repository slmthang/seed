
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';
import { useContext } from "react";

import { VictoryPie } from "victory";

import OverviewCard from "@/app/components/OverviewCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
// modules (local)
import AppLayout from "@/app/components/AppLayout";
import Items from "@/app/components/Items";
import { budgetPlanIncomeType, budgetPlanExpenseListType, budgetPlanData } from "@/app/components/definitions";

import DisplayChart from "@/app/components/DisplayChart";
import { calculateMoney, calculatePieData, calculateTotalGeneric } from "@/app/lib/utils";
import { AppDataContext } from "@/app/lib/contexts";
import SingleOverview from "@/app/components/SingleOverview";
import TrioOverView from '@/app/components/TrioOverview'
import Tabs from "@/app/components/Tabs";
import { CloseButtonIcon } from "@/app/components/Icons";

export default function BudgetPlan(
    {budgetPlanData, setSelectedPlan} : {budgetPlanData: any, setSelectedPlan: React.Dispatch<React.SetStateAction<Boolean>>}
) {

    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    // const [AppData, AppDataFunction]= useContext(AppDataContext);

    let pieData = calculatePieData(budgetPlanData.budgetPlan.expenseList);

    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll z-20 absolute top-[0px]">
            <div className="w-screen h-[5rem] backdrop-blur-md flex items-center justify-center">
                <div className="w-[90%] h-full flex items-center justify-center relative">
                    <p>Budget Plan A</p>
                    <div onClick={() => setSelectedPlan(prevState => !prevState)}>
                        <CloseButtonIcon tailwindClass="absolute right-[0px] stroke-2"/>
                    </div>
                </div>
            </div>
            <div className="w-screen min-h-[100%] bg-darker relative mt-[5rem] flex flex-col justify-center items-center border-t-[1px] border-dark">
                <TrioOverView pageType="budget-plan" B={budgetPlanData.budgetPlan.balance} I={budgetPlanData.budgetPlan.budget} E={budgetPlanData.budgetPlan.expense}/>
                
                <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
                    <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                    <div className="w-[100%] flex flex-col items-center pt-6">
                        {isDefaultTab ? 
                            <Items pageType="budget-plan" data={budgetPlanData.budgetPlan.expenseList}/> : 
                            <DisplayChart pageType="budget-plan" pieData={pieData}/>
                        }
                    </div>
                </div>
                    
                
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

                
                {/* <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                    <div className="w-[90%] flex flex-col items-center pt-6">
                        {isDefaultTab ? 
                            <Items data={AppData.budgetPlan.expenseList}/> : <DisplayChart pageType="budget-plan" pieData={pieData}/>
                        }
                    </div> */}