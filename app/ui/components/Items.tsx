
// data
import clsx from "clsx";
import { budgetPlanExpenseListType, subscriptionsExpenseListType, trackerItemsListType, savingsExpenseListType, PageTypes } from "./definitions"


export default function Items (
    {data , pageType, children} : {data: budgetPlanExpenseListType | subscriptionsExpenseListType | trackerItemsListType | savingsExpenseListType, pageType?: PageTypes,children?: React.ReactNode}
) {
    let newArr = data.map((e, i) => {

        let itemName = e.name;


        let dateElement;
        let paymentDay;
        let moneySign = '';
        let isIncome = false;
        
        if (pageType !== 'budget-plan' && 'subscriptions' && 'date' in e) {
            dateElement = <p className="text-xs font-thin italic" >{e.date}</p>;
        }

        if (pageType === 'subscriptions' && 'paymentDay' in e) {
            paymentDay = <p className="text-xs font-thin italic" >{e.paymentDay} of month</p>
        }

        if (pageType === 'tracker' && 'isExpense' in e) {
            if (!e.isExpense) {
                moneySign = '+';
                isIncome = true;
            } else {
                moneySign = '-';
            }
        }

        return (
            <div key={itemName + e.amount + i + ''} className="w-[95%] h-[4.5rem] flex justify-between items-center p-2">
                <div className="w-full h-full flex flex-col">
                    <div className="w-full h-[65%] flex items-end relative">
                        <div className="absolute text-lg font-light left-0">
                            <p>{itemName}</p>
                        </div>
                        <div className={clsx("absolute text-lg font-light right-0 text-red-500", {'text-green-500':  isIncome})}>
                            <p>{moneySign}{e.amount}</p>
                        </div>
                    </div>
                    <div className="w-full h-[35%] flex items-start relative">
                        <div className="flex gap-x-2 left-0 absolute">
                            {dateElement}
                            {paymentDay}
                        </div>
                        <div className="flex gap-x-2 right-0 absolute">
                            <p className="text-xs font-thin italic">{e.category}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    })

    return (
        <div className="w-full flex flex-col justify-center items-center mt-4 rounded-xl divide-y divide-dark border border-dark">
            {newArr}
        </div>
    )

}