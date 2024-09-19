
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';

// local
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";

import TrioOverView from '@/app/components/TrioOverview'
import Tabs from "../../components/Tabs";

import { trackerItemsListType } from "../../components/definitions";
import DisplayChart from "../../components/DisplayChart";
import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";
import { calculatePieData } from "@/app/lib/utils";

import OptionsSelector from "../../components/OptionsSelector";
import { AddButtonIcon } from "../../components/Icons";

export default function Tracker() {

    // expense page is isDefault = true
    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    let pieData = calculatePieData(AppData.tracker.itemsList);

    return (
        <div  className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[5rem]">
            
            <AddButtonIcon tailwindClass=" !size-11 fill-light stroke-light fixed bottom-[4.25rem] right-[1rem] z-10"/>

            <div className="w-screen min-h-[100%] bg-darker relative mt-[5rem] pt-[5rem] pb-[8rem] flex flex-col justify-center items-center border-t-[1px] border-dark">
                <TrioOverView pageType="tracker" B={AppData.tracker.balance} I={AppData.tracker.income} E={AppData.tracker.expense}/>
                
                <OptionsSelector data={['day', 'week', 'month', 'year']}/>

                <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center ">
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