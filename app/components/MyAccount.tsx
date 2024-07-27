import React from 'react'
import AccountCard from './AccountCard'
import RecentTransaction from './RecentTransaction'
import AccountInfo from './AccountInfo'
import CreditDebitInfo from './CreditDebitInfo'

const MyAccount = () => {
  return (
    <div className='pt-8 px-6'>
        <header className='text-2xl'>My Account</header>
        <div className='flex gap-1 p-1 border'>
            <AccountInfo/>
            <CreditDebitInfo/>
        </div>
    </div>
  )
}

export default MyAccount