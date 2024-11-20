export default function BudgetPlanEmptyExpenses() {
    return (
        <div className="w-[90%] min-h-fit bg-dark-surface-1 rounded-2xl border-[1px] border-dark flex flex-col justify-center items-center my-4">
            <div className="w-[100%] flex flex-col items-center">
                <div className="w-full flex flex-col justify-center items-center mt-2 p-5">
                    <h1 className="text-xl mb-4">EMPTY</h1>
                    <p className="text-sm font-thin">
                        Add an item by clicking the add button.
                    </p>
                </div>
            </div>
        </div>
    );
}
