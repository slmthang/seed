
import { currentUser } from '@clerk/nextjs/server'
import { formatDate } from '../lib/utils';

export default async function Home() {

    const user = await currentUser();

    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[5rem]">
            <h1>Name: {user?.firstName + ' ' + user?.lastName}</h1>
            <h1>Email: {user?.primaryEmailAddress?.emailAddress}</h1>
            <h1>Joined: {formatDate(new Date(user?.createdAt!))}</h1>
        </div>
    )
}