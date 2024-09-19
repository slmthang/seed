

'use client'

// modules (remote)
import { useEffect, useState } from "react"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from 'next/navigation'
import path from "path"
import { HomeIcon, BudgetPlanIcon, SubscriptionsIcon, TrackerIcon, SavingsIcon } from "./Icons"


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
                <HomeIcon />
            )
        },
        {
            path: '/budget-plan',
            icon: (
                <BudgetPlanIcon />
            )
        },
        {
            path: '/subscriptions',
            icon: (
                <SubscriptionsIcon />
            )
        },
        {
            path: '/tracker',
            icon: (
                <TrackerIcon />
            )
        },
        {
            path: '/savings',
            icon: (
                <SavingsIcon />
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
        <nav className="z-10 flex justify-between items-center absolute bottom-[0px] w-screen h-16 px-5 backdrop-blur-sm">
            {optionsToShow}
        </nav>
    )
}
