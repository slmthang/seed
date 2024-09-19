
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';

// local
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";

import TrioOverView from '@/app/ui/components/TrioOverview'
import Tabs from "../../components/Tabs";

import { trackerItemsListType } from "../../components/definitions";
import DisplayChart from "../../components/DisplayChart";
import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";
import { calculatePieData } from "@/app/lib/utils";

import OptionsSelector from "../../components/OptionsSelector";

export default function Tracker() {

    // expense page is isDefault = true
    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    let pieData = calculatePieData(AppData.tracker.itemsList);

    return (
        <div className=" w-screen h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] overflow-y-scroll pt-[2rem]">
            
            <div className="w-screen min-h-[100%] bg-darker relative mt-[5rem] pt-[6rem] pb-[4rem] flex flex-col justify-center items-center">
                <TrioOverView pageType="tracker" B={AppData.tracker.balance} I={AppData.tracker.income} E={AppData.tracker.expense}/>
                
                <OptionsSelector data={['day', 'week', 'month', 'year']}/>

                <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
                    <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                    <div className="w-[100%] flex flex-col items-center pt-6">
                        {isDefaultTab ? 
                            <Items pageType="tracker" data={AppData.tracker.itemsList}/> : 
                            <DisplayChart pageType="tracker" pieData={pieData}/>
                        }
                    </div>
                </div>
                    
                
            </div>
            
        </div>
    )
}