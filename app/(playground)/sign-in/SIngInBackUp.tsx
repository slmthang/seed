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

        <div className='w-[90%]'>
          <ClerkField name='identifier' label='Email' placeholder='Enter your email'/>

          <SignIn.Action submit className='w-[100%] h-[3rem] bg-dark rounded-xl mt-4'>
            Continue
          </SignIn.Action>
        </div>

        <div className='w-[90%] h-[3rem] rounded-xl mt-4 flex items-center justify-center'>
          <p className='font-thin text-sm'>
            Don&apos;t have an account? 
            <Link href='/sign-up'>
              <span className='font-normal ml-2'>Sign up</span>
            </Link>
          </p>
        </div>

        <HRLine />

        <Clerk.Connection name="google" className='w-[90%] h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-xl'>
          <GoogleIcon />
          Sign in with Google
        </Clerk.Connection>

      </SignIn.Step>



      <SignIn.Step name="verifications" className='w-[90%] border border-dark bg-darkest py-10 px-2 flex justify-center items-center flex-col'>
        <SignIn.Strategy name="email_code">
          <header className="flex items-center justify-center flex-col mb-4">
            <AppIcon />
            <h1 className="mt-4 text-lg font-medium tracking-tight text-light">
              Check your email.
            </h1>
            <p className='font-thin text-light'>
              We sent a code to <span><SignIn.SafeIdentifier /></span>.
            </p>
          </header>

          <ClerkField name='code' label='Email Code' placeholder='Enter code here'/>

          <SignIn.Action submit className='w-[90%] h-[3rem] bg-dark rounded-xl mt-4'>Continue</SignIn.Action>
          <SignIn.Action
            resend
            fallback={({ resendableAfter }) => <p>Resend code in {resendableAfter} second(s)</p>}
            className='w-[90%] h-[3rem] bg-dark rounded-xl mt-4'
          >
            Resend code
          </SignIn.Action>
        </SignIn.Strategy>

        <SignIn.Strategy name="password">
          
          <header className="flex items-center justify-center flex-col mb-4">
            <AppIcon />
            <h1 className="mt-4 text-lg font-medium tracking-tight text-light">
              Enter your password
            </h1>
          </header>

          <div className='w-[90%]'>
            <ClerkField name='password' label='Passsword' placeholder='Enter your password'/>

            <SignIn.Action submit className='w-full h-[3rem] bg-dark rounded-xl mt-4'>Continue</SignIn.Action>
            <SignIn.Action navigate="forgot-password" className='w-full h-[3rem] bg-dark rounded-xl mt-4'>Forgot password?</SignIn.Action>
          </div>
          
        </SignIn.Strategy>

        <SignIn.Strategy name="reset_password_email_code">
          <header className="flex items-center justify-center flex-col mb-4">
            <AppIcon />
            <h1 className="mt-4 text-lg font-medium tracking-tight text-light">
              Check your email.
            </h1>
            <p className='font-thin'>
              We sent a code to <span><SignIn.SafeIdentifier /></span>.
            </p>
          </header>
          
          <div className='w-[90%]'>
            <ClerkField name='code' label='Email Code' placeholder='Enter code here' />

            <SignIn.Action submit className='w-full h-[3rem] bg-dark rounded-xl mt-4'>Continue</SignIn.Action>
            <SignIn.Action
              resend
              fallback={({ resendableAfter }) => <p>Resend code in {resendableAfter} second(s)</p>}
              className='w-full h-[3rem] bg-dark rounded-xl mt-4'
            >
              Resend code
            </SignIn.Action>
          </div>
          
        </SignIn.Strategy>
      </SignIn.Step>

      <SignIn.Step name="forgot-password" className='w-[90%] border border-dark bg-darkest py-10 px-2 flex justify-center items-center flex-col'>
          <header className="flex items-center justify-center flex-col mb-4">
            <AppIcon />
            <h1 className="mt-4 text-lg font-medium tracking-tight text-light">
              Forgot your password?
            </h1>
          </header>

        <div className='w-[90%] h-[3rem] bg-dark rounded-xl flex justify-center items-center mb-4'>
          <SignIn.SupportedStrategy name="reset_password_email_code">
            Reset Password
          </SignIn.SupportedStrategy>
        </div>
          

        <SignIn.Action navigate="previous" className='w-[90%] h-[3rem] bg-dark rounded-xl'>Go back</SignIn.Action>
      </SignIn.Step>

      <SignIn.Step name="reset-password" className='w-[90%] border border-dark bg-darker py-10 px-2 flex justify-center items-center flex-col rounded-xl'>
        <header className="flex items-center justify-center flex-col mb-4">
          <AppIcon />
          <h1 className="mt-4 text-lg font-medium tracking-tight text-light">
            Reset your password.
          </h1>
        </header>

        <div className='w-[90%]'>
            <ClerkField name='password' label='New Password' placeholder='Enter New Password' />
            <ClerkField name='confirmPassword' label='Confirm Password' placeholder='Confirm Password' />

            <SignIn.Action submit className='w-full h-[3rem] bg-dark rounded-xl mt-4'>Reset password</SignIn.Action>
        </div>
            
      </SignIn.Step>
    </SignIn.Root>
  )
}