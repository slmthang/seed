
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import { splitMoney } from "@/app/lib/utils";

import clsx from "clsx";

export default function SingleOverview(
    {pageType, B} : {pageType: 'subscriptions' | 'savings' | 'tracker' | 'budget-plan', B:string}
) {
    const [Bdollars, Bcents] = splitMoney(B);

    return (
        <div className="w-[90%] h-[6rem] flex flex-col justify-center">
            <div className="w-full h-full p-4">
                <div className="w-[95%] h-[35%] ">
                    <FontAwesomeIcon icon={faSquare} className={clsx("fa-fw fa-2xs mr-1", {' text-green-500 ': pageType === 'savings'}, {' text-red-500 ': pageType !== 'savings'})}/>
                    <p className="inline text-base">
                        {pageType === 'savings' ? 'Total Savings' : pageType==='subscriptions' ? 'Subscriptions Balance' : 'Balance'}
                    </p>
                </div>
                <div className="w-[95%] h-[65%] ">
                    <p className="text-3xl mt-1">${Bdollars}.<span className="text-base">{Bcents}</span></p>
                </div>
                
            </div>
        </div>
    )
}