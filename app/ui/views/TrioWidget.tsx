
'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faSquare } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import { ChevronRightIcon } from "@/app/ui/Icons";
import OptionsSelector from "@/app/ui/OptionsSelector";

import { splitMoney } from "@/app/lib/utils"
import clsx from "clsx";

export default function TrioWidget(
    {cardName, pathName, hasOptionsSelctor=false, income, expense, balance} : {cardName: string, pathName: string, hasOptionsSelctor?: Boolean, income: string, expense: string, balance: string}
) {

    const [incomeDollars, incomeCents] = splitMoney(income);
    const [expenseDollars, expenseCents] = splitMoney(expense);
    const [balanceDollars, balanceCents] = splitMoney(balance);

    return (
        <div className={"w-[90%] min-h-[12rem] bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center "}>
            <div className="w-full min-h-[2rem] px-4 py-2 flex items-center justify-between">
                <p className="font-thin">{cardName}</p>
                <Link href={pathName}>
                    <ChevronRightIcon tailwindClass="size-6 stroke-[0.5]" />
                </Link>
                
            </div>

            { hasOptionsSelctor && <OptionsSelector data={['day', 'week', 'month', 'year']}/> }

            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                    <p className="inline text-base font-light">
                        {cardName === 'Tracker' ? 'Income' : 'Budget'}
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-xl mt-1">${incomeDollars}.<span className="text-xs">{incomeCents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-red-500 mr-1"/>
                    <p className="inline text-base font-light">
                        Expense
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-xl mt-1">${expenseDollars}.<span className="text-xs">{expenseCents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-blue-500 mr-1"/>
                    <p className="inline text-base font-light">
                        Balance
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-xl mt-1">${balanceDollars}.<span className="text-xs">{balanceCents}</span></p>
                </div>
            </div>
        </div>
    )
}
