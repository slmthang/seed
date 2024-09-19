
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
export default function Savings() {

    // expense page is isDefault = true
    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);


    return (
        // <AppLayout data={{
        //     pageType: 'savings',
        //     expense: AppData.savings.expense
        // }} >
        //     <nav className="w-[16.5rem] h-[2.25rem] flex items-center justify-around rounded-2xl bg-darkest">

        //         <button className={ clsx(

        //             "w-[8rem] h-[2rem] rounded-2xl",
        //             {
        //                 'bg-dark': isDefault
        //             }
        //         )} 
                
        //         onClick={() => setIsDefault(true)}
        //         >
        //             <p>Expenses</p>
        //         </button>

        //         <button className={ clsx(

        //             "w-[8rem] h-[2rem] rounded-2xl",
        //             {
        //                 'bg-dark': !isDefault
        //             }
        //         )} 
                
        //         onClick={() => setIsDefault(false)}
        //         >
        //             <p>Stats</p>
        //         </button>
        //     </nav>
        //         <div className="w-[90%] flex flex-col items-center pt-6">
        //             {isDefault ? 
        //                 <Items data={AppData.savings.expenseList}/> : <DisplayChart pageType="savings"/>
        //             }
        //         </div>
        // </AppLayout>
        <div className="h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] w-screen overflow-y-scroll flex flex-col items-center gap-y-4">
            <SingleOverview  pageType="savings" B={AppData.savings.expense} />
            <div className="w-screen rounded-t-2xl flex flex-col items-center bg-darker pb-[4rem]">
                <Tabs tabOptions={['Items', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                <div className="w-[90%] flex flex-col items-center pt-6">
                    {isDefaultTab ? 
                        <Items data={AppData.savings.expenseList} pageType="savings"/> : <DisplayChart pageType="savings"/>
                    }
                </div>
            </div>
        </div>
    )
}