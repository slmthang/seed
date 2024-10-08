
'use client'

import { useClerk, useUser } from '@clerk/nextjs';
import { ProfileIcon, PersonIcon, HelpIcon, SettingIcon, LogoutIcon } from './Icons';
import { Dispatch, SetStateAction } from 'react';

export default function SideNavBar(
    {sideNavToggle} : {sideNavToggle: Dispatch<SetStateAction<Boolean>>}
) {

    // signout button
    const { signOut } = useClerk();

    const { isSignedIn, user, isLoaded } = useUser()

    return (
        <div className="z-20 w-screen h-screen flex fixed ">
            <div className="w-[60%] h-full bg-darkest flex flex-col pl-6 gap-y-4">
                <div className="pt-6 mb-6">
                    <ProfileIcon tailwindClass=' !size-11'/>
                    <div>
                        <p className="text-base">{user?.fullName}</p>
                        <p className="text-base font-extralight">{user?.primaryEmailAddress?.emailAddress}</p>
                    </div>
                </div>
                <ul className=" gap-y-4 flex flex-col">
                    <li className="text-lg h-[3rem] flex items-center">
                        <PersonIcon />
                        <button className="ml-6 h-[1.5rem] ">Profile</button>
                    </li>
                    <li className="text-lg h-[3rem] flex items-center">
                        <HelpIcon />
                        <button className="ml-6 h-[1.5rem] ">Help</button>
                    </li>
                    <li className="text-lg h-[3rem] flex items-center ">
                        <SettingIcon />
                        <button className="ml-6 h-[1.5rem] ">Setting</button>
                    </li>
                    <li className="text-lg h-[3rem] flex items-center">
                        <LogoutIcon />
                        <button onClick={() => signOut({redirectUrl: '/'})} className="ml-6 h-[1.5rem] ">Logout</button>
                    </li>
                </ul>
            </div>
            <div className='w-[40%] ' onClick={() => sideNavToggle(prev => !prev)}>

            </div>
        </div>
    )
}