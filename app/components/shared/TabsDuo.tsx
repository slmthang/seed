// imports
import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

export default function TabsDuo<T extends 'Expenses' | 'Stats'>({
    fields,
    selectedTab,
    setSelectedTab
}: {
    fields: T[];
    selectedTab: T;
    setSelectedTab: Dispatch<SetStateAction<T>>;
}) {
    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-center h-[3rem] rounded-xl bg-light-surface-2 px-1 py-0.5">
                <div
                    className={clsx(
                        'w-[50%] h-full flex justify-center items-center text-base rounded-xl',
                        {
                            'border border-light-border':
                                selectedTab === fields[0]
                        },
                        {
                            'text-light-text-3': selectedTab !== fields[0]
                        }
                    )}
                    onClick={() => setSelectedTab(fields[0])}
                >
                    <p>{fields[0]}</p>
                </div>
                <div
                    className={clsx(
                        'w-[50%] h-full flex justify-center items-center text-base rounded-xl ',
                        {
                            'border border-light-border':
                                selectedTab === fields[1]
                        },
                        {
                            'text-light-text-3': selectedTab !== fields[1]
                        }
                    )}
                    onClick={() => setSelectedTab(fields[1])}
                >
                    <p>{fields[1]}</p>
                </div>
            </div>
        </div>
    );
}
