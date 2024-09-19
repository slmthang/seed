
'use client'

// module (remote)
import { useState } from "react";

import OptionsSelector from "./OptionsSelector";
import { Pie_Chart, Bar_Chart, Line_Chart } from "./Charts";
import { PageTypes } from "./definitions";

import { VictoryPie, VictoryBar, VictoryLine, LineSegment } from "victory";

export default function DisplayChart(
    {pieData, pageType} : {pieData?: any, pageType: PageTypes}
) {

    const [chartType, setChartType] = useState<string>('Pie Chart');

    return (
        <>
            <OptionsSelector data={pageType === 'tracker' || pageType === 'savings' ? ['Pie Chart', 'Bar Chart', 'Line Chart'] : ['Pie Chart', 'Bar Chart']} setFunction={setChartType} addStyles="mb-6"/>
            
            {chartType === 'Pie Chart' && <VictoryPie width={300} height={300} colorScale={["#b30000", "#7c1158", "#4421af", "#1a53ff", "#0d88e6", "#00b7c7", "#5ad45a", "#8be04e", "#ebdc78"]
} data={pieData} 
            
                style={{
                    labels: {
                        fill: '#D2D2D2',
                        fontSize: 8
                    }
                }}

                labelIndicator={<LineSegment style = {{stroke:"#D2D2D2", strokeDasharray:1,fill: "none",}}/>}
                labelIndicatorInnerOffset={50}
            /> }
            {chartType === 'Bar Chart' && <VictoryBar /> }
            {chartType === 'Line Chart' && <VictoryLine /> }
        </>
    )
            
}