
import Home from './Home'
import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {

  const user = await currentUser()

  user?.firstName
  
  return (
      <Home />
  )
}