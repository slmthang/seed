
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


export default function Savings() {

    // expense page is isDefault = true
    const [isDefault, setIsDefault] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);


    return (
        <AppLayout data={{
            pageType: 'savings',
            expense: AppData.savings.expense
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
                        <Items data={AppData.savings.expenseList}/> : <DisplayChart />
                    }
                </div>
        </AppLayout>
    )
}