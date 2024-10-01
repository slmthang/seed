
import { OverviewCardSkeleton } from "@/app/ui-components/skeletons"

export default function Loading() {
    return (
        <div className="bg-darkest">
                <OverviewCardSkeleton pageType={'tracker'}/>
                <section className={"w-full min-h-[calc(100vh-14rem)] pb-20 flex flex-col items-center pt-5 bg-darker rounded-t-3xl skeletonAnimationA"}>
                </section>
        </div>
    )

}