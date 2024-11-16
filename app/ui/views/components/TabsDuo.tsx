
// imports
import { Dispatch, SetStateAction, useState } from "react"
import clsx from "clsx"


export default function TabsDuo(
    {
        fields,
        selectedTab,
        setSelectedTab
    }:
    {
        fields: string[],
        selectedTab: string,
        setSelectedTab: Dispatch<SetStateAction<string>>
    }

) {

    return (
        <div className="w-[90%]">
            <div className="w-full flex justify-center items-center h-[3rem] rounded-xl bg-dark-surface-1 border-dark-border border p-[2px]">
                <div 
                    className={clsx("w-[50%] h-full flex justify-center items-center text-base rounded-xl ", {'bg-dark-surface-2': selectedTab === fields[0]})}
                    onClick={() => setSelectedTab(fields[0])}
                >
                    <p>{fields[0]}</p>
                </div>
                <div 
                    className={clsx("w-[50%] h-full flex justify-center items-center text-base rounded-xl ", {'bg-dark-surface-2': selectedTab === fields[1]})}
                    onClick={() => setSelectedTab(fields[1])}
                >
                    <p>{fields[1]}</p>
                </div>
            </div>
        </div>
    )
}