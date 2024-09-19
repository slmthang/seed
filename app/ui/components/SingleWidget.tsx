
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import { splitMoney } from "@/app/lib/utils";

import clsx from "clsx";

export default function SingleOverview(
    {pageType, B} : {pageType: 'subscriptions' | 'savings', B:string}
) {
    const [Bdollars, Bcents] = splitMoney(B);

    return (
        <div className="w-[90%] h-[6rem] bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
            <div className="w-full h-[6rem] px-6 ">
                <div className="w-[100%] h-[40%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className={clsx("fa-fw fa-2xs mr-1", {'text-red-500': pageType === 'subscriptions'}, {'text-green-500': pageType === 'savings'})}/>
                    <p className="inline text-base font-extralight">
                        Balance
                    </p>
                </div>
                <div className="w-[100%] h-[60%]">
                    <p className="text-3xl mt-1">${Bdollars}.<span className="text-lg">{Bcents}</span></p>
                </div>
            </div>
        </div>
    )
}