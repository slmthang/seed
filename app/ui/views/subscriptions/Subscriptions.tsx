
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
import SingleOverview from "../../components/SingleOverview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import Tabs from "../../components/Tabs";


export default function Subscriptions() {

    // expense page is isDefault = true
    const [isDefaultTab, setIsDefaultTab] = useState<Boolean>(true);

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    return (
        // <AppLayout data={{
        //     pageType : 'subscriptions',
        //     expense: AppData.subscriptions.expense
        // }} >
        //     <TabBarOptions isDefault={isDefault} setIsDefault={setIsDefault} names={['Items', 'Stats']}/>
        //     <div className="w-[90%] flex flex-col items-center pt-6">
        //         {isDefault ? 
        //             <Items data={AppData.subscriptions.expenseList} pageType="subscriptions"/> : <DisplayChart />
        //         }
        //     </div>
        // </AppLayout>
        <div className="h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] w-screen overflow-y-scroll flex flex-col items-center gap-y-4">
            <SingleOverview  pageType="subscriptions" B={AppData.subscriptions.expense} />
            <div className="w-screen rounded-t-2xl flex flex-col items-center bg-darker pb-[4rem]">
                <Tabs tabOptions={['Items', 'Stats']} isDefaultTab={isDefaultTab} setIsDefaultTab={setIsDefaultTab}/>
                <div className="w-[90%] flex flex-col items-center pt-6">
                    {isDefaultTab ? 
                        <Items data={AppData.subscriptions.expenseList} pageType="subscriptions"/> : <DisplayChart pageType="subscriptions"/>
                    }
                </div>
            </div>
        </div>
    )
}