
/****************************** Imports ******************************/
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; // Add new import

/****************************** FormData ******************************/
export type AddExpenseFormData = {
    budgetPlanId: string;
    item: string;
    amount: string;
    category: string;
}

/****************************** FieldNames ******************************/
export type ValidFieldNames = 'budgetPlanId' | 'item' | 'amount' | 'category';

/****************************** FormFieldProps ******************************/
export type AddExpenseFormFieldProps = {
    label?: string;
    type: string;
    placeholder?: string;
    name: ValidFieldNames;
    actualValue?: string;
    register: UseFormRegister<AddExpenseFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean
}

/****************************** ZodSchema ******************************/
export const AddExpenseFromSchema: ZodType<AddExpenseFormData> = z
.object({
    budgetPlanId: z.string(),
    item: z.string()
        .min(1, { message: 'Item is required.'}),
    amount: z.string()
        .min(1, { message: 'Amount is required.'}),
    category: z.string()
        .min(1, { message: 'Category is required.'}),
})

/****************************** FormField ******************************/
export const FormField: React.FC<AddExpenseFormFieldProps> = ({
    label,
    type,
    placeholder,
    name,
    actualValue,
    register,
    error,
    valueAsNumber,
}) => (
    <div className='w-full'>
        {label && <label htmlFor={name} className="text-sm">{label}</label>}
        {!actualValue ?
            (
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, { valueAsNumber })}
                    className="w-full h-[2.5rem] rounded-xl pl-4 mt-1 text-dark"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, { valueAsNumber })}
                    className="w-full h-[2.5rem] rounded-xl pl-4 mt-1 text-dark"
                    value={actualValue}
                />
            )
        }
        
        {error && <span className="text-sm text-red-500 py-1">{error.message}</span>}
    </div>
);


