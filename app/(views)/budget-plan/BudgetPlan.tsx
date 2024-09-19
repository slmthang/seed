
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

export default function BudgetPlan() {

    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    let pieData = calculatePieData(AppData.budgetPlan.expenseList);

    return (
        <div className=" w-screen h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] overflow-y-scroll pt-[2rem]">
            
            <div className="w-screen min-h-[100%] bg-darker relative mt-[5rem] pt-[6rem] pb-[4rem] flex flex-col justify-center items-center border-t-[1px] border-dark">
                <TrioOverView pageType="budget-plan" B={AppData.budgetPlan.balance} I={AppData.budgetPlan.budget} E={AppData.budgetPlan.expense}/>
                
                <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
                    <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                    <div className="w-[100%] flex flex-col items-center pt-6">
                        {isDefaultTab ? 
                            <Items pageType="budget-plan" data={AppData.budgetPlan.expenseList}/> : 
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