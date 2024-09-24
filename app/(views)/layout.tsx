
// import { useContext, useState } from "react";

'use client'

import SideNavBar from "../components/SideNavBar";

import NavBar from "@/app/components/NavBar";
import MenuBar from "@/app/components/MenuBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AppDataContext } from "@/app/lib/contexts";
import { calculateMoney, calculateTotal } from "@/app/lib/utils";

import { budgetPlanData, budgetPlanExpenseListData, savingsExpenseListData, subscriptionsExpenseListData, trackerItemsListData } from "@/app/lib/placeholder-data";
import { trackerItemsListType } from "../lib/definitions";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    const [changed, isChanged] = useState(false);

    const [isSideNavActive, setIsSideNavActive] = useState(false);

    function toggleSideNav() {
        setIsSideNavActive(prevState => !prevState);
    }

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

    let appData = [
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
    ]

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
        <>
            {isSideNavActive && <SideNavBar toggle={toggleSideNav}/>}
            <main className={"overflow-hidden relative w-screen h-dvh " + (isSideNavActive && 'ml-[60%]')}>
                
                <MenuBar toggle={toggleSideNav}/>
                
                {children}

                <NavBar />

            </main>
        </>
        </AppDataContext.Provider>
    )
}