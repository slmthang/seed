

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import { splitMoney } from "@/app/lib/utils"

export default function BIEOverview(
    {pageType, B, I, E} : {pageType: 'tracker' | 'budget-plan', B: any, I: any, E: any}
) {

    const [Bdollars, Bcents] = splitMoney(B);
    const [Idollars, Icents] = splitMoney(I);
    const [Edollars, Ecents] = splitMoney(E);

    return (
        <div className="w-[90%] h-[10rem] bg-darker absolute top-[-5rem] rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                    <p className="inline text-base font-extralight">
                        {pageType === 'tracker' ? 'Income' : 'Budget'}
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-xl mt-1">${Idollars}.<span className="text-xs">{Icents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-red-500 mr-1"/>
                    <p className="inline text-base font-extralight">
                        Expense
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-xl mt-1">${Edollars}.<span className="text-xs">{Ecents}</span></p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-blue-500 mr-1"/>
                    <p className="inline text-base font-extralight">
                        Balance
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-xl mt-1">${Bdollars}.<span className="text-xs">{Bcents}</span></p>
                </div>
            </div>
        </div>
    )
}