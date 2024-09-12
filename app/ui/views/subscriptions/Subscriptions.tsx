
'use client'

// modules
import { useState } from "react";

// local
// import { AppLayout, Item, OptionsSelector, TabBar } from "../../components/AppLayout";
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import OptionsSelector from "../../components/OptionsSelector";
import TabBarOptions from "../../components/TabBarOptions";
import { budgetPlanData } from "@/app/lib/placeholder-data";
import { subscriptionsExpenseListType } from "../../components/definitions";
import User from "@/app/lib/User";
import DisplayChart from "../../components/DisplayChart";
// chart

export default function Subscriptions(
    {data}: {data: subscriptionsExpenseListType}
) {

    // expense page is isDefault = true
    const [isDefault, setIsDefault] = useState<Boolean>(true);

    return (
        <AppLayout data={{
            pageType : 'subscriptions',
            expense: User.getTotalExpense(data)
        }} >
            <TabBarOptions isDefault={isDefault} setIsDefault={setIsDefault} names={['Items', 'Stats']}/>
            <div className="w-[90%] flex flex-col items-center pt-6">
                {isDefault ? 
                    <Items data={data} pageType="subscriptions"/> : <DisplayChart />
                }
            </div>
        </AppLayout>
    )
}