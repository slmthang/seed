'use client';

// modules (remote)
// local
import { MeatBallMenuIcon } from '../_features/shared/components/Icons';

export default function MenuBar({ pageName }: { pageName: string }) {
    return (
        <nav
            className={
                'z-30 flex justify-between items-center w-screen h-[3rem] bg-dark-surface-0  sticky top-[0px] left-[0px] px-4'
            }
        >
            <div>
                <p className="text-xl font-bold">{pageName}</p>
            </div>

            <div className="w-6">
                <MeatBallMenuIcon tailwindClass="size-6 stroke-2" />
            </div>
        </nav>
    );
}
