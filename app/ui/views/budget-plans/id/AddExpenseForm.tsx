

/* ########################################### IMPORTS ########################################### */

import { Dispatch, SetStateAction } from "react";
import { CloseButtonIcon } from "@/app/ui/Icons";
import { AddExpenseAction } from "@/app/lib/serverActions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddExpenseFormDataType, AddExpenseFromSchema, AddExpenseFormFieldPropsType } from "@/app/lib/definitions";


/* ########################################### FORMS ########################################### */

/****************************** AddExpenseForm ******************************/

// AddExpenseFormField
const AddExpenseFormField: React.FC<AddExpenseFormFieldPropsType> = ({
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

// AddExpenseForm
export function AddExpenseForm(
    {budgetPlanId,  totalExpense, totalBalance, toggleForm} : {budgetPlanId: string, totalBalance: string, totalExpense: string, toggleForm: Dispatch<SetStateAction<Boolean>>}
) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<AddExpenseFormDataType>({
        resolver: zodResolver(AddExpenseFromSchema)
    });

    const onSubmit = async (data: AddExpenseFormDataType) => {
        await AddExpenseAction(data)
        toggleForm(prev => !prev)
    }

    return (
        <div  className="flex items-center justify-center w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] fixed top-[0px] left-[0px] backdrop-brightness-50 z-30">
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center w-[90%] p-4 rounded-xl bg-darker border border-dark gap-y-2 z-40"
            >
                <div className="flex justify-center items-center relative w-full">
                    <h1>Add an Expense</h1>
                    <div className="absolute right-0" onClick={() => toggleForm(prev => !prev)}>
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
                    value={totalExpense}
                    register={register}
                    error={errors.budgetPlanId}
                />
                <AddExpenseFormField 
                    type="hidden" 
                    name="totalBalance"
                    value={totalBalance}
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
                <button className="w-full h-[2.5rem] rounded-xl pl-4 bg-dark text-center mt-4">Add</button>
            </form>
        </div>
    )
}