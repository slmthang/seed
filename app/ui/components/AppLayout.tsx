
// modules (local)
import { AppLayoutData } from "./definitions";
import OverviewCard from "./OverviewCard";


export default function AppLayout(
    {data, children} : {data: AppLayoutData, children: React.ReactNode}
) {
    return (
        <div className="bg-darkest">
                <OverviewCard pageType={data.pageType}/>
                <section className={"w-full min-h-[calc(100vh-14rem)] pb-20 flex flex-col items-center pt-5 bg-darker rounded-t-3xl"}>
                    {children}
                </section>
        </div>
    )

}

