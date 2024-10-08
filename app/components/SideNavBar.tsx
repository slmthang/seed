
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faQuestion, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

import { ProfileIcon, PersonIcon, HelpIcon, SettingIcon, LogoutIcon } from './Icons';

export default function SideNavBar(
    {toggle} : {toggle: () => void}
) {

    return (
        <div className="z-20 w-screen h-screen flex fixed ">
            <div className="w-[50%] h-full bg-darkest flex flex-col pl-6 gap-y-4">
                <div className="pt-6 mb-6">
                    <ProfileIcon tailwindClass=' !size-11'/>
                    <div>
                        <p className="text-base">Solomon & May</p>
                        <p className="text-base font-extralight">#50854</p>
                    </div>
                </div>
                <ul className=" gap-y-4 flex flex-col">
                    <li className="text-lg h-[3rem] flex items-center">
                        <PersonIcon />
                        <p className="ml-6 h-[1.5rem] ">Profile</p>
                    </li>
                    <li className="text-lg h-[3rem] flex items-center">
                        <HelpIcon />
                        <p className="ml-6 h-[1.5rem] ">Help</p>
                    </li>
                    <li className="text-lg h-[3rem] flex items-center ">
                        <SettingIcon />
                        <p className="ml-6 h-[1.5rem] ">Setting</p>
                    </li>
                    <li className="text-lg h-[3rem] flex items-center">
                        <LogoutIcon />
                        <p className="ml-6 h-[1.5rem] ">Logout</p>
                    </li>
                </ul>
            </div>
            <div className='w-[50%] ' onClick={toggle}>

            </div>
        </div>
    )
}