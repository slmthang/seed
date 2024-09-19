

'use client'

// modules (remote)
import { useEffect, useState } from "react"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from 'next/navigation'
import path from "path"


function NavBarOption(
    { route, selected, onClick, children} : {route: string, selected: Boolean, onClick: any, children: React.ReactNode}
) {
    return (
        <Link href={route}>
            < div className={clsx(
                "w-6", 
                {
                    'stroke-light': !selected,
                    'stroke-lightest': selected
                }
            )} 

            onClick={onClick}
            >
                {children}
            </ div>
        </Link>
    )
}



export default function NavBar() {

    const  NavBarOptionsData = [
        {
            path: '/',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-1.5 stroke-inherit">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            )
        },
        {
            path: '/budget-plan',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-1.5 stroke-inherit">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            )
        },
        {
            path: '/subscriptions',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-1.5 stroke-inherit">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            )
        },
        {
            path: '/tracker',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-1.5 stroke-inherit">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
            )
        },
        {
            path: '/savings',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-1.5 stroke-inherit">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            )
        }
    ]

    const pathName = usePathname();

    const [selected, setSelected] = useState<string>(pathName);

    useEffect(() => {
        setSelected(pathName)
    }, [pathName])

    const optionsToShow = NavBarOptionsData.map( (e, i) => {
        return (
            <NavBarOption key={String(e.path) + String(i)} route={ e.path} selected={selected === e.path} onClick={ () => setSelected(e.path)}>
                { e.icon}
            </NavBarOption>
        )
    })

    return (
        <nav className="z-10 flex justify-between items-center absolute bottom-[0px] w-screen h-16 px-5 bg-darkest">
            {optionsToShow}
        </nav>
    )
}
