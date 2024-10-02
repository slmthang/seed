'use client'

import { AppIcon, GoogleIcon } from '@/app/ui-components/Icons'
import HRLine from '@/app/ui-components/HRLine'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <SignIn.Root>
      <SignIn.Step name="start" className='w-[90%] border border-dark bg-darker py-10 px-2 flex justify-center items-center flex-col'>
        <div className='w-[90%] flex gap-y-2 flex-col justify-center items-center mb-8 p-1'>
          <AppIcon />
          <h3 className=' font-thin'>Sign in to your account</h3>
        </div>

        <div className='w-[90%]'>
          <Clerk.Field name="identifier" className='w-[100%]'>
            <Clerk.Label className='block font-light mb-1'>Email</Clerk.Label>
            <Clerk.Input className='w-[100%] h-[3rem] rounded-lg bg-dark pl-4' placeholder='Enter your email'/>
            <Clerk.FieldError />
          </Clerk.Field>

          <SignIn.Action submit className='w-[100%] h-[3rem] bg-dark rounded-lg mt-4'>
            Continue
          </SignIn.Action>
        </div>

        <div className='w-[90%] h-[3rem] rounded-lg mt-4 flex items-center justify-center'>
          <p className='font-thin text-sm'>
            Don't have an account? 
            <Link href='/sign-up'>
              <span className='font-normal ml-2'>Sign up</span>
            </Link>
          </p>
        </div>

        <HRLine />

        <Clerk.Connection name="google" className='w-[90%] h-[3rem] flex gap-x-2 justify-center items-center bg-dark rounded-lg'>
          <GoogleIcon />
          Sign in with Google
        </Clerk.Connection>

      </SignIn.Step>



      <SignIn.Step name="verifications" className='w-[90%] border border-dark bg-darkest py-10 px-2 flex justify-center items-center flex-col'>
        <SignIn.Strategy name="email_code">
          <div className='w-[90%] flex gap-y-2 flex-col justify-center items-center mb-8 p-1'>
            <AppIcon />
            <h3 className=' font-thin'>Check your email.</h3>
            <p className='font-thin'>
              We sent a code to <span><SignIn.SafeIdentifier /></span>.
            </p>
          </div>

          <Clerk.Field name="code">
            <Clerk.Label className='block font-light mb-1'>Email code</Clerk.Label>
            <Clerk.Input className='w-[100%] h-[3rem] rounded-lg bg-dark pl-4' placeholder='Enter code here'/>
            <Clerk.FieldError />
          </Clerk.Field>

          <SignIn.Action submit className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'>Continue</SignIn.Action>
          <SignIn.Action
            resend
            fallback={({ resendableAfter }) => <p>Resend code in {resendableAfter} second(s)</p>}
            className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'
          >
            Resend code
          </SignIn.Action>
        </SignIn.Strategy>

        <SignIn.Strategy name="password">
          <div className='w-[90%] flex gap-y-2 flex-col justify-center items-center mb-8 p-1'>
            <AppIcon />
            <h3 className=' font-thin'>Enter your password</h3>
          </div>

          <Clerk.Field name="password" className='w-[90%]'>
            <Clerk.Label className='block mb-1'>Password</Clerk.Label>
            <Clerk.Input className='w-[100%] h-[3rem] rounded-lg text-dark pl-4' placeholder='Enter your password'/>
            <Clerk.FieldError />
          </Clerk.Field>

          <SignIn.Action submit className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'>Continue</SignIn.Action>
          <SignIn.Action navigate="forgot-password" className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'>Forgot password?</SignIn.Action>
        </SignIn.Strategy>

        <SignIn.Strategy name="reset_password_email_code">
          <div className='w-[90%] flex gap-y-2 flex-col justify-center items-center mb-8 p-1'>
            <AppIcon />
            <h3 className=' font-thin'>Check your email.</h3>
            <p className='font-thin'>
              We sent a code to <span><SignIn.SafeIdentifier /></span>.
            </p>
          </div>
          

          <Clerk.Field name="code" className='w-[90%]'>
            <Clerk.Label className='block font-light mb-1'>Email code</Clerk.Label>
            <Clerk.Input className='w-[100%] h-[3rem] rounded-lg bg-dark pl-4' placeholder='Enter code here'/>
            <Clerk.FieldError />
          </Clerk.Field>

          <SignIn.Action submit className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'>Continue</SignIn.Action>
          <SignIn.Action
            resend
            fallback={({ resendableAfter }) => <p>Resend code in {resendableAfter} second(s)</p>}
            className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'
          >
            Resend code
          </SignIn.Action>
        </SignIn.Strategy>
      </SignIn.Step>

      <SignIn.Step name="forgot-password" className='w-[90%] border border-dark bg-darkest py-10 px-2 flex justify-center items-center flex-col'>
        <div className='w-[90%] flex gap-y-2 flex-col justify-center items-center mb-8 p-1'>
          <AppIcon />
          <h3 className=' font-thin'>Forgot your password?</h3>
        </div>

        <div className='w-[90%] h-[3rem] bg-dark rounded-lg flex justify-center items-center mb-4'>
          <SignIn.SupportedStrategy name="reset_password_email_code">
            Reset Password
          </SignIn.SupportedStrategy>
        </div>
          

        <SignIn.Action navigate="previous" className='w-[90%] h-[3rem] bg-dark rounded-lg'>Go back</SignIn.Action>
      </SignIn.Step>

      <SignIn.Step name="reset-password" className='w-[90%] border border-dark bg-darker py-10 px-2 flex justify-center items-center flex-col rounded-lg'>
        <div className='w-[90%] flex gap-y-2 flex-col justify-center items-center mb-8 p-1'>
          <AppIcon />
          <h3 className=' font-thin'>Reset your password.</h3>
        </div>

        <Clerk.Field name="password" className='w-[90%] mb-4'>
          <Clerk.Label className='block font-light mb-1'>New password</Clerk.Label>
          <Clerk.Input className='w-[100%] h-[3rem] rounded-lg bg-dark pl-4' placeholder='Enter password'/>
          <Clerk.FieldError />
        </Clerk.Field>

        <Clerk.Field name="confirmPassword" className='w-[90%] mb-4'>
          <Clerk.Label className='block font-light mb-1'>Confirm password</Clerk.Label>
          <Clerk.Input className='w-[100%] h-[3rem] rounded-lg bg-dark pl-4' placeholder='Confirm password'/>
          <Clerk.FieldError />
        </Clerk.Field>

        <SignIn.Action submit className='w-[90%] h-[3rem] bg-dark rounded-lg mt-4'>Reset password</SignIn.Action>
      </SignIn.Step>
    </SignIn.Root>
  )
}