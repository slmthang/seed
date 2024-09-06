
import Link from "next/link"

type wigetL = 'tracker' | 'budgetPlanner';
type wigetS = 'savings' | 'subscriptions';

export function DateSelectorWidget() {
    return (
        <div className="flex items-center justify-center w-full h-10 mt-2">
                <ul className="flex w-[80%] items-center justify-around">
                    <li className="w-16 h-5 rounded-lg flex items-center justify-center bg-darkest text-xs">
                        <p>Day</p>
                    </li>
                    <li className="w-16 h-5 rounded-lg flex items-center justify-center bg-darker text-xs">
                        <p>Week</p>
                    </li>
                    <li className="w-16 h-5 rounded-lg flex items-center justify-center bg-darker text-xs">
                        <p>Month</p>
                    </li>
                    <li className="w-16 h-5 rounded-lg flex items-center justify-center bg-darker text-xs">
                        <p>Year</p>
                    </li>
                </ul>
        </div>
    )
}

export function WidgetL(
    {widget, income, expense, balance} : {widget: wigetL, income: string, expense: string, balance: string}
) {
    return (
        <div className="w-[90%] min-h-44 bg-dark mb-12 rounded-xl">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-sm ml-4">{widget === 'tracker' ? 'Tracker' : 'Budget Planner'}</p>
                </div>
                <div>
                    <Link href='/home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-lighter mr-4">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            {widget === 'tracker' ? <DateSelectorWidget /> : null}
            <div className="w-full h-32 rounded-b-xl flex items-center justify-around">
                <div className="w-[90%] h-full flex items-start justify-around pt-2">
                    <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                        <div className="mb-2">
                            <p>Income</p>
                        </div>
                        <div>
                            <p>{'$' + income}</p>
                        </div>
                    </div>
                    <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                        <div className="mb-2">
                            <p>Expense</p>
                        </div>
                        <div>
                            <p>{'$' + expense}</p>
                        </div>
                    </div>
                    <div className="w-24 h-[80%]  flex flex-col items-center justify-center">
                        <div className="mb-2">
                            <p>Balance</p>
                        </div>
                        <div>
                            <p>{'$' + balance}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function WidgetS(
    {widget, balance} : {widget: wigetS, balance: string}
) {
    return (
        <div className="w-[50%] min-h-40 bg-dark rounded-xl">
            <div className="w-full h-10 flex items-center justify-between rounded-t-xl">
                <div>
                    <p className="text-lighter text-sm ml-4">{widget === 'savings' ? 'Savings' : 'Subscriptions'}</p>
                </div>
                <div>
                    <Link href='/home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-lighter mr-4">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="w-full h-24 flex items-center justify-center rounded-b-xl">
                <p className="text-xl">{'$' + balance}</p>
            </div>
        </div>
    )
}

export function TrackerWidget() {

    return (
        <WidgetL widget="tracker" income="2000" expense="1500" balance="500"/>
    )
}

export function BudgetPlannerWidget() {

    return (
        <WidgetL widget="budgetPlanner" income="2000" expense="1500" balance="500"/>
    )
}

export function SavingsWidget() {

    return (
        <WidgetS widget="savings" balance="750"/>
    )
}

export function SubscriptionsWidget() {

    return (
        <WidgetS widget="subscriptions" balance="150"/>
    )
}

