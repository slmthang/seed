
import { TrackerWidget, BudgetPlannerWidget, SavingsWidget, SubscriptionsWidget } from "@/app/ui/views/home/widgets"

export default function Page() {
    return (
        <div className="bg-darkest">
            <main>
                <section className={"main-cont" + " w-screen h-full flex flex-col items-center bg-darkest pt-5 pb-20"}>
                    <TrackerWidget /> {/* Tracker Widget */}
                    <BudgetPlannerWidget /> {/* Budget Plan Widget */}
                    <div className="w-11/12 h-40 gap-x-10 flex justify-center">
                        <SavingsWidget />  {/* Savings Widget */}
                        <SubscriptionsWidget />  {/* Subscription Widget */}
                    </div>
                </section>
            </main>
        </div>
    )
  }