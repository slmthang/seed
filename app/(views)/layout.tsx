
// import { useContext, useState } from "react";

'use client'

import SideNavBar from "../ui-components/SideNavBar";

import NavBar from "@/app/ui-components/NavBar";
import MenuBar from "@/app/ui-components/MenuBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import { useClerk, useUser } from '@clerk/nextjs';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AppDataContext } from "@/app/lib/contexts";
import { calculateMoney, calculateTotal } from "@/app/lib/utils";

import { budgetPlanData, budgetPlanExpenseListData, savingsExpenseListData, subscriptionsExpenseListData, trackerItemsListData } from "@/app/lib/placeholder-data";
import { AppDataType, trackerItemsListType } from "../lib/definitions";

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

    // const id = user?.id;

    const { isSignedIn, user, isLoaded } = useUser()
    const [curUser, setCurUser] = useState<{
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        joined: Date
    }>({
        id: 'userId',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        joined: new Date()
    })


    useEffect(()=>{
        async function addUser() {
            
            const existStatus = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/user-exist', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ userId: user!.id }),
            })
                .then((response) => response.json())
                .then((data) => {
                    
                    return data.exist;
                })
                .catch((error) => {
                    console.error(error);
                });

            if (existStatus === false) {

                // console.log({
                //     id: user?.id,
                //     firstName: user?.firstName,
                //     lastName: user?.lastName,
                //     email: user?.primaryEmailAddress
                // })
                const added = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/add-user', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: user?.id,
                        firstName: user?.firstName,
                        lastName: user?.lastName,
                        email: user?.primaryEmailAddress?.emailAddress
                    }),
                })
            }
        }

        if(isLoaded && isSignedIn) {
            addUser();

            setCurUser({
                id: user.id!,
                firstName: user.firstName!,
                lastName: user.lastName!,
                email: user.primaryEmailAddress?.emailAddress!,
                joined: user.createdAt!

            })

        }
    },[isLoaded, isSignedIn])

    // useEffect(() => {
        
        
    // }, [])

    let appData : AppDataType = {user: {
        ...curUser
    }};

    

    return (
        <AppDataContext.Provider value={appData}>
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