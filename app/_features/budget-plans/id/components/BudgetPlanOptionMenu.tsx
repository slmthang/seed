import DropDownOption from '@/app/_features/shared/components/DropDownOption';
import { Dispatch, SetStateAction } from 'react';
import { budgetPlanOptions } from '@/app/lib/definitions/menuOptions/types';
import {
    SortByIcon,
    OrderByIcon,
    GroupByIcon
} from '@/app/_features/shared/components/Icons';

export function BudgetPlanOptionMenu({
    budgetPlanOptions,
    setBudgetPlanOptions
}: {
    budgetPlanOptions: budgetPlanOptions;
    setBudgetPlanOptions: Dispatch<SetStateAction<budgetPlanOptions>>;
}) {
    return (
        <div className="absolute flex flex-col right-0 min-w-[12rem] z-10 bg-dark-surface-1 rounded-xl gap-y-2 p-3 shadow-md shadow-dark-border">
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
            <DropDownOption
                optionName="Group By"
                OptionIcon={GroupByIcon}
                optionType="groupBy"
                optionValues={['item', 'category']}
                options={budgetPlanOptions}
                setOptions={setBudgetPlanOptions}
            />
        </div>
    );
}
