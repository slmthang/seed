
// modules (local)
import { AppLayoutDataType } from "./definitions";
import OverviewCard from "./OverviewCard";


export default function AppLayout(
    {data, children} : {data: AppLayoutDataType, children: React.ReactNode}
) {
    return (
        <div className="bg-darkest">
                <OverviewCard pageType={data.pageType} 
                    data={{
                        income: {
                            name: 'Income',
                            amount: data.income ? data.income : '0.00'
                        },
                        expense: {
                            name: 'Expense',
                            amount: data.expense ? data.expense : '0.00'
                        },
                        balance: {
                            name: 'Income',
                            amount: data.balance ? data.balance : '0.00'
                        },
                    }}
                />
                <section className={"w-full min-h-[calc(100vh-14rem)] pb-20 flex flex-col items-center pt-5 bg-darker rounded-t-3xl"}>
                    {children}
                </section>
        </div>
    )

}

