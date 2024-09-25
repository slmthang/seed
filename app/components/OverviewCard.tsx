
// modules (local)
import { PageTypes, data3, durations, overViewDataType } from "../lib/definitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptionsSelector from "./OptionsSelector";
import TripleAmountCard from "./TripleAmountCard";
import SingleAmountCard from "./SingleAmountCard";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export default function OverviewCard(
    {pageType, data} : {pageType: PageTypes, data: overViewDataType}
) {
    return (
        <div className="w-screen h-40 min-h-24 flex flex-col items-center justify-center my-6 rounded-xl bg-red-600">
            {/* <div className="w-[95%] h-[95%] bg-blue-500 rounded-xl flex items-center justify-center">
                <div id="income" className="w-[8rem] h-[5rem] bg-purple-600 rounded-xl text-center flex flex-col justify-center">
                    <p> 
                        <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                        Income
                    </p>
                    <p className="text-xl mt-1">$4000.<span className="text-base">00</span></p>
                </div>
                <div id="income" className="w-[8rem] h-[5rem] bg-purple-600 rounded-xl text-center flex flex-col justify-center">
                    <p> 
                        <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                        Income
                    </p>
                    <p className="text-2xl mt-1">$4000.<span className="text-base">00</span></p>
                </div>
                <div id="income" className="w-[8rem] h-[5rem] bg-purple-600 rounded-xl text-center flex flex-col justify-center">
                    <p> 
                        <FontAwesomeIcon icon={faSquare} className="fa-fw fa-2xs text-green-500 mr-1"/>
                        Income
                    </p>
                    <p className="text-xl mt-1">$4000.<span className="text-base">00</span></p>
                </div>
            </div> */}
        </div>
    )
}