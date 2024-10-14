
/****************************** Imports ******************************/
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; // Add new import

/****************************** FormData ******************************/
export type AddExpenseFormData = {
    budgetPlanId: string;
    totalExpense: string;
    item: string;
    amount: string;
    category: string;
}

/****************************** FieldNames ******************************/
export type ValidFieldNames = 'budgetPlanId' | 'totalExpense' | 'item' | 'amount' | 'category';

/****************************** FormFieldProps ******************************/
export type AddExpenseFormFieldProps = {
    label?: string;
    type: string;
    placeholder?: string;
    name: ValidFieldNames;
    value?: string;
    register: UseFormRegister<AddExpenseFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean
}

/****************************** ZodSchema ******************************/
export const AddExpenseFromSchema: ZodType<AddExpenseFormData> = z
.object({
    budgetPlanId: z.string(),
    totalExpense: z.string(),
    item: z.string()
        .min(1, { message: 'Name is required.'})
        .max(120, { message: 'Name must be not be longer than 120 characters.'}),
    amount: z.string()
        .min(1, { message: 'Amount is required.'})
        .regex(new RegExp(/[0-9]*\.[0-9]*/), 'Enter a valid amount. Examples: "100.00" for $100 and "99.99" for $99.99 '),
    category: z.string()
        .min(1, { message: 'Category is required.'}),
})

/****************************** FormField ******************************/
export const AddExpenseFormField: React.FC<AddExpenseFormFieldProps> = ({
    label,
    type,
    placeholder,
    name,
    value,
    register,
    error,
    valueAsNumber,
}) => (
    <div className='w-full'>
        {label && <label htmlFor={name} className="text-sm">{label}</label>}
        {!value ?
            (
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, { valueAsNumber })}
                    className="w-full h-[2.5rem] rounded-xl pl-4 my-1 text-dark"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, { valueAsNumber })}
                    className="w-full h-[2.5rem] rounded-xl pl-4 my-1 text-dark"
                    value={value}
                />
            )
        }
        
        {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
);


