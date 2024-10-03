
'use client'

// modules (remote)
import Link from "next/link";

// modules (local)
import OptionsSelector from "../ui-components/OptionsSelector";
import SingleAmountCard from "../ui-components/SingleAmountCard";
import TripleAmountCard from "../ui-components/TripleAmountCard";

// import { cookies } from "next/headers";
// data (local)
import { SmallWidgetDataType, LargeWidgetDataType, durations } from "../lib/definitions";

// import { AppDataContext } from "@/app/lib/contexts";
// import { useContext } from "react";
import TrioOverView from '@/app/ui-components/TrioOverview';
import SingleOverview from "../ui-components/SingleOverview";
import SingleWidget from "../ui-components/SingleWidget";
import TrioWidget from '@/app/ui-components/TrioWidget';
import { AddButtonIcon } from "../ui-components/Icons";
import { setUserIdCookie } from "../lib/cookie";
import { createUser, getUserById, userExist} from "../(playground)/playground/dbtest/db";
import { useEffect } from "react";

// import { currentUser } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { getBudgetPlansByUserId } from "../(playground)/playground/dbtest/db";

export default async function Home() {

    // const [AppData, AppDataFunction]= useContext(AppDataContext);

    const {user} = await useUser();
    

    useEffect(() => {

        (async () => {
            const budgetPlans = await getBudgetPlansByUserId(user!.id);

            if (user &&
                user.id &&
                user.firstName &&
                user.lastName &&
                user.primaryEmailAddress
            ) {
        
                if (!(await userExist(user.id))) {
                    const added = await createUser(
                        {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user!.lastName,
                            email: user.primaryEmailAddress.emailAddress
                        }
                    )
                }
            }
        })()
        
    }, [])
    

    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[5rem]">
            <h1>{user?.fullName}</h1>
            <AddButtonIcon tailwindClass=" !size-11 fill-light stroke-light fixed bottom-[4.25rem] right-[1rem] z-10"/>

            <div className="w-screen min-h-full bg-darker border-t-[1px] border-dark mt-[8rem] pt-[9.5rem] pb-[8rem] relative flex flex-col justify-center items-center py-[2rem] gap-y-6">
                {/* <TrioWidget cardName={budgetPlans[0].budgetPlanName} pathName="/tracker" optionsSelctor={true} tailwindClass="absolute top-[-8rem]" B={budgetPlans[0].balance} I={budgetPlans[0].budget} E={budgetPlans[0].expense}/> */}
                {/* <TrioWidget cardName="Budget Plan A" pathName="/budget-plans/one" B={AppData.budgetPlan.balance} I={AppData.budgetPlan.budget} E={AppData.budgetPlan.expense}/>
                <SingleWidget pageType="subscriptions" B={AppData.subscriptions.expense}/>
                <SingleWidget pageType="savings" B={AppData.savings.expense}/> */}
            </div>
        
        </div>
    )
}