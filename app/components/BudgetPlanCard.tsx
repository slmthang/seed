

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faSquare } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import { CheckedIcon, ChevronRightIcon, SharedIcon } from "./Icons";
import OptionsSelector from "./OptionsSelector";

import { splitMoney } from "@/app/lib/utils"
import clsx from "clsx";

export default function BudgetPlanCard(
    {setSelectedPlan, cardName, pathName, isDefault = false, isShared = false, tailwindClass='', B, I, E} : {setSelectedPlan: React.Dispatch<React.SetStateAction<Boolean>>, cardName: string, pathName: string, isDefault?: Boolean, isShared?: Boolean, tailwindClass?: string, B: any, I: any, E: any}
) {

    const [Bdollars, Bcents] = splitMoney(B);
    const [Idollars, Icents] = splitMoney(I);
    const [Edollars, Ecents] = splitMoney(E);

    return (
        <div className={"w-[90%] min-h-[12rem] bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center " + tailwindClass}>
            <div className="w-full min-h-[2rem] px-4 py-2 flex items-center justify-between">
                
                <div className="flex h-full items-center gap-x-2">
                    <p className="font-thin mr-1">{cardName}</p>
                    {isDefault && <CheckedIcon tailwindClass="size-[1rem]"/>}
                    {isShared && <SharedIcon tailwindClass="size-[1rem]"/>}
                </div>
                <div onClick={() => setSelectedPlan(prevState => !prevState)}>
                    <ChevronRightIcon tailwindClass="size-6 stroke-[0.5]" />
                </div>
                
            </div>

            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                    <p className="inline text-base font-light">
                        {cardName === 'Tracker' ? 'Income' : 'Budget'}
                    </p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-xl mt-1">${Idollars}.<span className="text-xs">{Icents}</span></p>
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
                    <p className="text-xl mt-1">${Edollars}.<span className="text-xs">{Ecents}</span></p>
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
                    <p className="text-xl mt-1">${Bdollars}.<span className="text-xs">{Bcents}</span></p>
                </div>
            </div>
        </div>
    )
}
