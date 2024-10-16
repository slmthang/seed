

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import { splitMoney } from "@/app/lib/utils"

export default function TrioOverView(
    {income, expense, balance, pageType} : {income: string, expense: string, balance: string, pageType: 'tracker' | 'budget-plan'}
) {

    const [incomeDollars, incomeCents] = splitMoney(income);
    const [expenseDollars, expenseCents] = splitMoney(expense);
    const [balanceDollars, balanceCents] = splitMoney(balance);

    return (
        <div className="w-[90%] h-[10rem] bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                    <p className="inline text-sm font-extralight">
                        {pageType === 'tracker' ? 'Income' : 'Budget'}
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${incomeDollars}.<span className="text-xs">{incomeCents}</span></p>
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
                    <p className="text-lg mt-1">${expenseDollars}.<span className="text-xs">{expenseCents}</span></p>
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
                    <p className="text-lg mt-1">${balanceDollars}.<span className="text-xs">{balanceCents}</span></p>
                </div>
            </div>
        </div>
    )
}