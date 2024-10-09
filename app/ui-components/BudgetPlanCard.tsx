

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faSquare } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import { CheckedIcon, ChevronRightIcon, SharedIcon } from "./Icons";

import { splitMoney } from "@/app/lib/utils"

export default function BudgetPlanCard(
    {budget, expense, balance, budgetPlanId, cardName, isDefault = false, isShared = false} : { budget: string, expense: string, balance: string, budgetPlanId: string, cardName: string, isDefault?: Boolean, isShared?: Boolean}
) {

    const [budgetDollars, budgetCents] = splitMoney(budget);
    const [expenseDollars, expenseCents] = splitMoney(expense);
    const [balanceDollars, balanceCents] = splitMoney(balance);

    return (
        <div className={"w-[90%] min-h-[12rem] bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center "}>
            <div className="w-full min-h-[2rem] px-4 py-2 flex items-center justify-between">
                
                <div className="flex h-full items-center gap-x-2">
                    <p className="font-thin mr-1">{cardName}</p>
                    {isDefault && <CheckedIcon tailwindClass="size-[1rem]"/>}
                    {isShared && <SharedIcon tailwindClass="size-[1rem]"/>}
                </div>
                <div >
                    <Link href={'/budget-plans/' + budgetPlanId}>
                        <ChevronRightIcon tailwindClass="size-6 stroke-[0.5]" />
                    </Link>
                    
                </div>
                
            </div>

            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                    <p className="inline text-sm font-light">
                        Budget
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${budgetDollars}.<span className="text-xs">{budgetCents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-red-500 mr-1"/>
                    <p className="inline text-sm font-light">
                        Expense
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${expenseDollars}.<span className="text-xs">{expenseCents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-blue-500 mr-1"/>
                    <p className="inline text-sm font-light">
                        Balance
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${balanceDollars}.<span className="text-xs">{balanceCents}</span></p>
                </div>
            </div>
        </div>
    )
}
