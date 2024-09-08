import Image from "next/image";

import { LargeWidgetSkeleton, OverviewCardSkeleton, SmallWidgetSkeleton } from "./ui/components/skeletons";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center ">
        <OverviewCardSkeleton pageType="tracker"/>
        <section className={"w-full min-h-[calc(100vh-14rem)] pb-20 flex flex-col items-center pt-5 bg-darker rounded-t-3xl skeletonAnimationA"}>
        </section>
    </main>
  );
}
