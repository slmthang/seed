

export default function AtAGlance() {
    return (
        <section className="w-screen min-h-24 flex flex-col items-center justify-center mt-2 mb-4">
            {/* <div className={"w-full flex flex-col justify-center items-center p-2" + (pageType === 'tracker' ? ' mb-2' : '')}>
                <div className="w-11/12 min-h-28 bg-darker rounded-2xl">
                    <div className="w-full h-32 flex items-center justify-around">
                        <div className="w-[90%] h-full flex items-start justify-around pt-2 ">

                            {
                                pageType === 'budget-plan' ||
                                pageType === 'tracker' ?
                                <TripleAmountCard data={data} pageType={pageType} /> :
                                <SingleAmountCard data={data.expense} type={1}/>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            {pageType === 'tracker' || pageType == 'savings' ? <OptionsSelector data={durations } /> : null} */}
            
        </section>
    )
}