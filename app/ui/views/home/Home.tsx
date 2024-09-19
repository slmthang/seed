
'use client'

// modules (remote)
import Link from "next/link";

// modules (local)
import OptionsSelector from "../../components/OptionsSelector";
import SingleAmountCard from "../../components/SingleAmountCard";
import TripleAmountCard from "../../components/TripleAmountCard";

// data (local)
import { SmallWidgetDataType, LargeWidgetDataType, durations } from "../../components/definitions";

import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";
import TrioOverView from '@/app/ui/components/TrioOverview';
import SingleOverview from "../../components/SingleOverview";
import SingleWidget from "../../components/SingleWidget";
import TrioWidget from '@/app/ui/components/TrioWidget';

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
                    <p className="text-lighter text-xs ml-3">{data.widgetType === 'tracker-home' ? 'Tracker' : 'Budget Plan'}</p>
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

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    return (
        <div className=" w-screen h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] overflow-y-scroll">
            
        <div className="w-screen min-h-[100%] bg-darker relative flex flex-col justify-center items-center">
            <TrioWidget pageType="budget-plan" B={AppData.budgetPlan.balance} I={AppData.budgetPlan.budget} E={AppData.budgetPlan.expense}/>
            <TrioWidget pageType="tracker" B={AppData.tracker.balance} I={AppData.tracker.income} E={AppData.tracker.expense}/>
            <SingleWidget pageType="subscriptions" B={AppData.subscriptions.expense}/>
            <SingleWidget pageType="savings" B={AppData.savings.expense}/>
            {/* <div className="w-[90%] min-h-fit bg-darker rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center">
                
            </div> */}
                
            
        </div>
        
        </div>
    )
}