// remote
import { FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod'; // Add new import

/****************************** AddExpenseForm ******************************/

// AddExpenseFormData Type
export type AddExpenseFormData = {
    budgetPlanId: number;
    totalExpense: number;
    totalBalance: number;
    item: string;
    amount: number;
    category: number;
};

// AddExpenseFormFieldNames Type
export type AddExpenseFormFieldNames =
    | 'budgetPlanId'
    | 'totalExpense'
    | 'totalBalance'
    | 'item'
    | 'amount'
    | 'category';

// AddExpenseFormFieldProps Type
export type AddExpenseFormFieldProps = {
    label?: string;
    type: string;
    placeholder?: string;
    name: AddExpenseFormFieldNames;
    value?: number;
    register: UseFormRegister<AddExpenseFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};

// AddExpenseFromSchema Zod Object
export const AddExpenseFromSchema: ZodType<AddExpenseFormData> = z.object({
    budgetPlanId: z.number(),
    totalExpense: z.number(),
    totalBalance: z.number(),
    item: z.string().min(1, { message: 'Name is required.' }).max(120, {
        message: 'Name must be not be longer than 120 characters.'
    }),
    amount: z.number().min(1, { message: 'Amount is required.' }),
    category: z.number().min(1, { message: 'Category is required.' })
});
