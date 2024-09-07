
// import { TrackerWidget, BudgetPlannerWidget, SavingsWidget, SubscriptionsWidget } from "@/app/ui/views/home/widgets"
import { HomeWidget } from "@/app/ui/views/widgets"

export default function Page() {
    return (
        <div className="bg-darkest">
            <main>
                <section className={"main-cont" + " w-screen h-full flex flex-col items-center bg-darkest pt-5 pb-20"}>
                    <HomeWidget data={{widgetType: 'budgetPlanner-home', income: '2000', expense: '2000', balance: '2000'}}/>
                    <HomeWidget data={{widgetType: 'tracker-home', income: '2000', expense: '2000', balance: '2000'}}/>

                    <div className="w-[90%] h-40 gap-x-10 flex justify-center">
                        <HomeWidget data={{widgetType: 'savings-home', balance: '2000'}}/>
                        <HomeWidget data={{widgetType: 'subscriptions-home', balance: '2000'}}/>
                    </div>
                    
                </section>
            </main>
        </div>
    )
  }