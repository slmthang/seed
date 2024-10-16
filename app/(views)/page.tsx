
// 'use server'

import Home from './Home'
import { currentUser } from '@clerk/nextjs/server'
import { getUserById } from '../lib/db/drizzle'

export default async function Page() {

  // user?.firstName
  
  return (
      <Home />
  )
}