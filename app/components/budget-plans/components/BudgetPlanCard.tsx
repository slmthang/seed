/* ########################################### Modules ########################################### */

// remote
import Link from 'next/link';

// local
import { ChevronRightIcon, SquareIcon } from '@/app/components/shared/Icons';
import { splitMoney, absoluteNumber, isNegative } from '@/app/lib/utils';

/* ########################################### BudgetPlanCard ########################################### */

export default function BudgetPlanCard({
    budget,
    expense,
    balance,
    budgetPlanId,
    budgetPlanName
}: {
    budget: string;
    expense: string;
    balance: string;
    budgetPlanId: number;
    budgetPlanName: string;
}) {
    const [budgetDollars, budgetCents] = splitMoney(budget);
    const [expenseDollars, expenseCents] = splitMoney(expense);
    const [balanceDollars, balanceCents] = splitMoney(balance);

    return (
        <div
            className={
                'w-full min-h-[12rem] rounded-2xl flex flex-col justify-center items-center border-[1px] bg-light-surface-3 border-light-border'
            }
        >
            <div className="w-full min-h-[2rem] px-4 py-2 flex items-center justify-between">
                <div className="flex h-full items-center gap-x-2">
                    <p className="mr-1 text-lg text-light-text-2">
                        {budgetPlanName}
                    </p>
                </div>
                <div>
                    <Link href={'/budget-plans/' + budgetPlanId}>
                        <ChevronRightIcon tailwindClass="size-5 stroke-[0.5] text-light-text-2" />
                    </Link>
                </div>
            </div>

            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-green-500 mr-1" />
                    <p className="inline">Budget</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="mt-1">
                        ${budgetDollars}.
                        <span className="text-xs">
                            {budgetCents ? budgetCents : '00'}
                        </span>
                    </p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-red-500 mr-1" />
                    <p className="inline">Expense</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="mt-1">
                        ${expenseDollars}.
                        <span className="text-xs">
                            {expenseCents ? expenseCents : '00'}
                        </span>
                    </p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-4 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-blue-500 mr-1" />
                    <p className="inline">Balance</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="mt-1">
                        <span className="mr-1">
                            {isNegative(+balanceDollars) && '-'}
                        </span>
                        ${absoluteNumber(+balanceDollars)}.
                        <span className="text-xs">
                            {balanceCents ? balanceCents : '00'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
