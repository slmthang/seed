

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
        <div className="w-[22rem] h-[10rem] flex flex-col justify-center mt-6 rounded-2xl">
            <div className="w-full h-[5rem] py-2 px-4">
                <div className="w-[95%] h-[40%] "> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-blue-500 mr-1"/>
                    <p className="inline text-base font-extralight">
                        {pageType === 'tracker' ? 'Income': 'Budget'}
                    </p>
                </div>
                <div className="w-[95%] h-[60%] ">
                    <p className="text-2xl mt-1">${Bdollars}.<span className="text-base">{Bcents}</span></p>
                </div>
            </div>
            <div className="w-full h-[5rem] flex items-center py-2 px-4 gap-x-16">
                <div className="w-[40%] h-full flex flex-col justify-center items-center">
                    <div className="w-[95%] h-[40%] "> 
                        <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                        <p className="inline text-sm font-thin">Income</p>
                    </div>
                    <div className="w-[95%] h-[60%] ">
                        <p className="mt-1">${Idollars}.<span className="text-xs">{Icents}</span></p>
                    </div>
                </div>
                <div className="w-[40%] h-full flex flex-col justify-center items-center">
                    <div className="w-[95%] h-[40%] "> 
                        <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-red-500 mr-1"/>
                        <p className="inline text-sm font-thin">Expense</p>
                    </div>
                    <div className="w-[95%] h-[60%] ">
                        <p className="mt-1">${Edollars}.<span className="text-xs">{Ecents}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}