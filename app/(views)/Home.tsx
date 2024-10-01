
'use client'

// modules (remote)
import Link from "next/link";

// modules (local)
import OptionsSelector from "../ui-components/OptionsSelector";
import SingleAmountCard from "../ui-components/SingleAmountCard";
import TripleAmountCard from "../ui-components/TripleAmountCard";

// data (local)
import { SmallWidgetDataType, LargeWidgetDataType, durations } from "../lib/definitions";

import { AppDataContext } from "@/app/lib/contexts";
import { useContext } from "react";
import TrioOverView from '@/app/ui-components/TrioOverview';
import SingleOverview from "../ui-components/SingleOverview";
import SingleWidget from "../ui-components/SingleWidget";
import TrioWidget from '@/app/ui-components/TrioWidget';
import { AddButtonIcon } from "../ui-components/Icons";



export default function Home() {

    const [AppData, AppDataFunction]= useContext(AppDataContext);

    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[5rem]">
            
            <AddButtonIcon tailwindClass=" !size-11 fill-light stroke-light fixed bottom-[4.25rem] right-[1rem] z-10"/>

            <div className="w-screen min-h-full bg-darker border-t-[1px] border-dark mt-[8rem] pt-[9.5rem] pb-[8rem] relative flex flex-col justify-center items-center py-[2rem] gap-y-6">
                <TrioWidget cardName="Tracker" pathName="/tracker" optionsSelctor={true} tailwindClass="absolute top-[-8rem]" B={AppData.tracker.balance} I={AppData.tracker.income} E={AppData.tracker.expense}/>
                <TrioWidget cardName="Budget Plan A" pathName="/budget-plans/one" B={AppData.budgetPlan.balance} I={AppData.budgetPlan.budget} E={AppData.budgetPlan.expense}/>
                <SingleWidget pageType="subscriptions" B={AppData.subscriptions.expense}/>
                <SingleWidget pageType="savings" B={AppData.savings.expense}/>
            </div>
        
        </div>
    )
}