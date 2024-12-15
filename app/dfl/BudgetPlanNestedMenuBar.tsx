'use client';

// modules (remote)
import { usePathname } from 'next/navigation';
// local
import Link from 'next/link';
import { BackButtonIcon } from '../_features/shared/components/Icons';

export default function NestedMenuBar({ pageName }: { pageName: string }) {
    const prevPathArr = usePathname().split('/');
    const prevPath =
        prevPathArr.length >= 3
            ? prevPathArr[prevPathArr.length - 2]
            : prevPathArr[prevPathArr.length - 1];

    return (
        <nav
            className={
                'z-10 flex justify-between items-center w-screen h-[3rem] sticky top-[0px] left-[0px] px-4'
            }
        >
            <Link href={'/' + prevPath}>
                <BackButtonIcon tailwindClass="size-6 stroke-2" />
            </Link>

            {/* pathname */}
            <p className="text-base font-semibold">{pageName}</p>
            {/* filter/options */}
            <div className="w-6 h-full flex justify-between items-center"></div>
        </nav>
    );
}
