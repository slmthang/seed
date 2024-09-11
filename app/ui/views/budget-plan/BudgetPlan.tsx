
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';
import { useContext } from "react";

// modules (local)
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import { budgetPlanIncomeType, budgetPlanExpenseListType } from "../../components/definitions";
// import { UserContext } from "@/app/lib/context";

import DisplayChart from "../../components/DisplayChart";


export default function BudgetPlan(
    {data} : {data : { income: budgetPlanIncomeType, expenses: budgetPlanExpenseListType}}
) {

    // expense page is isDefault = true
    const [isDefault, setIsDefault] = useState<Boolean>(true);

    // const user = useContext(UserContext);

    return (
        <AppLayout data={{
            pageType : 'budget-plan',
            income: data.income
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
                        <Items data={data.expenses}/> : <DisplayChart />
                    }
                </div>
        </AppLayout>
    )
}