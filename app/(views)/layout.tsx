

/* ########################################### Modules ########################################### */

// remote
import { currentUser } from '@clerk/nextjs/server'

// local
import { validateUser } from "@/app/lib/db/drizzle";
import ViewLayOutHelper from "../ui/views/ViewsLayOutHelper";
import { userType } from "../lib/definitions";



/* ########################################### Layout ########################################### */

export default async function ViewsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const userClerk = await currentUser();

    const user : userType = {
        id: userClerk?.id as string,
        firstName: userClerk?.firstName as string,
        lastName: userClerk?.lastName as string,
        email: userClerk?.primaryEmailAddress?.emailAddress as string
    }

    await validateUser(user);

    return (

        <>
            <ViewLayOutHelper children={children}/>
        </>

    )
}