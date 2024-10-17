

/* ########################################### Modules ########################################### */

// remote
import { currentUser } from '@clerk/nextjs/server'

// local
import TrioWidget from './TrioWidget';



/* ########################################### Home ########################################### */

export default async function Overview() {

    const user = await currentUser();

    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[5rem]">
            <TrioWidget cardName='Some Name' pathName='/' income='2000.00' expense='1000.00' balance='1000.00'/>
        </div>
    )
}