




import Image from 'next/image'
import AppIcon from '@/public/img/favicon/apple-touch-icon.png'
import Link from 'next/link'

export default function AuthErrorPage() {
  return (
    <div className='w-dvw min-h-dvh bg-darkest flex items-center justify-center p-y-20'>
        <div  className='w-[90%] min-h-[18rem] bg-darker rounded-xl flex flex-col items-center gap-y-6 p-6'>
            <Image src={AppIcon} width={40} height={40} alt='App Icon' className='py-4'/>
            <p>Sorry, something went wrong.</p>
            <p>Go to <Link href='/auth/login'><span className='text-lime-700'>login</span></Link>  page.</p>
        </div>
    </div>
    
  )
}