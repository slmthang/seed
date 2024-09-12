
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';

// modules (local)
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import OptionsSelector from "../../components/OptionsSelector";
import DisplayChart from "../../components/DisplayChart";
import { savingsExpenseListType } from "../../components/definitions";
import { savingsExpenseListData } from "@/app/lib/placeholder-data";

import User from "@/app/lib/User";
// chart


export default function Savings(
    {data} : {data : savingsExpenseListType}
) {

    // expense page is isDefault = true
    const [isDefault, setIsDefault] = useState<Boolean>(true);

    return (
        <AppLayout data={{
            pageType: 'savings',
            expense: User.getTotalExpense(data)
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
                        <Items data={data}/> : <DisplayChart />
                    }
                </div>
        </AppLayout>
    )
}