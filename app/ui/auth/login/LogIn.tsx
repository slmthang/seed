


import Image from 'next/image'
import { login, signup } from '@/app/lib/supabase/actions'
import AppIcon from '@/public/img/favicon/apple-touch-icon.png'
import GoogleIcon from '@/public/img/google-icon.svg'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className='w-dvw min-h-dvh bg-darkest flex items-center justify-center p-y-20'>
        <form className='w-[90%] min-h-[26rem] bg-darker rounded-xl flex flex-col gap-y-6 p-6'>
            <div className='flex flex-col items-center justify-center'>
                <Image src={AppIcon} width={40} height={40} alt='App Icon' className='pb-4'/>
                <p className='text-center font-bold text-lighter'>Sign in to Wallet Vaults</p>
                <p className='text-center text-sm font-extralight text-lighter'>Welcome back! Log in using email and password below.</p>
            </div>
            <div className="relative">
                <input type="email" id="email" className=" block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
            </div>
            <div className="relative">
                <input type="password" id="password" className=" block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
            </div>
            <button formAction={login} className='w-full bg-lime-700 text-sm px-2.5 py-[15px] rounded-lg'>Log in</button>

            <div className='w-full text-sm font-extralight'>
                <p className='text-lighter text-center'>Don&apos;t have an ccount? <Link href='/auth/signup'><span className='text-lightest text-lime-700'>Sign Up</span></Link></p>
            </div>

            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-light"></div>
                <span className="flex-shrink mx-4">Or</span>
                <div className="flex-grow border-t border-light"></div>
            </div>
            <div className='w-full bg-dark text-sm px-2.5 py-[15px] rounded-lg flex items-center justify-center'>
                <Image src={GoogleIcon} width={30} height={30} alt='Google Icon'/>
                <p className='text-center ml-4'>Continue with Google</p>
            </div>
            {/* <button formAction={signup}>Sign up</button> */}
        </form>
    </div>
    
  )
}