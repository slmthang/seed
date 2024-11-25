/* ########################################### Modules ########################################### */

// remote
import Link from 'next/link';

// local
import {
    ChevronRightIcon,
    SquareIcon
} from '@/app/_features/shared/components/Icons';

/* ########################################### BudgetPlanCard ########################################### */

export default function BudgetPlanCard({
    budget,
    expense,
    balance,
    budgetPlanId,
    budgetPlanName
}: {
    budget: number;
    expense: number;
    balance: number;
    budgetPlanId: number;
    budgetPlanName: string;
}) {
    return (
        <div
            className={
                'w-[90%] min-h-[12rem] bg-dark-surface-1 rounded-2xl flex flex-col justify-center items-center '
            }
        >
            <div className="w-full min-h-[2rem] px-4 py-2 flex items-center justify-between">
                <div className="flex h-full items-center gap-x-2">
                    <p className="text-dark-title-text mr-1 text-lg">
                        {budgetPlanName}
                    </p>
                </div>
                <div>
                    <Link href={'/budget-plans/' + budgetPlanId}>
                        <ChevronRightIcon tailwindClass="size-6 stroke-[0.5]" />
                    </Link>
                </div>
            </div>

            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-green-500 mr-1" />
                    <p className="inline">Budget</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${budget}</p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-red-500 mr-1" />
                    <p className="inline">Expense</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${expense}</p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-blue-500 mr-1" />
                    <p className="inline">Balance</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-lg mt-1">${balance}</p>
                </div>
            </div>
        </div>
    );
}
