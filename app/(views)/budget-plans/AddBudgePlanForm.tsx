import { Dispatch, SetStateAction } from "react";
import { CloseButtonIcon } from "@/app/ui-components/Icons";
import AddBudgetPlan from "./AddBudgetPlan";

export default function AddBudgePlanForm(
    {toggleForm} : {toggleForm: Dispatch<SetStateAction<Boolean>>}
) {

    return (
        <div  className="flex items-center justify-center w-screen h-dvh min-h-dvh overflow-y-scroll pt-[3rem] fixed top-[0px] left-[0px] backdrop-brightness-50 z-20">
            <form action="" className="flex flex-col items-center justify-center w-[90%] p-4 rounded-xl bg-darker border border-dark gap-y-4 z-30">
                <div className="flex justify-center items-center relative w-full">
                    <h1>Add a new Budget Plan</h1>
                    <div className="absolute right-0" onClick={() => toggleForm(prev => !prev)}>
                        <CloseButtonIcon />
                    </div>
                </div>
                
                <div >
                    <label htmlFor="budgetPlanName" className="text-sm">
                        Budget Plan Name
                    </label>
                    <input type="text" name="budgetPlanName" id="budgetPlanName" required 
                        className="w-full h-[2.5rem] rounded-xl pl-4 mt-1 text-dark"
                    />
                </div>
                <div >
                    <label htmlFor="budgetAmount" className="text-sm">
                        Budget Amount
                    </label>
                    <input type="text" name="budgetAmount" id="budgetAmount" pattern="[0-9]*\.[0-9]*" required
                        className="w-full h-[2.5rem] rounded-xl pl-4 mt-1 text-dark"
                    />
                </div>
                <button formAction={AddBudgetPlan} className="w-full h-[2.5rem] rounded-xl pl-4 bg-dark text-center">Add</button>
            </form>
        </div>
    )
}