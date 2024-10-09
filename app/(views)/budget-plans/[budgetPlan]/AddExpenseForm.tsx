import { Dispatch, SetStateAction } from "react";
import { CloseButtonIcon } from "@/app/ui-components/Icons";
// import AddBudgetPlan from "./AddBudgetPlan";
import AddExpenseAction from './AddExpenseAction'

export default function AddExpenseForm(
    {budgetPlanId, toggleForm} : {budgetPlanId: string, toggleForm: Dispatch<SetStateAction<Boolean>>}
) {

    return (
        <div  className="flex items-center justify-center w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] fixed top-[0px] left-[0px] backdrop-brightness-50 z-30">
            <form action={AddExpenseAction} className="flex flex-col items-center justify-center w-[90%] p-4 rounded-xl bg-darker border border-dark gap-y-4 z-40">
                <div className="flex justify-center items-center relative w-full">
                    <h1>Add a new Item</h1>
                    <div className="absolute right-0" onClick={() => toggleForm(prev => !prev)}>
                        <CloseButtonIcon />
                    </div>
                </div>
                <div className="hidden">
                    <input type="hidden" name="budgetPlanId" id="budgetPlanId" value={budgetPlanId}
                    />
                </div>
                <div >
                    <label htmlFor="itemName" className="text-sm">
                        Item Name
                    </label>
                    <input type="text" name="itemName" id="itemName" required 
                        className="w-full h-[2.5rem] rounded-xl pl-4 mt-1 text-dark"
                    />
                </div>
                <div >
                    <label htmlFor="amount" className="text-sm">
                        Amount
                    </label>
                    <input type="text" name="amount" id="amount" pattern="[0-9]*\.[0-9]*" required
                        className="w-full h-[2.5rem] rounded-xl pl-4 mt-1 text-dark"
                    />
                </div>
                <div >
                    <label htmlFor="category" className="text-sm">
                        Category
                    </label>
                    <input type="text" name="category" id="category" required
                        className="w-full h-[2.5rem] rounded-xl pl-4 mt-1 text-dark"
                    />
                </div>
                    <button onSubmit={() => toggleForm(prev => !prev)} className="w-full h-[2.5rem] rounded-xl pl-4 bg-dark text-center">Add</button>
            </form>
        </div>
    )
}