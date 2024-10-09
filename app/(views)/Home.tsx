
// 'use client'

import { currentUser } from '@clerk/nextjs/server'
import { formatDate } from '../lib/utils';
import TrioWidget from '../ui-components/TrioWidget';

export default async function Home() {

    const user = await currentUser();

    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[5rem]">
            <TrioWidget cardName='Some Name' pathName='/' income='2000.00' expense='1000.00' balance='1000.00'/>
        </div>
    )
}