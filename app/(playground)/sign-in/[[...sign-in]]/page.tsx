'use client'

import { AppIcon, GoogleIcon } from '@/app/ui-components/Icons'
import HRLine from '@/app/ui-components/HRLine'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'


type ClerkFieldProps = {
  name: string;
  label: string;
  placeholder: string;
}
function ClerkField(
  {name, label, placeholder} : ClerkFieldProps
) {
  return (
    <Clerk.Field name={name} className='w-full mb-4'>
      <Clerk.Label className='block mb-1'>{label}</Clerk.Label>
      <Clerk.Input className='w-full pl-4 h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-xl' placeholder={placeholder}/>
      <Clerk.FieldError className="block text-sm text-red-400"/>
    </Clerk.Field>
  )
}

export default function SignInPage() {
  return (
    <SignIn.Root>
      <SignIn.Step name="start" className='w-[90%] border border-dark bg-darker py-10 px-2 flex justify-center items-center flex-col rounded-xl'>
        <header className="flex items-center justify-center flex-col mb-4">
          <AppIcon />
          <h1 className="mt-4 text-lg font-medium tracking-tight text-light">
            Sign in to your account
          </h1>
        </header>

        <Clerk.Connection name="google" className='w-[90%] h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-xl'>
          <GoogleIcon />
          Sign in with Google
        </Clerk.Connection>

        <div className='w-[90%] h-[3rem] rounded-xl mt-4 flex items-center justify-center'>
          <p className='font-thin text-sm'>
            Don&apos;t have an account? 
            <Link href='/sign-up'>
              <span className='font-normal ml-2'>Sign up</span>
            </Link>
          </p>
        </div>

      </SignIn.Step>
    </SignIn.Root>
  )
}