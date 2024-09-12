
// modules (remote)
import clsx from "clsx"

export default function SingleAmountCard(
    {data, type=0, pageType} : {data: {name: string, amount: string}, type?: number, pageType?: string}
) {
    return (
        <div className="w-[90%] h-full flex items-start justify-around pt-2 ">
            <div className="w-full h-[90%]  flex flex-col items-center justify-center">
                {type===0 ? (
                    <div className="mb-2 flex">
                        {/* <p className={clsx("text-xs font-extralight mr-1", {'text-green-500': data.name ==='Income' || 'Budget'}, {'text-red-500': data.name ==='Expense'}, {'text-blue-500': data.name ==='Balance'})}>&#9632;</p> */}
                        <p className="text-xs font-extralight">{data.name}</p>
                    </div>
                ): null}

                <div>
                    <p className={clsx({'text-green-500': data.name ==='Income' || data.name === 'Budget'  || data.name ==='Balance' && +data.amount >= 0}, {'text-red-500': data.name ==='Expense' || data.name ==='Balance' && +data.amount < 0}, {'text-2xl' : type===1, 'text-sm' : type!==1})}>
                        ${data.amount}
                    </p>
                </div>
            </div>
        </div>
    )
}