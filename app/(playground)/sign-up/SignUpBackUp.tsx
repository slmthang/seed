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
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <div className="w-full pace-y-4">
            <ClerkField name='firstName' label='First Name' placeholder='Enter First Name'/>
            <ClerkField name='lastName' label='Last Name' placeholder='Enter Last Name'/>
            <ClerkField name='emailAddress' label='Email' placeholder='Enter your Email'/>
            <ClerkField name='password' label='Password' placeholder='Enter your Password'/>
          </div>
          <SignUp.Captcha className="empty:hidden" />
          <SignUp.Action submit className='w-full h-[3rem] flex mt-6 justify-center items-center bg-dark rounded-xl'>Sign up</SignUp.Action>
          <div className='w-full h-[3rem] rounded-xl mt-4 flex items-center justify-center'>
            <p className='font-thin text-sm'>
              Already have an account? 
              <Link href='/sign-in'>
                <span className='font-normal ml-2'>Sign in</span>
              </Link>
            </p>
          </div>

          <HRLine />

          <Clerk.Connection name="google" className='w-full h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-xl'>
            <GoogleIcon />
            Sign up with Google
          </Clerk.Connection>
        </SignUp.Step>
        <SignUp.Step
          name="verifications"
          className="w-full bg-darker border-dark border py-8 px-4 rounded-xl"
        >
          <header className="flex items-center justify-center flex-col mb-4">
            <AppIcon />
            <h1 className="mt-4 text-lg font-medium tracking-tight text-light">
              Verify Email Code
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <SignUp.Strategy name="email_code">
            <ClerkField name='code' label='Email Code' placeholder='Enter code here' />
            <SignUp.Action
              submit
              className='w-full h-[3rem] bg-dark rounded-xl mt-4'
            >
              Finish registration
            </SignUp.Action>
            <SignUp.Action
              resend
              fallback={({ resendableAfter }) => <p>Resend code in {resendableAfter} second(s)</p>}
              className='w-full h-[3rem] bg-dark rounded-xl mt-4'
            >
              Resend code
            </SignUp.Action>
          </SignUp.Strategy>
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