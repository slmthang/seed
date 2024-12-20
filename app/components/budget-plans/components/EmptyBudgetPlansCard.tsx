/* ########################################### EmptyBudgetPlans ########################################### */

export default function EmptyBudgetPlansCard() {
    return (
        <div
            className={
                'w-full h-[8rem] flex flex-col rounded-2xl justify-center items-center bg-dark-surface-1 border-[1px] border-dark-border'
            }
        >
            <h1 className="text-xl">EMPTY</h1>
            <p className="text-sm font-thin">
                Add a budget plan by clicking the add button.
            </p>
        </div>
    );
}
