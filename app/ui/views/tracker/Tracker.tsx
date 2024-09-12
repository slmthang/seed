
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';

// local
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import OptionsSelector from "../../components/OptionsSelector";

import { trackerItemsListType } from "../../components/definitions";
import User from "@/app/lib/User";
import { calculateMoney } from "@/app/lib/utils";
import DisplayChart from "../../components/DisplayChart";

export default function Tracker(
    {itemsList} : {itemsList: trackerItemsListType}
) {

    // expense page is isDefault = true
    const [isDefault, setIsDefault] = useState<Boolean>(true);

    let incomeList = itemsList.filter(e => !e.isExpense);
    let expenseList = itemsList.filter(e => e.isExpense);

    let expense = User.getTotalExpense(expenseList);
    let income = User.getTotalIncome(incomeList)

    let balance = calculateMoney(income, expense, 'subtract');

    return (
        <AppLayout data={{
            pageType : 'tracker',
            income: income,
            expense: expense,
            balance: balance
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
                        <Items data={itemsList} pageType="tracker"/> : <DisplayChart />
                    }
                </div>
        </AppLayout>
    )
}