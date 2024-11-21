/* ########################################### Modules ########################################### */

// remote
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

// local
import { AddExpenseFormData, AddExpenseFormFieldProps, AddExpenseFromSchema} from '@/app/lib/definitions/forms/AddExpenseForm/types';
import { AddExpenseAction } from '@/app/_features/budget-plans/actions/serverActions';
import { CloseButtonIcon } from '@/app/_features/shared/components/Icons';

/* ########################################### AddExpenseForm ########################################### */

// form field
const AddExpenseFormField: React.FC<AddExpenseFormFieldProps> = ({
    label,
    type,
    placeholder,
    name,
    value,
    register,
    error,
    valueAsNumber
}: AddExpenseFormFieldProps) => (
    <div className="w-full">
        {label && (
            <label htmlFor={name} className="text-sm">
                {label}
            </label>
        )}
        {!value ? (
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
        )}

        {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
);

// form
export function AddExpenseForm({
    budgetPlanId,
    expense,
    balance,
    toggleForm
}: {
    budgetPlanId: number;
    expense: number;
    balance: number;
    toggleForm: Dispatch<SetStateAction<boolean>>;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AddExpenseFormData>({
        resolver: zodResolver(AddExpenseFromSchema)
    });

    const onSubmit = async (data: AddExpenseFormData) => {
        await AddExpenseAction(data);
        toggleForm((prev) => !prev);
    };

    return (
        <div className="flex items-center justify-center w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] fixed top-[0px] left-[0px] backdrop-brightness-50 z-30">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center w-[90%] p-4 rounded-xl bg-dark-surface-1 border-[2px] border-dark-border gap-y-2 z-40"
            >
                <div className="flex justify-center items-center relative w-full">
                    <h1>Add an Expense</h1>
                    <div
                        className="absolute right-0"
                        onClick={() => toggleForm((prev) => !prev)}
                    >
                        <CloseButtonIcon />
                    </div>
                </div>
                <AddExpenseFormField
                    type="hidden"
                    name="budgetPlanId"
                    value={budgetPlanId}
                    register={register}
                    error={errors.budgetPlanId}
                />
                <AddExpenseFormField
                    type="hidden"
                    name="totalExpense"
                    value={expense}
                    register={register}
                    error={errors.budgetPlanId}
                />
                <AddExpenseFormField
                    type="hidden"
                    name="totalBalance"
                    value={balance}
                    register={register}
                    error={errors.budgetPlanId}
                />
                <AddExpenseFormField
                    type="text"
                    label="Name"
                    name="item"
                    placeholder="Name"
                    register={register}
                    error={errors.item}
                />
                <AddExpenseFormField
                    type="text"
                    label="Amount"
                    name="amount"
                    placeholder="Amount"
                    register={register}
                    error={errors.amount}
                />
                <AddExpenseFormField
                    type="text"
                    label="Category"
                    name="category"
                    placeholder="Category"
                    register={register}
                    error={errors.category}
                />
                <button className="w-full h-[2.5rem] rounded-xl pl-4 bg-dark-primary-color text-center mt-4">
                    Add
                </button>
            </form>
        </div>
    );
}
