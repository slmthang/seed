
'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import TrioOverView from '@/app/components/TrioOverview'
import SingleOverview from "../../components/SingleOverview"

import { useEffect, useState } from "react"

import { createClient } from "@/app/lib/supabase/client"

export default function Page() {

    const supabase = createClient();
    const [mysession, setMySession] = useState<any>()

    let userInfo;

    useEffect (() => {

        async function getUserInfo() {

            try {
                userInfo = await supabase.auth.getSession()

            } catch (e) {
                console.error(e);
            }
        };
        
        getUserInfo();

    }, [])
    
    const handleSession = ()=>{
        console.log("userInfo :" , userInfo)
    }
    
    return (
        <>
            <button onClick={handleSession}>Show session info at console</button>
        </>
    )
}

// overflow
{/* <div className="w-screen h-screen bg-gray-500 relative overflow-hidden flex flex-col">
            <div className="w-screen h-[8rem] bg-blue-800">
                <p className="abosolute">sljdflksjd</p>
            </div>
            <div className="z-10 w-screen h-[2rem]  my-6 rounded-3xl bg-green-900 relative flex flex-col justify-center overflow-y-scroll">
                    <div className="w-[80%] h-[6rem] flex flex-col items-center justify-center rounded-xl bg-red-600 absolute top-[-3rem]">

                    </div>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
                    <p className="abosolute">sljdflksjd</p>
            </div>
        </div> */}