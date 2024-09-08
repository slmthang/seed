
import { LargeWidgetSkeleton, SmallWidgetSkeleton } from "@/app/ui/views/skeletons"

export default function Loading() {
    return (
        <section className={"main-cont" + " w-screen h-full flex flex-col items-center pt-5 pb-20"}>
            <LargeWidgetSkeleton />
            <LargeWidgetSkeleton />

            <div className="w-[90%] h-40 gap-x-10 flex justify-center">
                <SmallWidgetSkeleton />
                <SmallWidgetSkeleton />
            </div>
        </section>
    )
}