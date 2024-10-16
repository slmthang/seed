

import { userExistById, createUser } from "@/app/lib/db/drizzle";
import { AppDataType } from "@/app/lib/definitions";
import { currentUser } from '@clerk/nextjs/server'
import { SignOutButton } from '@clerk/nextjs'
import ViewLayOutHelper from "../ui-components/ViewLayOutHelper";



export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const user = await currentUser();

    if (user?.primaryEmailAddress?.verification?.status === 'verified') {
        // check if the user already exits
        const checkUserExist = await userExistById(user?.id as string);

        // if it is new user add to database
        if ( !checkUserExist ) {
            
            const createUserStatus = await createUser({
                id: user?.id as string,
                firstName: user?.firstName as string,
                lastName: user?.lastName as string,
                email: user?.primaryEmailAddress?.emailAddress as string
            })

            if (!createUserStatus) {
                throw Error('user creation failed.')
            }
        }
    }

    return (

        <>
            <ViewLayOutHelper children={children}/>
        </>

        
    )
}