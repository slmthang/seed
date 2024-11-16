
/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// remote
import { useState } from "react";
import { VictoryPie, VictoryTheme } from "victory";

// local
import * as ExpenseList from "@/app/ui/views/budget-plans/id/components/ExpenseList";
import Stats from "@/app/ui/views/budget-plans/id/components/Chart";
import BudgetPlanAtGlance from '@/app/ui/views/budget-plans/id/components/BudgetPlanAtGlance'
import { AddButtonIcon } from "@/app/ui/Icons";
import { AddExpenseForm } from "@/app/ui/views/budget-plans/id/components/AddExpenseForm";
import BudgetPlanHeader from "./components/BudgetPlanHeader";
import { expenseDataType, sortByType, orderByType, groupByType } from "@/app/lib/definitions";
import TabsDuo from "../../components/TabsDuo";
import { categorizeExpenseList } from "@/app/lib/utils";

/* ########################################### Budget Plan ########################################### */


export default function BudgetPlan(
    {
        budgetPlanId, 
        budgetPlanName, 
        totalBudget, 
        totalExpense, 
        totalBalance, 
        expenseListData
    } : 
    {
        budgetPlanId: string,
        budgetPlanName: string, 
        totalBudget: string, 
        totalExpense: string, 
        totalBalance: string, 
        expenseListData: expenseDataType[]
    }   
) {

    const [formActive, setFormActive] = useState<Boolean>(false);
    const [selectedTab, setSelectedTab] = useState<string>('Expenses');
    

    return (

        <>
            {/* Form to add expense */}
            {formActive && <AddExpenseForm totalExpense={totalExpense} totalBalance={totalBalance} budgetPlanId={budgetPlanId} toggleForm={setFormActive}/>}
            
            {/* Budget Plan */}
            <div className=" w-screen h-dvh h-dvh overflow-y-scroll z-20 fixed top-[0px] bg-dark-surface-1 ">

                <div className="w-screen flex items-center justify-center">
                    <BudgetPlanHeader
                        budgetPlanName={budgetPlanName}
                    />
                </div>

                <div className="w-screen h-screen relative flex flex-col items-center  border-dark gap-y-[0.75rem]">

                    {/* background card */}
                    <div className="w-full bg-dark-surface-0 h-[calc(100%-5rem)] top-[5rem] absolute border-t-[1px] border-dark-border rounded-t-xl z-[-10]">

                    </div>

                    <div className="w-[90%]">
                        <BudgetPlanAtGlance totalBudget={totalBudget} totalExpense={totalExpense} totalBalance={totalBalance} />
                    </div>
                    
                    <TabsDuo fields={['Expenses', 'Stats']} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    
                    {
                        selectedTab === 'Expenses' ?
                        (
                            <div className="w-[90%]">
                                
                                {
                                    expenseListData.length <= 0 ?

                                    (
                                        <ExpenseList.Empty />
                                    ) :

                                    (
                                        <ExpenseList.List 
                                            expenseListData={expenseListData}
                                        />
                                    )
                                }

                            </div>
                        ) : 

                        (
                            <div className="w-[90%]">

                                {
                                    expenseListData.length <= 0 ?

                                    (
                                        <ExpenseList.Empty />
                                    ) :

                                    (
                                        <Stats expenseListData={expenseListData} /> 
                                    )
                                }

                            </div>
                            
                        )
                    }
                            
                        
                </div>

                {/* Add Button for Add Expense Form */}
                <div onClick={() => setFormActive(prev => !prev)}>
                    <AddButtonIcon />
                </div>
                
            </div>
        </>

    )
}