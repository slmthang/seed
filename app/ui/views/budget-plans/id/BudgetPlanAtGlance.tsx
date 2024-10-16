

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import { splitMoney } from "@/app/lib/utils"

export default function TrioOverView(
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
        <div className="w-[90%] h-[10rem] bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                    <p className="inline text-sm font-extralight">
                        Budget
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${totalBudgetDollar}.<span className="text-xs">{totalBudgetCents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-red-500 mr-1"/>
                    <p className="inline text-sm font-extralight">
                        Expense
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${totalExpenseDollars}.<span className="text-xs">{totalExpenseCents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-blue-500 mr-1"/>
                    <p className="inline text-sm font-extralight">
                        Balance
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${totalBalanceDollars}.<span className="text-xs">{totalBalanceCents}</span></p>
                </div>
            </div>
        </div>
    )
}