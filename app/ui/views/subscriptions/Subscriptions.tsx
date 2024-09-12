
'use client'

// modules
import { useState } from "react";

// local
// import { AppLayout, Item, OptionsSelector, TabBar } from "../../components/AppLayout";
import AppLayout from "../../components/AppLayout";
import Items from "../../components/Items";
import TabBarOptions from "../../components/TabBarOptions";
import { subscriptionsExpenseListType } from "../../components/definitions";
import DisplayChart from "../../components/DisplayChart";
import { calculateTotal } from "@/app/lib/utils";

import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";


export default function Subscriptions() {

    // expense page is isDefault = true
    const [isDefault, setIsDefault] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    return (
        <AppLayout data={{
            pageType : 'subscriptions',
            expense: AppData.subscriptions.expense
        }} >
            <TabBarOptions isDefault={isDefault} setIsDefault={setIsDefault} names={['Items', 'Stats']}/>
            <div className="w-[90%] flex flex-col items-center pt-6">
                {isDefault ? 
                    <Items data={AppData.subscriptions.expenseList} pageType="subscriptions"/> : <DisplayChart />
                }
            </div>
        </AppLayout>
    )
}