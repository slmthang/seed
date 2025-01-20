/* ########################################### IMPORTS ########################################### */

// remote
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

// local
import { AddNewBudgetPlan } from '../../../lib/actions/forms/BudgetPlanFormActions';
import { CloseButtonIcon } from '@/app/components/shared/Icons';
import {
    BudgetPlanFormData,
    BudgetPlanFormFieldProps,
    BudgetPlanFormSchema
} from '@/app/lib/definitions/BudgetPlanForm';
import clsx from 'clsx';

/* ########################################### Add Budget Plan Form ########################################### */

// form field
export const BudgetPlanFormField: React.FC<BudgetPlanFormFieldProps> = ({
    label,
    type,
    name,
    register,
    error,
    valueAsNumber
}: BudgetPlanFormFieldProps) => (
    <div className="w-full">
        <label htmlFor={name} className="font-medium">
            {label ? label + ':' : ''}
        </label>
        <input
            aria-label={label || ''}
            aria-describedby={'describe-' + name}
            id={name}
            type={type}
            {...register(name, { valueAsNumber })}
            className={clsx(
                'w-full h-[2.5rem] rounded-xl pl-4 mt-2 mb-1 rounded-xl bg-light-surface-2 border-[1px] border-light-border text-light-text-1 text-sm placeholder-light-text-2 focus:outline-none focus:border-indigo-700 ',
                { 'border-light-error focus:border-light-error': error }
            )}
        />
        {error && (
            <span className="pl-1 text-sm text-light-error font-light">
                {error.message}
            </span>
        )}
    </div>
);

// form
export default function BudgetPlanForm({
    toggleForm
}: {
    toggleForm: Dispatch<SetStateAction<boolean>>;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<BudgetPlanFormData>({
        resolver: zodResolver(BudgetPlanFormSchema)
    });

    const onSubmit = async (data: BudgetPlanFormData) => {
        await AddNewBudgetPlan(data); // add budget plan using server action
        toggleForm((prev) => !prev); // close form
    };

    return (
        <div className="flex items-center justify-center w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] fixed top-[0px] left-[0px] backdrop-brightness-50 z-20">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-start w-[90%] rounded-xl bg-light-surface-2 border-[1px] border-light-border gap-y-4 z-30 py-8 px-4"
            >
                <div className="flex justify-center items-center relative w-full">
                    <h1 className="text-lg font-bold">Add a new Budget Plan</h1>
                    <div
                        className="absolute right-0"
                        onClick={() => toggleForm((prev) => !prev)}
                    >
                        <CloseButtonIcon tailwindClass="stroke-light-text-1" />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-y-4">
                    <BudgetPlanFormField
                        type="text"
                        label="Budget Plan Name"
                        name="budgetPlanName"
                        register={register}
                        error={errors.budgetPlanName}
                    />

                    <BudgetPlanFormField
                        type="text"
                        label="Budget Amount"
                        name="budgetAmount"
                        register={register}
                        error={errors.budgetAmount}
                    />
                </div>

                <button className="w-full h-[2.5rem] rounded-xl pl-4 bg-black text-white flex justify-center items-center mt-[1rem]">
                    <p>Add</p>
                </button>
            </form>
        </div>
    );
}
