
'use client'

// modules
import { useState } from "react";

// local
// import { AppLayout, Item, OptionsSelector, TabBar } from "../../components/AppLayout";
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import TabBarOptions from "../../components/TabBarOptions";
import { subscriptionsExpenseListType } from "../../components/definitions";
import DisplayChart from "../../components/DisplayChart";
import { calculateTotal } from "@/app/lib/utils";

import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";
import SingleOverview from "../../components/SingleOverview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import Tabs from "../../components/Tabs";
import { calculatePieData } from "@/app/lib/utils";

export default function Subscriptions() {

    // expense page is isDefault = true
    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    let pieData = calculatePieData(AppData.subscriptions.expenseList);

    return (
        <div className=" w-screen h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] overflow-y-scroll pt-[2rem]">
            
            <div className="w-screen min-h-[100%] bg-darker relative mt-[3.5rem] pt-[4.5rem] pb-[4rem] flex flex-col justify-center items-center border-t-[1px] border-dark">
                <SingleOverview pageType="subscriptions" B={AppData.subscriptions.expense}/>
                
                <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center ">
                    <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                    <div className="w-[100%] flex flex-col items-center pt-6">
                        {isDefaultTab ? 
                            <Items pageType="subscriptions" data={AppData.subscriptions.expenseList}/> : 
                            <DisplayChart pageType="subscriptions" pieData={pieData}/>
                        }
                    </div>
                </div>
                    
                
            </div>
            
        </div>
    )
}