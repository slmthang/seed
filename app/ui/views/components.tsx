
'use client'

// modules
import { useState } from "react";
import clsx from "clsx";


// data
export const durations = ['day', 'week', 'month', 'year'];


// components
export function OptionsSelector(
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

export function Item (
    {data, children} : {data?: any, children?: React.ReactNode}
) {

    let arr = [1, 2, 3, 4];

    let newArr = arr.map(e => {
        return (
            <div key={e} className="w-[90%] h-[4.5rem] rounded-xl flex justify-between items-cente mb-6">
                <div className="w-[70%] h-full flex justify-between items-center">
                    <div className="w-[5rem] h-[90%] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-10 fill-lightest">
                            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                        </svg>
                    </div>
                    <div className="w-[11rem] h-[90%] rounded-xl flex flex-col justify-center pl-2">
                        <p className="text-base">Netflix Inc.</p>
                        <p className="text-xs font-thin">05/23/2025</p>
                    </div>
                </div>
                <div className="w-[25%] h-full flex justify-between items-center">
                    <div className="w-full h-[90%] rounded-xl flex flex-col justify-center pl-2">
                        <p>$24.99</p>
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

// TripleAmountCard

const data3 = [
    ['Income', '2000'],
    ['Expense', '2000'],
    ['Balance', '2000']
]

export function TripleAmountCard(
    {data} : {data: string[][]}
) {

    const updatedData = data.map(e => {
        return (
            <SingleAmountCard key={String(e)} data={e}/>
        )
    })
    
    return (
        <div className="w-[90%] h-full flex items-start justify-around pt-2 ">
            {updatedData}
        </div>
    )
}

export function SingleAmountCard(
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

function OverviewCard(
    {pageType} : {pageType: PageTypes}
) {
    return (
        <section className="w-screen min-h-24 flex flex-col items-center justify-center mt-2 mb-4">
            <div className={"w-full flex flex-col justify-center items-center p-2" + (pageType === 'tracker' ? ' mb-2' : '')}>
                <div className="w-11/12 min-h-28 bg-darker rounded-2xl">
                    <div className="w-full h-32 flex items-center justify-around">
                        <div className="w-[90%] h-full flex items-start justify-around pt-2 ">

                            {
                                pageType === 'budget-plan' ||
                                pageType === 'tracker' ?
                                <TripleAmountCard data={data3} /> :
                                <SingleAmountCard data={['Balance', '2102']}  type={1} />
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            {pageType === 'tracker' ? <OptionsSelector data={durations}/> : null}
            
        </section>
    )
}

export function TabBar(
    {isDefault, setIsDefault, names=['Expenses', 'Stats']} : {isDefault: Boolean, setIsDefault: any, names: string[]}
) {
    return (
        <nav className="w-[16.5rem] h-[2.25rem] flex items-center justify-around rounded-2xl bg-darkest">

            <button className={ clsx(

                "w-[8rem] h-[2rem] rounded-2xl",
                {
                    'bg-dark': isDefault
                }
            )} 
            
            onClick={() => setIsDefault(true)}
            >
                <p>{names[0]}</p>
            </button>

            <button className={ clsx(

                "w-[8rem] h-[2rem] rounded-2xl",
                {
                    'bg-dark': !isDefault
                }
            )} 
            
            onClick={() => setIsDefault(false)}
            >
                <p>{names[1]}</p>
            </button>
        </nav>
    )
}


// AppLayout

type PageTypes = 'budget-plan' | 'subscriptions' | 'tracker' | 'savings';
type AppLayoutData = {
    pageType : PageTypes;
    // LargeWidgetData : LargeWidgetData;
}



export function AppLayout(
    {data, children} : {data: AppLayoutData, children: React.ReactNode}
) {
    return (
        <div className="bg-darkest">
                <OverviewCard pageType={data.pageType}/>
                <section className={"w-full min-h-[calc(100vh-14rem)] pb-20 flex flex-col items-center pt-5 bg-darker rounded-t-3xl"}>
                    {children}
                </section>
        </div>
    )

}

