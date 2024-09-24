
// modules (local)
import { overViewDataType } from "../lib/definitions";
import SingleAmountCard from "./SingleAmountCard"

export default function TripleAmountCard(
    {data, pageType} : {data: overViewDataType, pageType?: string}
) {

    const updatedData: any[] = [];
    
    Object.entries(data).forEach((e, i) => {
        updatedData.push(
            <SingleAmountCard key={'' + e[0] + e[1].name + i} data={e[1]} pageType={pageType} />
        )
    })
    
    return (
        <div className="w-[90%] h-full flex items-start justify-around pt-2 ">
            {updatedData}
        </div>
    )
}