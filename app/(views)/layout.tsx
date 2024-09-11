
// import { useContext, useState } from "react";

'use client'

import NavBar from "@/app/ui/components/NavBar";
import MenuBar from "@/app/ui/components/MenuBar";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
          <main className="flex w-screen flex-col items-center justify-center min-h-dvh">
            <MenuBar />
                {children}
            <NavBar />
          </main>
    )
}