/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote
import Link from 'next/link';

// local
import { CloseButtonIcon } from '@/app/_features/shared/components/Icons';

/* ########################################### BudgetPlanHeader ########################################### */

export default function BudgetPlanHeader({
    budgetPlanName
}: {
    budgetPlanName: string;
}) {
    return (
        <div className="relative w-[90%] mb-[1rem]">
            <div className="w-full h-[4rem] flex items-center justify-center relative">
                <Link
                    href="/budget-plans"
                    className="flex absolute left-[0px] "
                >
                    <div className="flex h-[2rem] items-center justify-center p-2">
                        <h1 className="text-2xl font-bold">{budgetPlanName}</h1>
                    </div>
                </Link>
                <Link
                    href="/budget-plans"
                    className="flex absolute right-[0px] "
                >
                    <div className="flex h-[2rem] items-center justify-center p-2">
                        <CloseButtonIcon tailwindClass="size-8" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
