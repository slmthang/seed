
'use client'

// module (remote)
import { useState } from "react";

import OptionsSelector from "./OptionsSelector";
import { Pie_Chart, Bar_Chart } from "./Charts";

export default function DisplayChart() {

    const [chartType, setChartType] = useState<string>('Pie Chart');

    return (
        <>
            <OptionsSelector data={['Pie Chart', 'Bar Chart']} setFunction={setChartType} addStyles="mb-6"/>
            
            {chartType === 'Pie Chart' ? <Pie_Chart /> : <Bar_Chart />}
        </>
    )
            
}