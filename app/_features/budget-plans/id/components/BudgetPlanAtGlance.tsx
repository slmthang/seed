/* ########################################### Modules ########################################### */

// local
import { SquareIcon } from '@/app/_features/shared/components/Icons';

/* ########################################### BudgetPlanAtGlance ########################################### */

export default function BudgetPlanAtGlance({
    budget,
    expense,
    balance
}: {
    budget: number;
    expense: number;
    balance: number;
}) {
    return (
        <div className="w-full h-[10rem] border-[1px] border-dark-border rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-green-500 mr-1" />
                    <p className="inline">Budget</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-base mt-1">${budget}</p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-red-500 mr-1" />
                    <p className="inline">Expense</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-base mt-1">${expense}</p>
                </div>
            </div>
            <div className="w-full h-[3rem] flex px-6 ">
                <div className="w-[50%] h-[100%] flex items-center">
                    <SquareIcon tailwindClass="fa-fw fa-2xs text-blue-500 mr-1" />
                    <p className="inline">Balance</p>
                </div>
                <div className="w-[50%] h-[100%] flex items-center justify-end">
                    <p className="text-base mt-1">${balance}</p>
                </div>
            </div>
        </div>
    );
}
