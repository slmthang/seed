export default function SearchBar({
    searchInputHandler
}: {
    searchInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className=" w-full h-[2.5rem] flex items-center justify-center relative">
            {
                <input
                    type="text"
                    name="searchExpense"
                    id="searchExpense"
                    placeholder="Search..."
                    onChange={searchInputHandler}
                    className="w-full h-full pl-[1rem] pr-[3rem] rounded-xl bg-light-surface-1 border-[1px] border-light-border text-light-text-2 text-sm placeholder-light-text-2 outline-none focus:outline-none focus:border-blue-700"
                />
            }
        </div>
    );
}
