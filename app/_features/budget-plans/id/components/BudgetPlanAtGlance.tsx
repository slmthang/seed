/* ########################################### Modules ########################################### */

// local
import { SquareIcon } from '@/app/_features/shared/components/Icons';
import { absoluteNumber, isNegative, splitMoney } from '@/app/lib/utils';

/* ########################################### BudgetPlanAtGlance ########################################### */

export default function BudgetPlanAtGlance({
    budget,
    expense,
    balance
}: {
    budget: string;
    expense: string;
    balance: string;
}) {
    const [budgetDollars, budgetCents] = splitMoney(budget);
    const [expenseDollars, expenseCents] = splitMoney(expense);
    const [balanceDollars, balanceCents] = splitMoney(balance);

    return (
        <div className="w-full h-[10rem] bg-dark-surface-0 border-[1px] border-dark-border rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-[3rem] flex px-6 ">
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
            <div className="w-full h-[3rem] flex px-6 ">
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
            <div className="w-full h-[3rem] flex px-6 ">
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
