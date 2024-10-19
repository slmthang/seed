
/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// Remote
import { useState } from "react";
import Link from "next/link";

// Local
import ExpenseList from "@/app/ui/views/budget-plans/id/ExpenseList";
import BudgetPlanAtGlance from '@/app/ui/views/budget-plans/id/BudgetPlanAtGlance'
import { BackButtonIcon, MeatBallIcon, AddButtonIcon } from "@/app/ui/Icons";
import { AddExpenseForm } from "@/app/ui/views/budget-plans/id/AddExpenseForm";
import EmptyExpenseList from "./EmptyExpenseList";



/* ########################################### Budget Plan ########################################### */


export function BudgetPlanHeader(
    {
        budgetPlanName
    } : 
    {
        budgetPlanName: string
    }
) {
    return (
        <div className="w-[90%] h-[3rem] mb-[1rem] flex items-center justify-center relative bg-green-600">
            <Link href='/budget-plans'>
                <div className="h-full flex items-center justify-center">
                    <BackButtonIcon tailwindClass="absolute left-[0px] stroke-2"/>
                </div>
            </Link>
            <div className="h-full flex items-center justify-center">
                <p>{budgetPlanName}</p>
            </div>
            <div className="h-full flex items-center justify-center">
                <MeatBallIcon tailwindClass="absolute right-[0px] stroke-1"/>
                <div className="w-[15rem] h-[10rem] bg-blue-500 absolute right-[0px] bottom-[-10rem] z-20">

                </div>
            </div>
        </div>
    )
}

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
                    
                    <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center my-4">
    
                        <div className="w-[100%] flex flex-col items-center">
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
                    </div>
                        
                    
                </div>

                {/* Add Button for Add Expense Form */}
                <div onClick={() => setFormActive(prev => !prev)}>
                    <AddButtonIcon tailwindClass='fill-light z-10 fixed bottom-20 right-4 size-12'/>
                </div>
                
            </div>
        </>

    )
}