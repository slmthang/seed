
'use client'

// modules (remote)
import { usePathname } from 'next/navigation';

export default function MenuBar(
    {toggle} : {toggle: () => void}
) {

    let pathName = usePathname();
    pathName = pathName.slice(1, pathName.length);

    pathName = pathName.length >= 1 ? pathName: 'home';

    return (
        <nav className="z-10 flex justify-center items-center w-screen h-12 absolute top-[0px] bg-darkest">
            {/* Profile/Menu */}
            <div className="w-6 absolute left-px ml-5" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                </svg>
            </ div>
            {/* pathname */}
            <p className="text-xs">{pathName}</p>
            {/* filter/options */}
            <div className="w-6 absolute right-px mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>
        </nav>
    )
}