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
} from '@/app/components/shared/components/Icons';
import {
    categories,
    categoryList
} from '@/app/lib/definitions/categories/CategoriesDefinitions';
import {
    BudgetExpenseFormCategoryFieldProp,
    BudgetExpenseFormData,
    BudgetExpenseFormFieldProps,
    BudgetExpenseFormSchema
} from '@/app/lib/definitions/forms/BudgetExpenseFormDefinitions';
import { AddNewBudgetExpense } from '../../actions/forms/BudgetExpenseFormActions';
import clsx from 'clsx';

/* ########################################### AddExpenseForm ########################################### */

// form field
const AddExpenseFormField: React.FC<BudgetExpenseFormFieldProps> = ({
    label,
    type,
    name,
    value,
    register,
    error
}: BudgetExpenseFormFieldProps) => (
    <div
        className={clsx(
            { 'w-full': type !== 'hidden' },
            { hidden: type === 'hidden' }
        )}
    >
        <label htmlFor={name} className="">
            {label || ''}
        </label>

        {value ? (
            <input
                id={name}
                type={type}
                {...register(name)}
                className={clsx(
                    'inputDarkModeOverride w-full rounded-xl pl-4 mt-2 mb-1 rounded-xl bg-light-surface-1 border-[1px] border-light-border text-sm  focus:outline-none focus:border-indigo-500',
                    {
                        'border-light-error focus:border-light-error text-light-error':
                            error
                    },
                    { 'text-light-text-2': !error }
                )}
                value={value}
            />
        ) : (
            <input
                id={name}
                type={type}
                {...register(name)}
                className={clsx(
                    'inputDarkModeOverride w-full h-[2.5rem] rounded-xl pl-4 mt-2 mb-1 rounded-xl bg-light-surface-1 border-[1px] border-light-border text-sm  focus:outline-none focus:border-indigo-500',
                    {
                        'border-light-error focus:border-light-error text-light-error':
                            error
                    },
                    { 'text-light-text-2': !error }
                )}
            />
        )}

        {error && (
            <span className="pl-1 text-sm text-light-error font-light">
                {error.message}
            </span>
        )}
    </div>
);

function CategoryField({
    label,
    categories,
    register,
    error,
    setValue
}: BudgetExpenseFormCategoryFieldProp) {
    const [listShown, setListShown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Housing');
    const options = categories.map((category) => {
        return (
            <div
                key={category}
                className={clsx('w-full h-[2rem] px-4 flex items-center ', {
                    'bg-blue-700 text-white': category === selectedCategory
                })}
                onClick={() => {
                    setValue('category', category);
                    setListShown((prev) => !prev);
                    setSelectedCategory(category);
                }}
            >
                <p>{category}</p>
            </div>
        );
    });

    return (
        <div className="w-full">
            <div
                className="w-full flex flex-col justify-center items-start "
                onClick={() => setListShown((prev) => !prev)}
            >
                <label htmlFor="category">{label}</label>
                <div className="w-full flex justify-center items-center relative">
                    <input
                        id="category"
                        type={'text'}
                        placeholder={'Category'}
                        {...register('category')}
                        className={clsx(
                            'inputDarkModeOverride w-full h-[2.5rem] rounded-xl pl-4 mt-2 mb-1 rounded-xl bg-light-surface-1 border-[1px] border-light-border text-light-text-2 text-sm placeholder-light-text-3 focus:outline-none focus:border-blue-700',
                            {
                                'border-light-error focus:border-light-error':
                                    error
                            }
                        )}
                        defaultValue={'Housing'}
                    />
                    {listShown ? (
                        <ChevronUpIcon tailwindClass="absolute right-2" />
                    ) : (
                        <ChevronDownIcon tailwindClass="absolute right-2" />
                    )}
                </div>
            </div>
            {error && (
                <p className="text-xs text-red-400 my-2">{error.message}</p>
            )}
            <div className="w-full relative text-dark">
                {listShown && (
                    <div className="w-full bg-light-surface-1 border-[1px] border-light-border divide-y divide-light-border rounded-xl overflow-hidden">
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
    expense: string;
    balance: string;
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
                className="flex flex-col items-center justify-start w-[90%] rounded-xl bg-light-surface-1 border-[1px] border-light-border gap-y-4 z-30 py-8 px-4"
            >
                <div className="flex justify-center items-center relative w-full ">
                    <h1 className="text-base font-medium">Add an Expense</h1>
                    <div
                        className="absolute right-0"
                        onClick={() => toggleForm((prev) => !prev)}
                    >
                        <CloseButtonIcon tailwindClass="stroke-light-text-1" />
                    </div>
                </div>
                <AddExpenseFormField
                    type="hidden"
                    name="budgetPlanId"
                    value={String(budgetPlanId)}
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
                    register={register}
                    error={errors.item}
                />
                <AddExpenseFormField
                    type="text"
                    label="Amount"
                    name="amount"
                    register={register}
                    error={errors.amount}
                />

                <CategoryField
                    label="Category"
                    setValue={setValue}
                    control={control}
                    categories={categories as categories[]}
                    register={register}
                    error={errors.category}
                />

                <button className="w-full h-[2.5rem] rounded-xl pl-4 bg-light-button-color text-center mt-4 text-white">
                    Add
                </button>
            </form>
        </div>
    );
}
