import React from 'react'
import AnimatedGradientText from './ui/AnimatedShinyText'
import IncomeExpenseDisplay from './IncomeExpenseDisplay'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import Facts from './Facts'

const CreditDebitInfo = async() => {
  const session = await getServerSession(authOptions);
  if(!session){
    return "Unauthhh!"
  }
  return (
    <div className='w-[42%] border p-4'>
        <header className='flex items-center justify-center'>
            <AnimatedGradientText className='text-yellow-400 text-3xl'>
              Reports
            </AnimatedGradientText>
        </header>
        <IncomeExpenseDisplay userId={session.user.id}/>
        <Facts/>
    </div>
  )
}

export default CreditDebitInfo