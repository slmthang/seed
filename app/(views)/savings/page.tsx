

import Savings from "@/app/ui/views/savings/Savings"

import { savingsExpenseListData } from "@/app/lib/placeholder-data"

export default function Page() {
    return (
        <Savings data={savingsExpenseListData}/>
    )
}