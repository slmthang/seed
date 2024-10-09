
'use client'

import { AddButtonIcon } from "@/app/ui-components/Icons"

export default function AddButton() {

    return (
        <div onClick={() => console.log(444)}>
            <AddButtonIcon tailwindClass='fill-light z-10 fixed bottom-20 right-4 size-12'/>
        </div>
    )
}