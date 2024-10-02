'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import { AppIcon, GoogleIcon } from '@/app/ui-components/Icons';
import HRLine from '@/app/ui-components/HRLine';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    

    
      <SignUp.Root>
        {/* <div className='w-screen h-screen flex justify-center items-center bg-blue-700'> */}
          <SignUp.Step name="start" className='w-[90%] border border-dark bg-darker py-10 px-2 flex justify-center items-center flex-col rounded-lg'>
            <div className='w-[90%] flex gap-y-2 flex-col justify-center items-center mb-8 p-1'>
              <AppIcon />
              <h3 className=' font-thin'>Create your account</h3>
            </div>

            <div className='mb-4 flex w-[90%] justify-between items-center'>
              <Clerk.Field name="firstName" className='w-[48%]'>
                <Clerk.Label className='block'>First Name</Clerk.Label>
                <Clerk.Input className='w-full pl-4 h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-lg' placeholder='First Name'/>
                <Clerk.FieldError className='w-full'/>
              </Clerk.Field>

              <Clerk.Field name="lastName" className='w-[48%]'>
                <Clerk.Label className='block'>Last Name</Clerk.Label>
                <Clerk.Input className='w-full pl-4 h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-lg ' placeholder='Last Name'/>
                <Clerk.FieldError className='w-full'/>
              </Clerk.Field>
            </div>

            <Clerk.Field name="emailAddress" className='w-[90%] mb-4'>
              <Clerk.Label className='block'>Email</Clerk.Label>
              <Clerk.Input className='w-full pl-4 h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-lg' placeholder='Email'/>
              <Clerk.FieldError className='w-full'/>
            </Clerk.Field>

            <Clerk.Field name="password" className='w-[90%] mb-4'>
              <Clerk.Label className='block'>Password</Clerk.Label>
              <Clerk.Input className='w-full pl-4 h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-lg' placeholder='Password'/>
              <Clerk.FieldError className='w-full'/>
            </Clerk.Field>

            <SignUp.Captcha />

            <SignUp.Action submit className='w-[90%] h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-lg'>Sign up</SignUp.Action>

            <div className='w-[90%] h-[3rem] rounded-lg mt-4 flex items-center justify-center'>
              <p className='font-thin text-sm'>
                Already have an account? 
                <Link href='/sign-in'>
                  <span className='font-normal ml-2'>Sign in</span>
                </Link>
              </p>
            </div>

            <HRLine />

            <Clerk.Connection name="google" className='w-[90%] h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-lg'>
              <GoogleIcon />
              Sign up with Google
            </Clerk.Connection>
          </SignUp.Step>

          <SignUp.Step name="continue" className='w-[90%] border border-dark bg-darker py-10 px-2 flex justify-center items-center flex-col rounded-lg'>
            <h1>Fill in missing fields.</h1>

            <Clerk.Field name="firstName" className='w-[90%]'>
              <Clerk.Label className='block'>First Name</Clerk.Label>
              <Clerk.Input className='w-full' placeholder='First'/>
              <Clerk.FieldError className='w-full'/>
            </Clerk.Field>

            <Clerk.Field name="lastName" className='w-[90%]'>
              <Clerk.Label className='block'>Last Name</Clerk.Label>
              <Clerk.Input className='w-full' placeholder='Last'/>
              <Clerk.FieldError className='w-full'/>
            </Clerk.Field>

            <SignUp.Action submit>Continue</SignUp.Action>
          </SignUp.Step>

          <SignUp.Step name="verifications" className='w-[90%] border border-dark bg-darker py-10 px-2 flex justify-center items-center flex-col rounded-lg'>

            <SignUp.Strategy name="email_code">
              <div className='w-[90%] flex gap-y-2 flex-col justify-center items-center mb-8 p-1'>
                <AppIcon />
                <h3 className=' font-thin'>Check your email.</h3>
              </div>

              <Clerk.Field name="code" className='w-[90%]'>
                <Clerk.Label className='block font-light mb-1'>Email Code</Clerk.Label>
                <Clerk.Input className='w-[100%] h-[3rem] rounded-lg bg-dark pl-4' placeholder='Enter code here'/>
                <Clerk.FieldError />
              </Clerk.Field>

              <SignUp.Action submit className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'>Verify</SignUp.Action>
              <SignUp.Action
                resend
                fallback={({ resendableAfter }) => <p>Resend code in {resendableAfter} second(s)</p>}
                className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'
              >
                Resend code
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
        {/* </div> */}
      </SignUp.Root>
  )
}