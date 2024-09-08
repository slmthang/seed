
'use client'

// modules (remote)
import Link from "next/link";

// modules (local)
import { OptionsSelector, durations, SingleAmountCard, TripleAmountCard } from "../components";

// data (local)
type LargeWidgetTypes = 'tracker-home' | 'budgetPlanner-home';
type SmallWidgetTypes = 'savings-home' | 'subscriptions-home';

type LargeWidgetData = {
    widgetType : LargeWidgetTypes;
    income : string;
    expense : string;
    balance : string;
}

type SmallWidgetData = {
    widgetType : SmallWidgetTypes;
    balance : string;
}

const data3 = [
    ['Income', '2000'],
    ['Expense', '2000'],
    ['Balance', '2000']
]

function SmallWidget(
    {data, children} : {data: SmallWidgetData, children?: React.ReactNode}
) {
    return (
        <div className="w-[50%] min-h-40 bg-darker rounded-xl">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-xs ml-3">{data.widgetType === 'savings-home' ? 'Savings' : 'Subscriptions'}</p>
                </div>
                <div>
                    <Link href='/home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-lighter mr-3">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="w-full h-24 flex flex-col items-center justify-center rounded-b-xl">
                <SingleAmountCard data={['', '1500']}/> 
            </div>
        </div>
    )
}

function LargeWidget(
    {data, children} : {data: LargeWidgetData, children?: React.ReactNode}
) {
    return (
        <div className="w-[90%] min-h-44 bg-darker mb-12 rounded-xl flex flex-col items-center">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-xs ml-3">{data.widgetType === 'tracker-home' ? 'Tracker' : 'Budget Planner'}</p>
                </div>
                <div>
                    <Link href='/home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-lighter mr-3">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            {data.widgetType === 'tracker-home' ? <OptionsSelector data={durations}/> : null}
            <div className="w-full h-32 rounded-b-xl flex items-center justify-around">
            <div className="w-[90%] h-full flex items-center justify-around">
                <TripleAmountCard data={data3}/>
            </div>
        </div>
        </div>
    )
}


export default function Home() {
    return (
        <section className={"main-cont" + " w-screen h-full flex flex-col items-center pt-5 pb-20"}>
            <LargeWidget data={{widgetType: 'budgetPlanner-home', income: '1000', expense: '2000', balance: '2000'}}/>
            <LargeWidget data={{widgetType: 'tracker-home', income: '2000', expense: '2000', balance: '2000'}}/>

            <div className="w-[90%] h-40 gap-x-10 flex justify-center">
                <SmallWidget data={{widgetType: 'savings-home', balance: '2000'}}/>
                <SmallWidget data={{widgetType: 'subscriptions-home', balance: '2000'}}/>
            </div>
        </section>
    )
}