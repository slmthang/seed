export default function BudgetPlanEmptyExpenses() {
    return (
        <div
            className={
                'w-full h-[8rem] flex flex-col rounded-2xl justify-center items-center bg-light-surface-0 border-[1px] border-light-border'
            }
        >
            <h1 className="text-xl">EMPTY</h1>
            <p className="text-sm font-thin">
                Add an item by clicking the add button.
            </p>
        </div>
    );
}
