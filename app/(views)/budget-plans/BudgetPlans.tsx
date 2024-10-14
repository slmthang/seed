
'use client'
// modules
import BudgetPlanCard from '@/app/ui-components/BudgetPlanCard';
import { AddButtonIcon } from "@/app/ui-components/Icons"
import AddBudgetPlanForm from './AddBudgetPlanForm';
import { useState } from 'react';
import isEmptyExpensesCard from '@/app/ui-components/IsEmptyExpensesCard';
import IsEmptyExpensesCard from '@/app/ui-components/IsEmptyExpensesCard';

export default function BudgetPlans(
    {budgetPlans} : { 
        budgetPlans: {
            id: number;
            userId: string;
            budgetPlanName: string;
            budget: string;
            expense: string;
            balance: string;
            createdAt: Date;
        }[] 
    }
) {

    const BudgetPlanCards = budgetPlans.map( item => {
        return <BudgetPlanCard key={item.id + '' + item.createdAt} budget={item.budget} expense={item.expense} balance={item.balance} budgetPlanId={item.id + ''} cardName={item.budgetPlanName} /> 
    })

    const [formActive, setFormActive] = useState<Boolean>(false);

    return (
        <>
            {formActive && <AddBudgetPlanForm toggleForm={setFormActive}/>}

            <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] relative">
                
                <div className="w-screen min-h-[100%] border-t-[1px] border-dark gap-y-[1rem] relative pt-[1rem] pb-[6rem] flex flex-col  items-center border-t-[1px] border-dark">
                    {/* <BudgetPlanCard budget="4000.00" expense="3000.00" balance="1000.00" budgetPlanId="4803849" cardName="Weekly Budget Plan" isDefault={true} isShared={true} />
                    <BudgetPlanCard budget="3000.00" expense="1500.00" balance="1500.00" budgetPlanId="sdflkj230"  cardName="Roadtrip Budget Plan" />
                    <BudgetPlanCard budget="1000.00" expense="300.00" balance="700.00" budgetPlanId="sdfjlk983"  cardName="Monthly Budget Plan"  isShared={true} /> */}
                    {/* {BudgetPlanCards} */}

                    {
                        budgetPlans.length >= 1 ?
                        
                        (
                            BudgetPlanCards
                        ) :

                        (
                            <div className="w-[100%] flex flex-col items-center p-5">
                                <h1 className="text-xl">EMPTY</h1>
                                <p className="text-sm font-thin">Add a budget plan by clicking the add button.</p>
                            </div>
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