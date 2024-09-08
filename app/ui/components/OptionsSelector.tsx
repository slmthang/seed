

// modules (remote)
import { useState } from "react";
import clsx from "clsx";

export default function OptionsSelector(
    {data, colors = ['bg-dark']} : {data: string[], colors?: string[]}
) {

    const [isSelected, setIsSelected] = useState(data[0]);

    const updatedData = data?.map(e => {
        return (
            <li key={e} className={ clsx(
                "min-w-[3rem] h-7 px-2.5 rounded-2xl flex items-center justify-center text-xs" ,
                {
                    [colors[0]] : e === isSelected
                }
            )}
                onClick={() => setIsSelected(e)}
            >
                <p className="text-xs font-extralight">{e}</p>
            </li>
        )
    })

    return (
        <div className="flex items-center justify-center w-[80%] h-10 mt-2">
                <ul className="flex w-full items-center gap-x-4 items-center justify-center">
                    {updatedData}
                </ul>
        </div>
    )
}