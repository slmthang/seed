

export function LargeWidgetSkeleton() {
    return (
        <div className="w-[90%] min-h-44 bg-darker mb-12 rounded-xl flex flex-col items-center skeletonAnimationA">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-xs ml-3"></p>
                </div>
            </div>
            <div className="w-full h-32 rounded-b-xl flex items-center justify-around">
            <div className="w-[90%] h-full flex items-center justify-around">
            </div>
        </div>
        </div>
    )
}

export function SmallWidgetSkeleton() {
    return (
        <div className="w-[50%] min-h-40 bg-darker rounded-xl skeletonAnimationA">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
            </div>
            <div className="w-full h-24 flex flex-col items-center justify-center rounded-b-xl">
            </div>
        </div>
    )
}

export function OverviewCardSkeleton(
    {pageType=''} : {pageType?: string}
) {
    return (
        <section className="w-screen min-h-24 flex flex-col items-center justify-center mt-2 mb-4">
            <div className={"w-full flex flex-col justify-center items-center p-2  " + (pageType === 'tracker' ? ' mb-2' : '')}>
                <div className="w-11/12 min-h-28 bg-darker rounded-2xl skeletonAnimationA">
                </div>
            </div>
            {pageType === 'tracker' ? 
            
            (
                <div className="flex items-center justify-center w-[80%] h-10 mt-2 rounded-2xl skeletonAnimationA">
                </div>
            ) : null
            }
        </section>
    )
}
