import { twMerge } from 'tailwind-merge';

export default function SearchBar({
    styles,
    searchBarName,
    searchBarPlaceholder,
    searchInputHandler
}: {
    styles?: string;
    searchBarName: string;
    searchBarPlaceholder: string;
    searchInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className=" w-full h-[2.5rem] flex items-center justify-center relative">
            {
                <input
                    type="text"
                    name={searchBarName}
                    id={searchBarName}
                    placeholder={searchBarPlaceholder}
                    onChange={searchInputHandler}
                    className={twMerge(
                        'w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-light-surface-3 border-[1px] border-light-border text-light-text-1 text-sm placeholder-light-text-2 outline-none focus:outline-none focus:border-indigo-700',
                        styles
                    )}
                />
            }
        </div>
    );
}
