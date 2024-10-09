'use client'

import { useState } from "react";
import MenuBar from "../ui-components/MenuBar";
import NavBar from "../ui-components/NavBar";
import SideNavBar from "./SideNavBar";

export default function ViewLayOutHelper(
    {children} : {children : React.ReactNode}
) {

    const [sideNav, setSideNav] = useState<Boolean>(false);

    console.log('SideNavStatus: ', sideNav)

    return (
        <>
            {sideNav && <SideNavBar sideNavToggle={setSideNav}/>}
            <main className={"overflow-hidden relative w-screen h-dvh justify-center items-center flex " + (sideNav ? 'ml-[60%]' : '') }>
                    
                <MenuBar sideNavToggle={setSideNav} />
                
                {children}
                
                <NavBar />

            </main>
        </>
    )
}