
'use client'

// modules
import { useState } from "react";
import clsx from 'clsx';

// local
import { AppLayout, Item, OptionsSelector } from "../widgets";

// chart
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const chartTypes = ['Bar Chart', 'Pie Chart']

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


function BarChart({children} : {children?: React.ReactNode}) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#3f8f29" />
            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#de1a24" label />
            </PieChart>
        </ResponsiveContainer>
    )
}


// chart


export default function BudgetPlan() {

    // expense page is isDefault = true
    const [isDefault, setIsDefault] = useState<Boolean>(true);

    return (
        <AppLayout data={{
            pageType : 'budget-plan'
            // LargeWidgetData: {widgetType: 'budgetPlanner', income: '2000', expense: '2000', balance: '2000'}
        }} >
            <nav className="w-[16.5rem] h-[2.25rem] flex items-center justify-around rounded-2xl bg-darkest">

                <button className={ clsx(

                    "w-[8rem] h-[2rem] rounded-2xl",
                    {
                        'bg-dark': isDefault
                    }
                )} 
                
                onClick={() => setIsDefault(true)}
                >
                    <p>Expenses</p>
                </button>

                <button className={ clsx(

                    "w-[8rem] h-[2rem] rounded-2xl",
                    {
                        'bg-dark': !isDefault
                    }
                )} 
                
                onClick={() => setIsDefault(false)}
                >
                    <p>Stats</p>
                </button>
            </nav>
                <div className="w-[90%] flex flex-col items-center pt-6">
                    {isDefault ? 
                        <Item /> : (
                            <>
                                <OptionsSelector data={chartTypes} />
                                <BarChart />
                            </>
                    )}
                </div>
        </AppLayout>
    )
}