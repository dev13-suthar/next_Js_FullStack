import React from 'react'
import Appbar from '../components/Appbar'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import PieChart from '../components/PieChart'

const Stats = async() => {
    const session =  await getServerSession(authOptions);
    if(!session){
        return "Unauthorized"
    }
  return (
    <div className='text-white'>
        <Appbar/>
        <PieChart userId={session.user.id}/>
    </div>
  )
}

export default Stats