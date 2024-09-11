
// data
import { budgetPlanExpenseListType, subscriptionsExpenseListType, trackerIncomeListType, trackerExpenseListType, savingsExpenseListType, PageTypes } from "./definitions"


export default function Items (
    {data , pageType, children} : {data: budgetPlanExpenseListType | subscriptionsExpenseListType | trackerExpenseListType | trackerIncomeListType | savingsExpenseListType, pageType?: PageTypes,children?: React.ReactNode}
) {
    let newArr = data.map((e, i) => {

        let itemName;
        
        if ('type' in e) {
            itemName = e.type
        } else {
            itemName = e.name
        }


        let dateElement = <p></p>;
        let recurringElement = <p></p>;
        
        if (pageType !== 'budget-plan' && 'date' in e) {
            dateElement = <p className="text-xs font-thin italic" >{e.date}</p>;
        }

        if (pageType === 'subscriptions' && 'recurring' in e && e.recurring.isTrue) {
            recurringElement = <p className="text-xs font-thin italic" >{'( recurring )'}</p>;
        }

        return (
            <div key={itemName + e.amount + i + ''} className="w-[90%] h-[4.5rem] rounded-xl flex justify-between items-center mb-2 border-[1px] border-dark p-4">
                <div className="w-full h-full flex flex-col">
                    <div className="w-full h-[65%] flex items-end relative">
                        <div className="absolute text-lg font-light left-0">
                            <p>{itemName}</p>
                        </div>
                        <div className="absolute text-lg font-light right-0">
                            <p>{e.amount}</p>
                        </div>
                    </div>
                    <div className="w-full h-[35%] flex items-start relative">
                        <div className="flex gap-x-2 left-0 absolute">
                            {dateElement}
                            {recurringElement}
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
        <div className="w-full flex flex-col justify-center items-center mt-4">
            {newArr}
        </div>
    )

}