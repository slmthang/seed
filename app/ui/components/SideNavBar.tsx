
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faQuestion, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function SideNavBar(
    {toggle} : {toggle: () => void}
) {

    return (
        <div className="z-20 w-screen h-screen flex fixed">
            <div className="w-[50%] h-full bg-darkest flex flex-col pl-6 gap-y-4">
                <div className="pt-6 mb-6">
                    <div className="w-[3rem] h-[3rem] bg-dark rounded-full flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faUser} className='fa-fw fa-2x'/>
                    </ div>
                    <div>
                        <p className="text-base font-medium">First Last</p>
                        <p className="text-base font-normal">#123456</p>
                    </div>
                </div>
                <ul className=" gap-y-4 flex flex-col">
                    <li className="text-lg font-semibold h-[3rem] flex items-center">
                        <FontAwesomeIcon icon={faUser} className='fa-fw fa-xl'/>
                        <p className="ml-6 h-[1.5rem] ">Profile</p>
                    </li>
                    <li className="text-lg font-semibold h-[3rem] flex items-center">
                        <FontAwesomeIcon icon={faQuestion} className='fa-fw fa-xl'/>
                        <p className="ml-6 h-[1.5rem] ">Help</p>
                    </li>
                    <li className="text-lg font-semibold h-[3rem] flex items-center ">
                        <FontAwesomeIcon icon={faGear} className='fa-fw fa-xl'/>
                        <p className="ml-6 h-[1.5rem] ">Setting</p>
                    </li>
                    <li className="text-lg font-semibold h-[3rem] flex items-center">
                        <FontAwesomeIcon icon={faRightFromBracket} className='fa-fw fa-xl '/>
                        <p className="ml-6 h-[1.5rem] ">Logout</p>
                    </li>
                </ul>
            </div>
            <div className='w-[50%] ' onClick={toggle}>

            </div>
        </div>
    )
}