

/* ########################################### Client Component ########################################### */

'use client'

/* ########################################### Modules ########################################### */

// remote
import { useState } from "react"

// local
import { ChevronRightIcon, ChevronDownIcon } from "@/app/ui/Icons";
import { Option } from "@/app/ui/views/components/DropDownOption";
/* ########################################### DropDownMenu ########################################### */


export default function Page() {

    return (
        <div className="bg-gray-500 w-screen h-screen flex flex-col items-center justify-center">
            <Option optionName="Group By" subOptions={['Item', 'Category']} order="first"/>
            <Option optionName="Sort By" subOptions={['Name', 'Amount']} />
            <Option optionName="Order By" subOptions={['Asc', 'Desc']} order="last"/>
        </div>
    )
}
