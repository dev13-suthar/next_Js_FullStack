import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../lib/auth'
import Transaction from './Transaction';

const RecentTransaction = async() => {
  const session = await getServerSession(authOptions);
  if(!session){
    return "no Sessionn"
  }
  return (
    <div className='mt-2'>
        <header className='text-xl font-semibold'>Transactions</header>
        <Transaction id={session.user.id}/>
    </div>
  )
}

export default RecentTransaction