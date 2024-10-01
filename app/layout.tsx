import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

import { dark } from '@clerk/themes'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <body className={'w-screen h-dvh bg-darkest relative flex items-center justify-center'}>
          
        <ClerkProvider
          appearance={{
            baseTheme: dark
          }}
        >
          {children}
        </ClerkProvider>
        </body>
      </html>
    
  );
}

