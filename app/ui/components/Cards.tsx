
// modules (local)
import SingleAmountCard from "./SingleAmountCard"

function TripleAmountCard(
    {data} : {data: string[][]}
) {

    const updatedData = data.map(e => {
        return (
            <SingleAmountCard key={String(e)} data={e}/>
        )
    })
    
    return (
        <div className="w-[90%] h-full flex items-start justify-around pt-2 ">
            {updatedData}
        </div>
    )
}

