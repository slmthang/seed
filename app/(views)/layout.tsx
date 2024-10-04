
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

    const [isSideNavActive, setIsSideNavActive] = useState(false);

    function toggleSideNav() {
        setIsSideNavActive(prevState => !prevState);
    }

    const { isSignedIn, user : ClerkUser, isLoaded } = useUser()
    const [user, setUser] = useState<{
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
        async function addNewUser() {
            
            const existStatus = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/user-exist', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ userId: ClerkUser!.id }),
            })
                .then((response) => response.json())
                .then((data) => {
                    
                    return data.exist;
                })
                .catch((error) => {
                    console.error(error);
                });

            if (existStatus === false) {
                const added = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/add-user', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: ClerkUser?.id,
                        firstName: ClerkUser?.firstName,
                        lastName: ClerkUser?.lastName,
                        email: ClerkUser?.primaryEmailAddress?.emailAddress
                    }),
                })
            }
        }

        if(isLoaded && isSignedIn) {
            addNewUser();

            setUser({
                id: ClerkUser.id!,
                firstName: ClerkUser.firstName!,
                lastName: ClerkUser.lastName!,
                email: ClerkUser.primaryEmailAddress?.emailAddress!,
                joined: ClerkUser.createdAt!

            })

        }
    },[isLoaded, isSignedIn])

    // useEffect(() => {
        
        
    // }, [])

    let appData : AppDataType = {user: {
        ...user
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