
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';

// local
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";

import { trackerItemsListType } from "../../components/definitions";
import DisplayChart from "../../components/DisplayChart";
import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";

export default function Tracker() {

    // expense page is isDefault = true
    const [isDefault, setIsDefault] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    return (
        <AppLayout data={{
            pageType : 'tracker',
            budget: AppData.tracker.income,
            expense: AppData.tracker.expense,
            balance: AppData.tracker.balance
        }} >
            <nav className="w-[16.5rem] h-[2.25rem] flex items-center justify-around rounded-2xl bg-darkest">

                <button className={ clsx(

                    "w-[8rem] h-[2rem] rounded-2xl",
                    {
                        'bg-dark': isDefault
                    }
                )} 
                
                onClick={() => setIsDefault(true)}
                >
                    <p>Expenses</p>
                </button>

                <button className={ clsx(

                    "w-[8rem] h-[2rem] rounded-2xl",
                    {
                        'bg-dark': !isDefault
                    }
                )} 
                
                onClick={() => setIsDefault(false)}
                >
                    <p>Stats</p>
                </button>
            </nav>
                <div className="w-[90%] flex flex-col items-center pt-6">
                    {isDefault ? 
                        <Items data={AppData.tracker.itemsList} pageType="tracker"/> : <DisplayChart />
                    }
                </div>
        </AppLayout>
    )
}