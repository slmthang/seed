

// chart
import React, { PureComponent } from 'react';
import { PieChart, Pie, BarChart, Bar, ResponsiveContainer } from 'recharts';

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


export function Pie_Chart() {
    return (
            <PieChart width={300} height={200}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={45} fill="#3f8f29" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#de1a24" label />
            </PieChart>
    )
}

const data = [
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


export function Bar_Chart({children} : {children?: React.ReactNode}) {
    return (
            <BarChart width={250} height={150} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
    )
}
