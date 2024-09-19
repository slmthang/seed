
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

import TrioOverView from '@/app/ui/components/TrioOverview'
import SingleOverview from "../ui/components/SingleOverview"

export default function Page() {

    return (
        <>
        {/* <TrioOverView />
        <SingleOverview /> */}
        <div className="h-[calc(100vh-7rem)] min-h-[calc(100vh-7rem)]  w-screen  bg-darkest flex flex-col justify-center items-center">
            <div className="w-screen flex flex-col justify-center items-center min-h-[20rem] bg-darker mt-[5rem] pb-12 relative pt-[5rem]">

                <div className="w-[90%] h-[6rem] bg-green-400 absolute top-[-3rem]">

                </div>

                <div className="w-screen min-h-[10rem] bg-blue-400 flex items-center justify-center">
                    <div className="w-[90%] h-screen bg-dark">

                    </div>
                </div>
            </div>
        </div>
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