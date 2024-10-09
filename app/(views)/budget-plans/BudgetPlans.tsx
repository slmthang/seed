
'use client'
// modules
import BudgetPlanCard from '@/app/ui-components/BudgetPlanCard';
import { AddButtonIcon } from "@/app/ui-components/Icons"
import AddBudgePlanForm from './AddBudgePlanForm';
import { useState } from 'react';

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
        return <BudgetPlanCard budget={item.budget} expense={item.expense} balance={item.balance} budgetPlanId={item.id + ''} cardName={item.budgetPlanName} /> 
    })

    const [formActive, setFormActive] = useState<Boolean>(false);

    return (
        <>
            {formActive && <AddBudgePlanForm toggleForm={setFormActive}/>}

            <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] relative">
                
                <div className="w-screen min-h-[100%] border-t-[1px] border-dark gap-y-[1rem] relative pt-[1rem] pb-[6rem] flex flex-col  items-center border-t-[1px] border-dark">
                    {/* <BudgetPlanCard budget="4000.00" expense="3000.00" balance="1000.00" budgetPlanId="4803849" cardName="Weekly Budget Plan" isDefault={true} isShared={true} />
                    <BudgetPlanCard budget="3000.00" expense="1500.00" balance="1500.00" budgetPlanId="sdflkj230"  cardName="Roadtrip Budget Plan" />
                    <BudgetPlanCard budget="1000.00" expense="300.00" balance="700.00" budgetPlanId="sdfjlk983"  cardName="Monthly Budget Plan"  isShared={true} /> */}
                    {BudgetPlanCards}
                </div>

                <div onClick={() => setFormActive(prev => !prev)}>
                    <AddButtonIcon tailwindClass='fill-light z-10 fixed bottom-20 right-4 size-12'/>
                </div>

            </div>
        </>
        

    )
}