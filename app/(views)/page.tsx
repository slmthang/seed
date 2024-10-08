
// 'use server'

import Home from './Home'
import { currentUser } from '@clerk/nextjs/server'
import { getUserById } from '../db/db'

export default async function Page() {

  // user?.firstName
  
  return (
      <Home />
  )
}