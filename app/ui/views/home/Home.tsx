
'use client'

// modules (remote)
import Link from "next/link";

// modules (local)
import OptionsSelector from "../../components/OptionsSelector";
import SingleAmountCard from "../../components/SingleAmountCard";
import TripleAmountCard from "../../components/TripleAmountCard";

// data (local)
import { SmallWidgetDataType, LargeWidgetDataType, durations } from "../../components/definitions";
import { budgetPlanData } from "@/app/lib/placeholder-data";

function SmallWidget(
    {data, children} : {data: SmallWidgetDataType, children?: React.ReactNode}
) {

    let path;

    if (data.widgetType === 'savings-home') {
        path = 'savings';
    } else {
        path = 'subscriptions';
    }

    return (
        <div className="w-[50%] min-h-40 bg-darker rounded-xl">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-xs ml-3">{data.widgetType === 'savings-home' ? 'Savings' : 'Subscriptions'}</p>
                </div>
                <div>
                    <Link href={path}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-lighter mr-3">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="w-full h-24 flex flex-col items-center justify-center rounded-b-xl">
                <SingleAmountCard data={{
                            name: 'Expense',
                            amount: data.expense ? data.expense : '0.00'
                        }} type={1}/> 
            </div>
        </div>
    )
}

function LargeWidget(
    {data, children} : {data: LargeWidgetDataType, children?: React.ReactNode}
) {

    let path;

    if (data.widgetType === 'tracker-home') {
        path = 'tracker';
    } else {
        path = 'budget-plan';
    }

    return (
        <div className="w-[90%] min-h-44 bg-darker mb-12 rounded-xl flex flex-col items-center">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-xs ml-3">{data.widgetType === 'tracker-home' ? 'Tracker' : 'Budget Planner'}</p>
                </div>
                <div>
                    <Link href={path}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-lighter mr-3">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            {data.widgetType === 'tracker-home' ? <OptionsSelector data={durations}/> : null}
            <div className="w-full h-32 rounded-b-xl flex items-center justify-around">
            <div className="w-[90%] h-full flex items-center justify-around">
                <TripleAmountCard data={{
                        income: {
                            name: 'budget' in data ? 'Budget' : 'Income',
                            amount: data.income ? data.income : data.budget ? data.budget : '0.00'
                        },
                        expense: {
                            name: 'Expense',
                            amount: data.expense ? data.expense : '0.00'
                        },
                        balance: {
                            name: 'Balance',
                            amount: data.balance ? data.balance : '0.00'
                        },
                    }}/>
            </div>
        </div>
        </div>
    )
}


export default function Home() {
    return (
        <section className={"main-cont" + " w-screen h-full flex flex-col items-center pt-5 pb-20"}>
            <LargeWidget data={{widgetType: 'budgetPlanner-home', budget: '1000', expense: '2000', balance: '-200'}}/>
            <LargeWidget data={{widgetType: 'tracker-home', income: '2000', expense: '2000', balance: '2000'}}/>

            <div className="w-[90%] h-40 gap-x-10 flex justify-center">
                <SmallWidget data={{widgetType: 'subscriptions-home', expense: '2000'}}/>
                <SmallWidget data={{widgetType: 'savings-home', expense: '2000'}}/>
            </div>
        </section>
    )
}