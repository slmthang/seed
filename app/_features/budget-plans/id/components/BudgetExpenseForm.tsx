/* ########################################### Modules ########################################### */

// remote
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';

// local
import {
    ChevronDownIcon,
    ChevronUpIcon,
    CloseButtonIcon
} from '@/app/_features/shared/components/Icons';
import {
    categories,
    categoryList
} from '@/app/lib/definitions/categories/type';
import {
    BudgetExpenseFormCategoryFieldProp,
    BudgetExpenseFormData,
    BudgetExpenseFormFieldProps,
    BudgetExpenseFormSchema
} from '@/app/lib/definitions/forms/BudgetExpenseForm/types';
import { AddNewBudgetExpense } from '../../actions/forms/BudgetExpenseFormActions';

/* ########################################### AddExpenseForm ########################################### */

// form field
const AddExpenseFormField: React.FC<BudgetExpenseFormFieldProps> = ({
    label,
    type,
    placeholder,
    name,
    value,
    register,
    error
}: BudgetExpenseFormFieldProps) => (
    <div className="w-full">
        {label && (
            <label htmlFor={name} className="text-sm">
                {label}
            </label>
        )}
        {error && <p className="text-xs text-red-400">{error.message}</p>}
        {value ? (
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className="w-full h-[2.5rem] rounded-xl pl-4 my-1 text-dark"
                value={value}
            />
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className="w-full h-[2.5rem] rounded-xl pl-4 my-1 text-dark"
            />
        )}
    </div>
);

function CategoryField({
    categories,
    register,
    error,
    setValue
}: BudgetExpenseFormCategoryFieldProp) {
    const [listShown, setListShown] = useState(false);
    const options = categories.map((category) => {
        return (
            <div
                key={category}
                className={'w-full h-[2rem] px-4 flex items-center '}
                onClick={() => {
                    setValue('category', category);
                    setListShown((prev) => !prev);
                }}
            >
                <p>{category}</p>
            </div>
        );
    });

    return (
        <div className="w-full">
            <label htmlFor="category">Category:</label>
            {error && <p className="text-xs text-red-400">{error.message}</p>}
            <div
                className="w-full relative flex justify-center items-center "
                onClick={() => setListShown((prev) => !prev)}
            >
                <input
                    type={'text'}
                    placeholder={'Category'}
                    {...register('category')}
                    className="w-full h-[2.5rem] rounded-xl pl-4 my-1 text-dark"
                    defaultValue={'Housing'}
                />
                {listShown ? (
                    <ChevronUpIcon tailwindClass="absolute right-2 text-red-500" />
                ) : (
                    <ChevronDownIcon tailwindClass="absolute right-2 text-red-500" />
                )}
            </div>
            <div className="w-full relative text-dark">
                {listShown && (
                    <div className="w-full bg-white divide-y divide-border-light rounded-xl overflow-hidden">
                        {options}
                    </div>
                )}
            </div>
        </div>
    );
}

// form
export function BudgetExpenseForm({
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
        formState: { errors },
        control,
        setValue
    } = useForm<BudgetExpenseFormData>({
        resolver: zodResolver(BudgetExpenseFormSchema)
    });

    const onSubmit = async (data: BudgetExpenseFormData) => {
        await AddNewBudgetExpense(data);
        toggleForm((prev) => !prev);
    };

    const categories = Object.keys(categoryList);

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
                    name="expense"
                    value={expense}
                    register={register}
                    error={errors.budgetPlanId}
                />
                <AddExpenseFormField
                    type="hidden"
                    name="balance"
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

                <CategoryField
                    setValue={setValue}
                    control={control}
                    categories={categories as categories[]}
                    register={register}
                    error={errors.category}
                />

                <button className="w-full h-[2.5rem] rounded-xl pl-4 bg-dark-button-color text-center mt-4 text-dark-text-on-primary">
                    Add
                </button>
            </form>
        </div>
    );
}
