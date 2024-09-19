
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';

// modules (local)
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import DisplayChart from "../../components/DisplayChart";
import { savingsExpenseListType } from "../../components/definitions";

import { calculateTotal } from "@/app/lib/utils";
import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";
import SingleOverview from "../../components/SingleOverview";
import Tabs from "../../components/Tabs";

import { calculatePieData } from "@/app/lib/utils";

import OptionsSelector from "../../components/OptionsSelector";
export default function Savings() {

    // expense page is isDefault = true
    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    let pieData = calculatePieData(AppData.savings.expenseList);

    return (
        <div className=" w-screen h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] overflow-y-scroll pt-[2rem]">
            
            <div className="w-screen min-h-[100%] bg-darker relative mt-[3.5rem] pt-[3.5rem] pb-[4rem] flex flex-col justify-center items-center border-t-[1px] border-dark">
                <SingleOverview pageType="savings" B={AppData.savings.expense}/>

                <OptionsSelector data={['day', 'week', 'month', 'year']}/>
                
                <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center ">
                    <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                    <div className="w-[100%] flex flex-col items-center pt-6">
                        {isDefaultTab ? 
                            <Items pageType="savings" data={AppData.savings.expenseList}/> : 
                            <DisplayChart pageType="savings" pieData={pieData}/>
                        }
                    </div>
                </div>
                    
                
            </div>
            
        </div>
    )
}