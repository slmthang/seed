
'use client'

// modules
import { useState } from "react";
import Items from "@/app/ui-components/Items";
import Link from "next/link";
import TrioOverView from '@/app/ui-components/TrioOverview'
import { BackButtonIcon, MeatBallIcon } from "@/app/ui-components/Icons";
import { AddExpenseForm } from "@/app/ui-components/Forms";
import { AddButtonIcon } from "@/app/ui-components/Icons";

export default function BudgetPlan(
    {budgetPlanId, budgetPlanName, budget, expense, balance, expenses} : 
    {
        budgetPlanId: string,
        budgetPlanName: string, 
        budget: string, 
        expense: string, 
        balance: string, 
        expenses: {
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
            {formActive && <AddExpenseForm totalExpense={expense} totalBalance={balance} budgetPlanId={budgetPlanId} toggleForm={setFormActive}/>}
            
            <div className=" w-screen h-dvh h-dvh overflow-y-scroll z-20 fixed top-[0px] bg-darker ">
                <div className="w-screen backdrop-blur-md flex items-center justify-center">
                    <div className="w-[90%] h-[5rem] flex items-center justify-center relative">
                        <Link href='/budget-plans'>
                            <div className="h-full flex items-center justify-center">
                                <BackButtonIcon tailwindClass="absolute left-[0px] stroke-2"/>
                            </div>
                        </Link>
                        <div className="h-full flex items-center justify-center">
                            <p>{budgetPlanName}</p>
                        </div>
                        <div className="h-full flex items-center justify-center">
                            <MeatBallIcon tailwindClass="absolute right-[0px] stroke-2"/>
                        </div>
                    </div>
                </div>
                <div className="w-screen min-h-[100%]  relative flex flex-col items-center  border-dark">
                    <TrioOverView income={budget} expense={expense} balance={balance} pageType="budget-plan"/>
                    
                    <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center my-4">
    
                        {
                            expenses.length <= 0 ?

                            (
                                <div className="w-[100%] flex flex-col items-center p-5">
                                    <h1 className="text-xl">EMPTY</h1>
                                    <p className="text-sm font-thin">Add an item by clicking the add button.</p>
                                </div>
                            ) :

                            (
                                <div className="w-[100%] flex flex-col items-center">
                                    <Items expenses={expenses}/>
                                </div>
                            )
                        }
                    </div>
                        
                    
                </div>

                <div onClick={() => setFormActive(prev => !prev)}>
                    <AddButtonIcon tailwindClass='fill-light z-10 fixed bottom-20 right-4 size-12'/>
                </div>
                
            </div>
        </>

    )
}