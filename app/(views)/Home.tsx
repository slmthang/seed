
'use client'

// modules (remote)
import Link from "next/link";

// modules (local)
import OptionsSelector from "../components/OptionsSelector";
import SingleAmountCard from "../components/SingleAmountCard";
import TripleAmountCard from "../components/TripleAmountCard";

// data (local)
import { SmallWidgetDataType, LargeWidgetDataType, durations } from "../components/definitions";

import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";
import TrioOverView from '@/app/components/TrioOverview';
import SingleOverview from "../components/SingleOverview";
import SingleWidget from "../components/SingleWidget";
import TrioWidget from '@/app/components/TrioWidget';



export default function Home() {

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    return (
        <div className=" w-screen h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)] overflow-y-scroll pt-[2rem]">
            
            <div className="w-screen min-h-[100%] bg-darker border-t-[1px] border-dark mt-[8rem] pt-[9.5rem] pb-[4rem] relative flex flex-col justify-center items-center py-[2rem] gap-y-6">
                <TrioWidget pageType="tracker" B={AppData.tracker.balance} I={AppData.tracker.income} E={AppData.tracker.expense}/>
                <TrioWidget pageType="budget-plan" B={AppData.budgetPlan.balance} I={AppData.budgetPlan.budget} E={AppData.budgetPlan.expense}/>
                <SingleWidget pageType="subscriptions" B={AppData.subscriptions.expense}/>
                <SingleWidget pageType="savings" B={AppData.savings.expense}/>
            </div>
        
        </div>
    )
}