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
            <div className="w-full flex justify-center items-center h-[3rem] rounded-xl bg-light-surface-2 border-light-border border p-[2px]">
                <div
                    className={clsx(
                        'w-[50%] h-full flex justify-center items-center text-base rounded-xl',
                        {
                            'bg-light-surface-2 border-[1px] border-light-border text-light-text-1':
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
                            'bg-light-surface-2 border-[1px] border-light-border text-light-text-1':
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
