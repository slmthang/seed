
// modules (remote)
import clsx from "clsx"

export default function SingleAmountCard(
    {data, type=0} : {data: string[], type?: number}
) {
    return (
        <div className="w-[90%] h-full flex items-start justify-around pt-2 ">
            <div className="w-full h-[90%]  flex flex-col items-center justify-center">
                {type===0 ? (
                    <div className="mb-2">
                        <p className="text-xs">{data[0]}</p>
                    </div>
                ): null}

                <div>
                    <p className={clsx("font-black", {'text-3xl' : type===1, 'text-lg' : type!==1})}>
                        ${data[1]}
                    </p>
                </div>
            </div>
        </div>
    )
}