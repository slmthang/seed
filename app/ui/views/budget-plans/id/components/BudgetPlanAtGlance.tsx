
/* ########################################### Modules ########################################### */

// local
import { splitMoney } from "@/app/lib/utils"
import { SquareIcon } from "@/app/ui/Icons";

/* ########################################### BudgetPlanAtGlance ########################################### */

export default function BudgetPlanAtGlance(
    { 
        totalBudget, 
        totalExpense, 
        totalBalance
    } : {
        totalBudget: string, 
        totalExpense: string, 
        totalBalance: string
    }
) {

    const [ totalBudgetDollar, totalBudgetCents ] = splitMoney(totalBudget);
    const [ totalExpenseDollars, totalExpenseCents ] = splitMoney(totalExpense);
    const [ totalBalanceDollars, totalBalanceCents ] = splitMoney(totalBalance);

    return (
        <div className="w-full h-[10rem] bg-dark-surface-1 border-[1px] border-dark-border rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-green-500 mr-1"/>
                    <p className="inline">
                        Budget
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-base mt-1">${totalBudgetDollar}.<span className="text-xs">{totalBudgetCents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-red-500 mr-1"/>
                    <p className="inline">
                        Expense
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-base mt-1">${totalExpenseDollars}.<span className="text-xs">{totalExpenseCents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-blue-500 mr-1"/>
                    <p className="inline">
                        Balance
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-base mt-1">${totalBalanceDollars}.<span className="text-xs">{totalBalanceCents}</span></p>
                </div>
            </div>
        </div>
    )
}