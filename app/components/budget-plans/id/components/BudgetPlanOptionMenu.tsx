import DropDownOption from '@/app/components/shared/components/DropDownOption';
import {
    OrderByIcon,
    SortByIcon
} from '@/app/components/shared/components/Icons';
import { budgetPlanOptions } from '@/app/lib/definitions/menuOptions/BudgetPlanOptions';
import { Dispatch, SetStateAction } from 'react';

export function BudgetPlanOptionMenu({
    budgetPlanOptions,
    setBudgetPlanOptions
}: {
    budgetPlanOptions: budgetPlanOptions;
    setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
}) {
    return (
        <div className="absolute flex flex-col right-0 min-w-[12rem] z-10 bg-light-surface-1 rounded-xl gap-y-2 p-3 bg-white border-[1px] border-light-border shadow shadow-light-border">
            <DropDownOption
                optionName="Sort By"
                OptionIcon={SortByIcon}
                optionType="sortBy"
                optionValues={['name', 'amount']}
                options={budgetPlanOptions}
                setOptions={setBudgetPlanOptions}
            />
            <DropDownOption
                optionName="Order By"
                OptionIcon={OrderByIcon}
                optionType="orderBy"
                optionValues={['asc', 'desc']}
                options={budgetPlanOptions}
                setOptions={setBudgetPlanOptions}
            />
        </div>
    );
}
