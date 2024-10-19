
/* ########################################### CLIENT COMPONENT ########################################### */

'use client'

/* ########################################### MODULES ########################################### */

// remote
import { useState } from 'react';

// local
import BudgetPlanCard from '@/app/ui/views/budget-plans/BudgetPlanCard';
import { AddButtonIcon } from "@/app/ui/Icons"
import AddBudgetPlanForm from '@/app/ui/views/budget-plans/AddBudgetPlanForm';
import EmptyBudgetPlans from '@/app/ui/views/budget-plans/EmptyBudgetPlans';
import { budgetPlanType } from '@/app/lib/definitions';

import BudgetPlan from './id/BudgetPlan';


/* ########################################### BudgetPlanList ########################################### */

export default function BudgetPlanList(
    { budgetPlanList } : { 
        budgetPlanList : Array<budgetPlanType>
    }
) {

    const BudgetPlanCards = budgetPlanList.map( item => {
        return <BudgetPlanCard 
                    key={item.id + '' + item.createdAt} 
                    totalBudget={item.totalBudget} 
                    totalExpense={item.totalExpense} 
                    totalBalance={item.totalBalance} 
                    budgetPlanId={item.id + ''} 
                    cardName={item.budgetPlanName}
                /> 
    })

    const [formActive, setFormActive] = useState<Boolean>(false);

    return (
        <>
            {formActive && <AddBudgetPlanForm toggleForm={setFormActive}/>}

            <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] relative">
                
                <div className="w-screen min-h-[100%] border-t-[1px] border-dark gap-y-[1rem] relative pt-[1rem] pb-[6rem] flex flex-col  items-center border-t-[1px] border-dark">

                    {
                        budgetPlanList.length >= 1 ?
                        
                        (
                            BudgetPlanCards
                        ) :

                        (
                            <EmptyBudgetPlans />
                        )
                    }
                    
                </div>

                <div onClick={() => setFormActive(prev => !prev)}>
                    <AddButtonIcon tailwindClass='fill-light z-10 fixed bottom-20 right-4 size-12'/>
                </div>

            </div>
        </>
        

    )
}