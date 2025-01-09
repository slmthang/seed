'use client';

// modules (remote)
import { usePathname } from 'next/navigation';
// local
import Link from 'next/link';
import { BackButtonIcon, MeatBallMenuIcon } from '@/app/components/shared/components/Icons';

export default function BudgetPlanNestedMenuBar({
    pageName
}: {
    pageName: string;
}) {
    const prevPathArr = usePathname().split('/');
    const prevPath =
        prevPathArr.length >= 3
            ? prevPathArr[prevPathArr.length - 2]
            : prevPathArr[prevPathArr.length - 1];

    return (
        <nav
            className={
                'z-30 flex justify-between items-center w-screen h-[3rem] sticky top-[0px] left-[0px] px-4'
            }
        >
            <Link href={'/' + prevPath}>
                <BackButtonIcon tailwindClass="size-6 stroke-2 stroke-light-text-1" />
            </Link>

            {/* pathname */}
            <p className="text-base font-semibold">{pageName}</p>
            {/* filter/options */}
            <MeatBallMenuIcon tailwindClass='size-8 stroke-2'/>
        </nav>
    );
}
