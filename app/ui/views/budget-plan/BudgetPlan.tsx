
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';
import { useContext } from "react";

// modules (local)
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import { budgetPlanIncomeType, budgetPlanExpenseListType } from "../../components/definitions";

import DisplayChart from "../../components/DisplayChart";
import { calculateMoney, calculateTotal } from "@/app/lib/utils";
import { AppDataContext } from "@/app/lib/contexts";


export default function BudgetPlan() {

    const [isDefault, setIsDefault] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    return (
        <AppLayout data={{
            pageType : 'budget-plan',
            budget: AppData.budgetPlan.budget,
            expense: AppData.budgetPlan.expense,
            balance: AppData.budgetPlan.balance
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
                    {/* <h1>user</h1> */}
                    {isDefault ? 
                        <Items data={AppData.budgetPlan.expenseList}/> : <DisplayChart />
                    }
                </div>
        </AppLayout>
    )
}