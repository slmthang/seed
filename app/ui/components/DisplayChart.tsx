
'use client'

// module (remote)
import { useState } from "react";

import OptionsSelector from "./OptionsSelector";
import { Pie_Chart, Bar_Chart, Line_Chart } from "./Charts";
import { PageTypes } from "./definitions";

import { VictoryPie, VictoryBar, VictoryLine } from "victory";

export default function DisplayChart(
    {pieData, pageType} : {pieData?: any, pageType: PageTypes}
) {

    const [chartType, setChartType] = useState<string>('Pie Chart');

    return (
        <>
            <OptionsSelector data={pageType === 'tracker' || pageType === 'savings' ? ['Pie Chart', 'Bar Chart', 'Line Chart'] : ['Pie Chart', 'Bar Chart']} setFunction={setChartType} addStyles="mb-6"/>
            
            {chartType === 'Pie Chart' && <VictoryPie data={pieData}/> }
            {chartType === 'Bar Chart' && <VictoryBar /> }
            {chartType === 'Line Chart' && <VictoryLine /> }
        </>
    )
            
}