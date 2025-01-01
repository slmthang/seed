'use client';

// modules (remote)
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
    PlanIcon,
    HomeIcon,
    SettingIcon,
    TrackerIcon
} from '../components/shared/components/Icons';

function NavBarOption({
    route,
    selected,
    onClick,
    children
}: {
    route: string;
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link href={route}>
            <div
                className={clsx('w-6', {
                    'stroke-light-text-4': !selected,
                    'stroke-light-text-1': selected
                })}
                onClick={onClick}
            >
                {children}
            </div>
        </Link>
    );
}

export default function NavBar() {
    const NavBarOptionsData = [
        {
            path: '',
            icon: <HomeIcon tailwindClass='size-8'/>,
            text: 'Home'
        },
        {
            path: 'plans',
            icon: <PlanIcon tailwindClass='size-8'/>,
            text: 'Plans'
        },
        {
            path: 'tracker',
            icon: <TrackerIcon tailwindClass='size-8'/>,
            text: 'Tracker'
        },
        {
            path: 'settings',
            icon: <SettingIcon tailwindClass='size-8'/>,
            text: 'Settings'
        }
    ];

    const userPathNameValue = usePathname();
    const pathName = userPathNameValue
        .slice(1, userPathNameValue.length)
        .split('/')[0];

    const [selected, setSelected] = useState<string>(pathName);

    useEffect(() => {
        setSelected(pathName);
    }, [pathName]);

    const optionsToShow = NavBarOptionsData.map((e, i) => {
        return (
            <NavBarOption
                key={String(e.path) + String(i)}
                route={'/' + e.path}
                selected={selected === e.path}
                onClick={() => setSelected(e.path)}
            >
                {e.icon}
            </NavBarOption>
        );
    });

    return (
        <nav
            className={
                'z-30 flex justify-between items-center absolute bottom-[0px] left-[0px] w-screen h-[3rem] px-8 backdrop-blur-md '
            }
        >
            {optionsToShow}
        </nav>
    );
}
