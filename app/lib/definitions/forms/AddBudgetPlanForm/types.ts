// remote
import { FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod'; // Add new import

/****************************** AddBudgetPlanForm ******************************/

export type AddBudgetPlanFormData = {
    budgetPlanName: string;
    budgetAmount: string;
};

export type AddBudgetPlanFormFields = 'budgetPlanName' | 'budgetAmount';

export type AddBudgetPlanFormFieldProps = {
    label?: string;
    type: string;
    placeholder?: string;
    name: AddBudgetPlanFormFields;
    actualValue?: string;
    register: UseFormRegister<AddBudgetPlanFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};

export const AddBudgetPlanFormSchema: ZodType<AddBudgetPlanFormData> = z.object(
    {
        budgetPlanName: z
            .string()
            .min(1, { message: 'Name is required.' })
            .max(120, {
                message: 'Name must be not be longer than 120 characters.'
            }),
        budgetAmount: z.string().min(1, { message: 'Amount is required.' })
    }
);
