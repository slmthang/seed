/* ########################################### IMPORTS ########################################### */

// remote
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

// local
import AddBudgetPlanAction from '@/app/_features/budget-plans/actions/serverActions';
import { CloseButtonIcon } from '@/app/_features/shared/components/Icons';
import { AddBudgetPlanFormData, AddBudgetPlanFormFieldProps, AddBudgetPlanFormSchema } from '@/app/lib/definitions/forms/AddBudgetPlanForm/types';

/* ########################################### Add Budget Plan Form ########################################### */

// form field
export const BudgetPlanFormField: React.FC<AddBudgetPlanFormFieldProps> = ({
    label,
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber
}: AddBudgetPlanFormFieldProps) => (
    <div className="w-full">
        {label && (
            <label htmlFor={name} className="text-sm">
                {label}
            </label>
        )}
        <input
            type={type}
            placeholder={placeholder}
            {...register(name, { valueAsNumber })}
            className="w-full h-[2.5rem] rounded-xl pl-4 my-1 text-dark"
        />
        {error && (
            <span className="text-sm text-dark-error-text">
                {error.message}
            </span>
        )}
    </div>
);

// form
export default function AddBudgePlanForm({
    toggleForm
}: {
    toggleForm: Dispatch<SetStateAction<boolean>>;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AddBudgetPlanFormData>({
        resolver: zodResolver(AddBudgetPlanFormSchema)
    });

    const onSubmit = async (data: AddBudgetPlanFormData) => {
        await AddBudgetPlanAction(data); // add budget plan using server action
        toggleForm((prev) => !prev); // close form
    };

    return (
        <div className="flex items-center justify-center w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] fixed top-[0px] left-[0px] backdrop-brightness-50 z-20">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center w-[90%] p-4 rounded-xl bg-dark-surface-1 border-[2px] border-dark-border gap-y-4 z-30"
            >
                <div className="flex justify-center items-center relative w-full">
                    <h1>Add a new Budget Plan</h1>
                    <div
                        className="absolute right-0"
                        onClick={() => toggleForm((prev) => !prev)}
                    >
                        <CloseButtonIcon />
                    </div>
                </div>

                <BudgetPlanFormField
                    type="text"
                    label="Budget Plan Name"
                    name="budgetPlanName"
                    register={register}
                    error={errors.budgetPlanName}
                />

                <BudgetPlanFormField
                    type="number"
                    label="Budget Amount"
                    name="budgetAmount"
                    register={register}
                    error={errors.budgetAmount}
                />
                <button className="w-full h-[2.5rem] rounded-xl pl-4 bg-dark-primary-color text-center">
                    Add
                </button>
            </form>
        </div>
    );
}
