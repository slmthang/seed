
'use client'

// modules (remote)
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

// local
import { ProfileIcon, OptionsIcon } from './Icons';

export default function MenuBar(
    {sideNavToggle} : {sideNavToggle: Dispatch<SetStateAction<Boolean>>}
) {

    let pathName = usePathname();
    pathName = pathName.slice(1, pathName.length);

    pathName = pathName.length >= 1 ? pathName: 'home';

    return (
        <nav className={"z-10 flex justify-center items-center w-screen h-12 absolute top-[0px] left-[0px] backdrop-blur-md " }>
            {/* Profile/Menu */}
            <div className="w-6 absolute left-px ml-5" onClick={() => sideNavToggle(prev => !prev)}>
                <ProfileIcon tailwindClass='size-7'/>
            </ div>
            {/* pathname */}
            <p className="text-xs">{pathName}</p>
            {/* filter/options */}
            <div className="w-6 absolute right-px mr-5">
                <OptionsIcon tailwindClass='size-7'/>
            </div>
        </nav>
    )
}