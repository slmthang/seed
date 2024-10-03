
// 'use server'

import Home from './Home'
import { currentUser } from '@clerk/nextjs/server'
import { getUserById } from '../(playground)/playground/dbtest/db'

export default async function Page() {

  // user?.firstName
  
  return (
      <Home />
  )
}