// modules (remote)
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

export default function TabBarOptions({
    isDefault,
    setIsDefault,
    names = ['Expenses', 'Stats']
}: {
    isDefault: boolean;
    setIsDefault: Dispatch<SetStateAction<boolean>>;
    names: string[];
}) {
    return (
        <nav className="w-[16.5rem] h-[2.25rem] flex items-center justify-around rounded-2xl bg-darkest">
            <button
                className={clsx('w-[8rem] h-[2rem] rounded-2xl', {
                    'bg-dark': isDefault
                })}
                onClick={() => setIsDefault((prev) => !prev)}
            >
                <p>{names[0]}</p>
            </button>

            <button
                className={clsx('w-[8rem] h-[2rem] rounded-2xl', {
                    'bg-dark': !isDefault
                })}
                onClick={() => setIsDefault((prev) => !prev)}
            >
                <p>{names[1]}</p>
            </button>
        </nav>
    );
}
