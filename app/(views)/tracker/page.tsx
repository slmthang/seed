

import Tracker from "@/app/ui/views/tracker/Tracker";

import { trackerExpenseListData, trackerIncomeListData } from "@/app/lib/placeholder-data";

export default function Page() {
    return (
        <Tracker incomeList={trackerIncomeListData} expenseList={trackerExpenseListData}/>
    )
}