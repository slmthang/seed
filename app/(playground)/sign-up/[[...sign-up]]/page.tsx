'use client'

import { AppIcon, GoogleIcon } from '@/app/ui-components/Icons';
import HRLine from '@/app/ui-components/HRLine';
import Link from 'next/link';
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

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

export default function SignUpPage() {
  return (
    <div className="w-screen p-4">
      <SignUp.Root>
        <SignUp.Step
          name="start"
          className="w-full bg-darker border-dark border py-8 px-4 rounded-xl"
        >
          <header className="flex items-center justify-center flex-col mb-4">
            <AppIcon />
            <h1 className="mt-4 text-lg font-medium tracking-tight text-light">
              Create an account
            </h1>
          </header>

          <Clerk.Connection name="google" className='w-full h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-xl'>
            <GoogleIcon />
            Sign up with Google
          </Clerk.Connection>

          <div className='w-full h-[3rem] rounded-xl mt-4 flex items-center justify-center'>
            <p className='font-thin text-sm'>
              Already have an account? 
              <Link href='/sign-in'>
                <span className='font-normal ml-2'>Sign in</span>
              </Link>
            </p>
          </div>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  )
}