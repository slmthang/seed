// remote
import {
    Control,
    FieldError,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form';
import { z, ZodType } from 'zod'; // Add new import
import { categories } from '../../categories/type';

/****************************** BudgetExpenseForm ******************************/

// AddExpenseFormData Type
export type BudgetExpenseFormData = {
    budgetPlanId: string;
    expense: string;
    balance: string;
    item: string;
    amount: string;
    category: string;
};

// AddExpenseFormFieldNames Type
export type BudgetExpenseFormFields =
    | 'budgetPlanId'
    | 'expense'
    | 'balance'
    | 'item'
    | 'amount'
    | 'category';

// AddExpenseFormFieldProps Type
export type BudgetExpenseFormFieldProps = {
    label?: string;
    type: string;
    placeholder?: string;
    name: BudgetExpenseFormFields;
    value?: number;
    register: UseFormRegister<BudgetExpenseFormData>;
    error: FieldError | undefined;
};

// Category Field Prop Type
export type BudgetExpenseFormCategoryFieldProp = {
    categories: categories[];
    register: UseFormRegister<BudgetExpenseFormData>;
    error: FieldError | undefined;
    control?: Control<BudgetExpenseFormData>;
    setValue: UseFormSetValue<BudgetExpenseFormData>;
};

// AddExpenseFromSchema Zod Object
export const BudgetExpenseFormSchema: ZodType<BudgetExpenseFormData> = z.object(
    {
        budgetPlanId: z.string(),
        expense: z.string(),
        balance: z.string(),
        item: z.string().min(1, { message: 'Name is required.' }).max(120, {
            message: 'Name must be not be longer than 120 characters.'
        }),
        amount: z
            .string()
            .min(1, { message: 'Amount is required.' })
            .regex(/^\d*\.?\d*$/, 'Numbers only. Ex: 99.00 or 99'),
        category: z.string().min(1, { message: 'Category is required.' })
    }
);
