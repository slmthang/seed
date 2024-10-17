
/* ########################################### Client Component ########################################### */

'use client'



/* ########################################### Modules ########################################### */

// remote
import { useState } from "react";

// local
import MenuBar from "../MenuBar";
import NavBar from "../NavBar";
import SideNavBar from "../SideNavBar";



/* ########################################### ViewLayOutHelper ########################################### */


export default function ViewLayOutHelper(
    {children} : {children : React.ReactNode}
) {

    const [sideNav, setSideNav] = useState<Boolean>(false);

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