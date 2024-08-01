import React from 'react'
import AccountCard from './AccountCard'
import RecentTransaction from './RecentTransaction'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import IncomeExpenseDisplay from './IncomeExpenseDisplay'

const AccountInfo = async() => {
  const session = await getServerSession(authOptions);
  if(!session){
    return "unauthh"
  }
  return (
    <div className='p-1 flex flex-col gap-2 w-[60%]'>
      <AccountCard/>
      <RecentTransaction/>
    </div>
  )
}

export default AccountInfo