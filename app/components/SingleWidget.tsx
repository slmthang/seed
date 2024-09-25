
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import { splitMoney } from "@/app/lib/utils";
import Link from "next/link";
import { ChevronRightIcon } from "./Icons";

import clsx from "clsx";

export default function SingleOverview(
    {pageType, B} : {pageType: 'subscriptions' | 'savings', B:string}
) {
    const [Bdollars, Bcents] = splitMoney(B);

    return (
        <div className="w-[90%] h-[8rem] bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
            <div className="w-full min-h-[2rem] px-4 py-2 flex items-center justify-between">
                <p className="font-thin">{pageType === 'savings' ? 'Savings' : 'Subscriptions'}</p>
                
                <Link href={pageType==='savings' ? '/savings' : '/subscriptions'}>
                    <ChevronRightIcon tailwindClass="size-6 stroke-[0.5]" />
                </Link>
            </div>
            <div className="w-full h-[6rem] px-4 ">
                <div className="w-[100%] h-[40%] flex items-center"> 
                    <FontAwesomeIcon icon={faSquare} className={clsx("fa-fw fa-2xs mr-1", {'text-red-500': pageType === 'subscriptions'}, {'text-green-500': pageType === 'savings'})}/>
                    <p className="inline text-base font-light">
                        {pageType === 'savings' ? 'Total' : 'Balance'}
                    </p>
                </div>
                <div className="w-[100%] h-[60%]">
                    <p className="text-3xl mt-1">${Bdollars}.<span className="text-lg">{Bcents}</span></p>
                </div>
            </div>
        </div>
    )
}