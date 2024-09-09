

import Tracker from "@/app/ui/views/tracker/Tracker";

import { trackerExpenseListData } from "@/app/lib/placeholder-data";

export default function Page() {
    return (
        <Tracker data={trackerExpenseListData}/>
    )
}