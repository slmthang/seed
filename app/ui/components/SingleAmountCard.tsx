
// modules (remote)
import clsx from "clsx"

export default function SingleAmountCard(
    {data, type=0} : {data: {name: string, amount: string}, type?: number}
) {
    return (
        <div className="w-[90%] h-full flex items-start justify-around pt-2 ">
            <div className="w-full h-[90%]  flex flex-col items-center justify-center">
                {type===0 ? (
                    <div className="mb-2">
                        <p className="text-xs font-extralight">{data.name}</p>
                    </div>
                ): null}

                <div>
                    <p className={clsx({'text-2xl' : type===1, 'text-sm' : type!==1})}>
                        ${data.amount}
                    </p>
                </div>
            </div>
        </div>
    )
}