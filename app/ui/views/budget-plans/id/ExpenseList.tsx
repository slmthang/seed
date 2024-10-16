
// data
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

export default function ExpenseList(
    {expenseList} :
     {
        expenseList: {
            budgetPlanID: number;
            item: string;
            category: string;
            amount: string;
            createdAt: Date;
        }[]
     }
) {
    let expenseListCards = expenseList.map((e, i) => {

        return (
            <div key={e.budgetPlanID + i + ''} className="w-[95%] h-[4.5rem] flex justify-between items-center p-2">
                <div className="w-full h-full flex flex-col">
                    <div className="w-full h-[65%] flex items-end relative">
                        <div className="absolute text-lg font-light left-0">
                            <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs mr-1 text-red-500"/>
                            <p className="inline text-base">{e.item}</p>
                        </div>
                        <div className={clsx("absolute text-lg font-light right-0")}>
                            <p>{e.amount}</p>
                        </div>
                    </div>
                    <div className="w-full h-[35%] flex items-start relative">
                        <div className="flex gap-x-2 right-0 absolute">
                            <p className="text-xs font-thin italic">{e.category}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    })

    return (
        <div className="w-full flex flex-col justify-center items-center mt-2 divide-y divide-dark">
            <div className="w-[95%] h-[3rem] flex justify-between items-center p-2">
                <div className="w-full h-full flex items-end justify-between relative">
                    <p>Name</p>
                    <p>Amount</p>
                </div>
            </div>
            {expenseListCards}
        </div>
    )

}