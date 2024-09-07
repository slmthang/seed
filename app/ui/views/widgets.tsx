
'use client'

import Link from "next/link"
import { useState } from "react";

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

type LargeWidgetTypes = 'tracker-home' | 'budgetPlanner-home';
type SmallWidgetTypes = 'savings-home' | 'subscriptions-home';
type WidgetsTypes = 'budget-plan' | 'subscriptions' | 'tracker' | 'savings';
const durations = ['day', 'week', 'month', 'year'];
const chartTypes = ['Bar Chart', 'Pie Chart']

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

type WidgetsData = {
    widgetType : WidgetsTypes;
    // LargeWidgetData : LargeWidgetData;
}


export function DateSelectorWidget(
    {data} : {data: string[]}
) {

    const updatedData = data?.map(e => {
        return (
            <li className="w-[4.5rem] h-7 rounded-2xl flex items-center justify-center bg-darkest text-xs">
                <p className="text-xs font-thin">{e}</p>
            </li>
        )
    })

    return (
        <div className="flex items-center justify-center w-[80%] h-10 mt-2 ">
                <ul className="flex w-full items-center gap-x-4">
                    {updatedData}
                </ul>
        </div>
    )
}

const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



export function BarChart({children} : {children?: React.ReactNode}) {
    return (
        <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#3f8f29" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#de1a24" label />
        </PieChart>
      </ResponsiveContainer>
    )
}

export function SmallWidget(
    {data, children} : {data: SmallWidgetData, children: React.ReactNode}
) {
    return (
        <div className="w-[50%] min-h-40 bg-dark rounded-xl">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-sm ml-4">{data.widgetType === 'savings-home' ? 'Savings' : 'Subscriptions'}</p>
                </div>
                <div>
                    <Link href='/home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-lighter mr-4">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}

export function LargeWidget(
    {data, children} : {data: LargeWidgetData, children: React.ReactNode}
) {
    return (
        <div className="w-[90%] min-h-44 bg-darker mb-12 rounded-xl">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-sm ml-4">{data.widgetType === 'tracker-home' ? 'Tracker' : 'Budget Planner'}</p>
                </div>
                <div>
                    <Link href='/home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-lighter mr-4">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}

export function HomeWidget(
    {data} : {data: LargeWidgetData | SmallWidgetData}
) {
    return (
        <>
            {   
            data.widgetType === 'tracker-home' ||
            data.widgetType === 'budgetPlanner-home' ?
            
            (
                <LargeWidget data={data}>
                    {data.widgetType === 'tracker-home' ? <DateSelectorWidget data={chartTypes}/> : null}
                    <div className="w-full h-32 rounded-b-xl flex items-center justify-around">
                        <div className="w-[90%] h-full flex items-start justify-around pt-2">
                            <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                                <div className="mb-2">
                                    <p>Income</p>
                                </div>
                                <div>
                                    <p>{'$' + data.income}</p>
                                </div>
                            </div>
                            <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                                <div className="mb-2">
                                    <p>Expense</p>
                                </div>
                                <div>
                                    <p>{'$' + data.expense}</p>
                                </div>
                            </div>
                            <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                                <div className="mb-2">
                                    <p>Balance</p>
                                </div>
                                <div>
                                    <p>{'$' + data.balance}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LargeWidget>
            ) : 
            
            data.widgetType === 'savings-home' ||
            data.widgetType === 'subscriptions-home' ?

            (
                <SmallWidget data={data}>
                    <div className="w-full h-24 flex items-center justify-center rounded-b-xl">
                        <p className="text-xl">{'$' + data.balance}</p>
                    </div>
                </SmallWidget>
            
            ) : null
        }
        </>
        
    )
}


function Widgets(
    {data, children} : {data: WidgetsData, children: React.ReactNode}
) {
    return (
        <div className="bg-darkest">
            <main>
                <section className="w-screen min-h-40 pt-5">
                    <div className="w-full flex flex-col justify-center items-center bg-darkest">
                        <div className="w-11/12 h-28 bg-dark rounded-xl">
                            {/* <h1>{ data.widgetType === 'budget-plan' ? 'Budget Plan' : data.widgetType === 'subscriptions' ? 'Subscriptions': data.widgetType === 'tracker' ? 'Tracker' : data.widgetType === 'savings' ? 'Savings' : null }</h1> */}
                            <div className="w-full h-32 rounded-b-xl flex items-center justify-around">
                            <div className="w-[90%] h-full flex items-start justify-around pt-2">
                                <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                                    <div className="mb-2">
                                        <p>Income</p>
                                    </div>
                                    <div>
                                        <p>$2000</p>
                                    </div>
                                </div>
                                <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                                    <div className="mb-2">
                                        <p>Expense</p>
                                    </div>
                                    <div>
                                        <p>$2000</p>
                                    </div>
                                </div>
                                <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                                    <div className="mb-2">
                                        <p>Balance</p>
                                    </div>
                                    <div>
                                        <p>$2000</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                        </div>
                        {data.widgetType === 'tracker' ? (
                            <div className="w-11/12 h-10 bg-darker rounded-xl skeletonAnimation mt-5 mb-5"></div>
                        ) : null}
                    </div>
                </section>
                <section className={"w-full min-h-[calc(100vh-14rem)] bg-dark pb-20 flex flex-col items-center"}>
                    {children}
                </section>
            </main>
        </div>
    )

}

function RowWidget (
    {data, children} : {data?: any, children?: React.ReactNode}
) {

    let arr = [1, 2, 3, 4];

    let newArr = arr.map(e => {
        return (
            <div key={e} className="w-[90%] h-20 rounded-xl mt-6 flex justify-between items-center">
                <div className="w-[70%] h-full flex justify-between items-center">
                    <div className="w-[5rem] h-[90%] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-14 fill-lightest">
                            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                        </svg>
                    </div>===
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


export function BudgetPlan() {

    const [isDefault, setIsDefault] = useState<Boolean>(true);

    return (
        <Widgets data={{
            widgetType : 'budget-plan'
            // LargeWidgetData: {widgetType: 'budgetPlanner', income: '2000', expense: '2000', balance: '2000'}
        }} >
            <nav className="w-full h-[5rem]">
                <button className={isDefault ? "w-[50%] h-full bg-dark" : "w-[50%] h-full bg-darker"} onClick={() => setIsDefault(true)}>
                    <p>Expenses</p>
                </button>
                <button className={isDefault ? "w-[50%] h-full bg-darker" : "w-[50%] h-full bg-dark"} onClick={() => setIsDefault(false)}>
                    <p>Stats</p>
                </button>
            </nav>
            {isDefault ? 
                <RowWidget /> : (
                <>
                    <DateSelectorWidget data={chartTypes}/>
                    <BarChart />
                </>
                
            
                )
            }
        </Widgets>
    )
}

// export function Subscriptions() {

//     return (
//         <Widgets widgetType="subscriptions" />
//     )
// }

// export function Tracker() {

//     return (
//         <Widgets widgetType="tracker" />
//     )
// }

// export function Savings() {

//     return (
//         <Widgets widgetType="savings" />
//     )
// }