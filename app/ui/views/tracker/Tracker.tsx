
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

export default function Tracker() {

    // expense page is isDefault = true
    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    return (
        <div className="h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] w-screen overflow-y-scroll flex flex-col items-center gap-y-4">
            <TrioOverView  pageType="tracker" B={AppData.tracker.balance} I={AppData.tracker.income} E={AppData.tracker.expense}/>
            <div className="w-screen rounded-t-2xl flex flex-col items-center bg-darker pb-[4rem]">
                <Tabs tabOptions={['Expenses', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                <div className="w-[90%] flex flex-col items-center pt-6">
                    {isDefaultTab ? 
                        <Items data={AppData.tracker.itemsList} pageType="tracker"/> : <DisplayChart pageType="tracker"/>
                    }
                </div>
            </div>
        </div>
    )
}