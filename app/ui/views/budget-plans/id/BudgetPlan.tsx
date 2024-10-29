
/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// remote
import { useState } from "react";

// local
import ExpenseList from "@/app/ui/views/budget-plans/id/components/ExpenseList";
import BudgetPlanAtGlance from '@/app/ui/views/budget-plans/id/components/BudgetPlanAtGlance'
import { AddButtonIcon } from "@/app/ui/Icons";
import { AddExpenseForm } from "@/app/ui/views/budget-plans/id/components/AddExpenseForm";
import EmptyExpenseList from "./components/EmptyExpenseList";
import BudgetPlanHeader from "./components/BudgetPlanHeader";


/* ########################################### Budget Plan ########################################### */

export default function BudgetPlan(
    {budgetPlanId, budgetPlanName, totalBudget, totalExpense, totalBalance, expenseList} : 
    {
        budgetPlanId: string,
        budgetPlanName: string, 
        totalBudget: string, 
        totalExpense: string, 
        totalBalance: string, 
        expenseList: {
            budgetPlanID: number;
            item: string;
            category: string;
            amount: string;
            createdAt: Date;
        }[]
    }   
) {

    const [formActive, setFormActive] = useState<Boolean>(false);

    return (

        <>
            {/* Form to add expense */}
            {formActive && <AddExpenseForm totalExpense={totalExpense} totalBalance={totalBalance} budgetPlanId={budgetPlanId} toggleForm={setFormActive}/>}
            
            {/* Budget Plan */}
            <div className=" w-screen h-dvh h-dvh overflow-y-scroll z-20 fixed top-[0px] bg-darker ">

                <div className="w-screen flex items-center justify-center">
                    <BudgetPlanHeader budgetPlanName={budgetPlanName}/>
                </div>

                <div className="w-screen min-h-[100%]  relative flex flex-col items-center  border-dark">
                    <BudgetPlanAtGlance totalBudget={totalBudget} totalExpense={totalExpense} totalBalance={totalBalance} />
                    
                    {
                        expenseList.length <= 0 ?

                        (
                            <EmptyExpenseList />
                        ) :

                        (
                            <ExpenseList expenseList={expenseList}/>
                        )
                    }
                        
                </div>

                {/* Add Button for Add Expense Form */}
                <div onClick={() => setFormActive(prev => !prev)}>
                    <AddButtonIcon />
                </div>
                
            </div>
        </>

    )
}
