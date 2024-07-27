import React from 'react'
import AccountCard from './AccountCard'
import RecentTransaction from './RecentTransaction'

const AccountInfo = () => {
  return (
    <div className='p-1 flex flex-col gap-2 w-[60%]'>
        <AccountCard/>
        <RecentTransaction/>
    </div>
  )
}

export default AccountInfo