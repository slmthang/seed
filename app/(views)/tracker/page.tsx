

import Tracker from "@/app/ui/views/tracker/Tracker";

import { trackerItemsListData } from "@/app/lib/placeholder-data";

export default function Page() {
    return (
        <Tracker itemsList={trackerItemsListData}/>
    )
}