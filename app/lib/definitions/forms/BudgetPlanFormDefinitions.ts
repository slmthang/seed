// remote
import { FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod'; // Add new import

/****************************** BudgetPlanForm ******************************/

export type BudgetPlanFormData = {
    budgetPlanName: string;
    budgetAmount: string;
};

export type BudgetPlanFormFields = 'budgetPlanName' | 'budgetAmount';

export type BudgetPlanFormFieldProps = {
    label?: string;
    type: string;
    name: BudgetPlanFormFields;
    actualValue?: string;
    register: UseFormRegister<BudgetPlanFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};

export const BudgetPlanFormSchema: ZodType<BudgetPlanFormData> = z.object({
    budgetPlanName: z
        .string()
        .min(1, { message: 'Name is required.' })
        .max(120, {
            message: 'Name must be not be longer than 120 characters.'
        }),
    budgetAmount: z
        .string()
        .min(1, { message: 'Amount is required.' })
        .regex(new RegExp(/^[0-9]*(\.[0-9]*)?$/), {
            message: 'Numbers only. Example: 40.00 or 40 '
        })
});
