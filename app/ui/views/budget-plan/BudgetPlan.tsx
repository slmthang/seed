
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
import User from "@/app/lib/User";
import { calculateMoney } from "@/app/lib/utils";


export default function BudgetPlan(
    {data} : {data : { income: budgetPlanIncomeType, expenseList: budgetPlanExpenseListType}}
) {

    const [isDefault, setIsDefault] = useState<Boolean>(true);

    let income = data.income;
    let expense = User.getTotalExpense(data.expenseList);

    return (
        <AppLayout data={{
            pageType : 'budget-plan',
            income: data.income,
            expense: expense,
            balance: calculateMoney(income, expense, 'subtract')
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
                        <Items data={data.expenseList}/> : <DisplayChart />
                    }
                </div>
        </AppLayout>
    )
}