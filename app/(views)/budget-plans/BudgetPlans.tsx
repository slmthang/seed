

// modules
import BudgetPlanCard from '@/app/ui-components/BudgetPlanCard';

export default function BudgetPlan() {


    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] relative">
            
            <div className="w-screen min-h-[100%] border-t-[1px] border-dark gap-y-[1rem] relative pt-[1rem] pb-[6rem] flex flex-col  items-center border-t-[1px] border-dark">
                <BudgetPlanCard budget="4000.00" expense="3000.00" balance="1000.00" budgetPlanId="4803849" cardName="Weekly Budget Plan" isDefault={true} isShared={true} />
                <BudgetPlanCard budget="3000.00" expense="1500.00" balance="1500.00" budgetPlanId="sdflkj230"  cardName="Roadtrip Budget Plan" />
                <BudgetPlanCard budget="1000.00" expense="300.00" balance="700.00" budgetPlanId="sdfjlk983"  cardName="Monthly Budget Plan"  isShared={true} />
            </div>
            
        </div>

    )
}