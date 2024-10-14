

/****************************** Imports ******************************/
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; // Add new import

/****************************** FormData ******************************/
export type AddBudgetPlanFormData = {
    budgetPlanName: string;
    budgetAmount: string;
}

/****************************** FieldNames ******************************/
export type ValidFieldNames = 'budgetPlanName' | 'budgetAmount' ;

/****************************** FormFieldProps ******************************/
export type AddBudgetPlanFormFieldProps = {
    label?: string;
    type: string;
    placeholder?: string;
    name: ValidFieldNames;
    actualValue?: string;
    register: UseFormRegister<AddBudgetPlanFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean
}

/****************************** ZodSchema ******************************/
export const AddBudgetPlanFormSchema: ZodType<AddBudgetPlanFormData> = z
.object({
    budgetPlanName: z.string()
        .min(1, { message: 'Name is required.'})
        .max(120, { message: 'Name must be not be longer than 120 characters.'}),
    budgetAmount: z.string()
        .min(1, { message: 'Amount is required.'})
        .regex(new RegExp(/[0-9]*\.[0-9]*/), 'Enter a valid amount. Examples: "100.00" for $100 and "99.99" for $99.99 ')
})

/****************************** FormField ******************************/
export const BudgetPlanFormField: React.FC<AddBudgetPlanFormFieldProps> = ({
    label,
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber,
}) => (
    <div className='w-full'>
        {label && <label htmlFor={name} className="text-sm">{label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            {...register(name, { valueAsNumber })}
            className="w-full h-[2.5rem] rounded-xl pl-4 my-1 text-dark"
        />
        {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
);


