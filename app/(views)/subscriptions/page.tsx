

import Subscriptions from "@/app/ui/views/subscriptions/Subscriptions"
import { subscriptionsExpenseListData } from "@/app/lib/placeholder-data"

export default function Page() {
    return (
        <Subscriptions data={subscriptionsExpenseListData}/>
    )
}