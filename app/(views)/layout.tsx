
// import { useContext, useState } from "react";

'use client'

import NavBar from "@/app/ui/components/NavBar";
import MenuBar from "@/app/ui/components/MenuBar";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AppDataContext } from "@/app/lib/contexts";
import { calculateMoney, calculateTotal } from "@/app/lib/utils";

import { budgetPlanData, budgetPlanExpenseListData, savingsExpenseListData, subscriptionsExpenseListData, trackerItemsListData } from "@/app/lib/placeholder-data";
import { trackerItemsListType } from "../ui/components/definitions";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    const [changed, isChanged] = useState(false);

    // budget data
    let budgetPlan_budget = '2000.00';
    let budgetPlan_expense = calculateTotal(budgetPlanExpenseListData);
    let budgetPlan_balance = calculateMoney(budgetPlan_budget, budgetPlan_expense, 'subtract');

    // subscriptions data
    let subscriptions_expense = calculateTotal(subscriptionsExpenseListData)
    
    // tracker data
    let tracker_incomeList: trackerItemsListType = trackerItemsListData.filter(e => !e.isExpense);
    let tracker_expenseList: trackerItemsListType = trackerItemsListData.filter(e => e.isExpense);
    let tracker_income = calculateTotal(tracker_incomeList);
    let tracker_expense = calculateTotal(tracker_expenseList);
    let tracker_balance = calculateMoney(tracker_income, tracker_expense, 'subtract');

    // subscriptions data
    let savings_expense = calculateTotal(savingsExpenseListData);

    return (
        <AppDataContext.Provider value={[
            {
                userId: 123,
                budgetPlan: {
                    budget: budgetPlan_budget,
                    expense: budgetPlan_expense,
                    balance: budgetPlan_balance,
                    expenseList: budgetPlanExpenseListData
                },
                subscriptions: {
                    expense: subscriptions_expense,
                    expenseList: subscriptionsExpenseListData
                },
                tracker: {
                    income: tracker_income,
                    expense: tracker_expense,
                    balance: tracker_balance,
                    expenseList: tracker_expenseList,
                    incomeList: tracker_incomeList,
                    itemsList: trackerItemsListData
                },
                savings: {
                    expense: savings_expense,
                    expenseList: savingsExpenseListData
                }

            }, isChanged
        ]}>
          <main className="flex w-screen flex-col items-center justify-center min-h-dvh">
            <MenuBar />
                {children}
            <NavBar />
          </main>
        </AppDataContext.Provider>
    )
}