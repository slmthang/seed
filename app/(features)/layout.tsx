/* ########################################### Modules ########################################### */

// remote
import { currentUser } from '@clerk/nextjs/server';

// local
import { validateUser } from '../lib/db/drizzle/drizzle';
import ViewLayOutHelper from '../_features/ViewsLayOutHelper';
import { InsertUser } from '../lib/definitions/db/types';

/* ########################################### Layout ########################################### */

export default async function ViewsLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const userClerk = await currentUser();

    const user: InsertUser = {
        authId: userClerk?.id as string,
        firstName: userClerk?.firstName as string,
        lastName: userClerk?.lastName as string,
        email: userClerk?.primaryEmailAddress?.emailAddress as string
    };

    await validateUser(user);

    return (
        <>
            <ViewLayOutHelper>{children}</ViewLayOutHelper>
        </>
    );
}
