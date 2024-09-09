
// data
import { budgetPlanExpenseListType, subscriptionsExpenseListType, trackerIncomeListType, trackerExpenseListType, savingsExpenseListType } from "./definitions"


export default function Items (
    {data , children} : {data: budgetPlanExpenseListType | subscriptionsExpenseListType | trackerExpenseListType | trackerIncomeListType | savingsExpenseListType, children?: React.ReactNode}
) {
    let newArr = data.map((e, i) => {

        let itemName;

        if ('goal' in e) {
            itemName = e.goal;
        } else if ('type' in e) {
            itemName = e.type
        } else {
            itemName = e.name
        }

        return (
            <div key={itemName + e.amount + i + ''} className="w-[90%] h-[4.5rem] rounded-xl flex justify-between items-cente mb-6">
                <div className="w-[70%] h-full flex justify-between items-center">
                    <div className="w-[5rem] h-[90%] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-10 fill-lightest">
                            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                        </svg>
                    </div>
                    <div className="w-[11rem] h-[90%] rounded-xl flex flex-col justify-center pl-2">
                        <p className="text-base">{itemName}</p>
                        {/* <p className="text-xs font-thin">{e.date}</p> */}
                    </div>
                </div>
                <div className="w-[25%] h-full flex justify-between items-center">
                    <div className="w-full h-[90%] rounded-xl flex flex-col justify-center pl-2">
                        <p>{e.amount}</p>
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