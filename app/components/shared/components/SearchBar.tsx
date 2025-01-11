import { twMerge } from 'tailwind-merge';

export default function SearchBar({
    style,
    searchBarName,
    searchBarPlaceholder,
    searchInputHandler
}: {
    style?: string;
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
                        'w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-light-surface-1 border-[1px] border-light-border text-light-text-2 text-sm placeholder-light-text-2 outline-none focus:outline-none focus:border-blue-700',
                        style
                    )}
                />
            }
        </div>
    );
}
