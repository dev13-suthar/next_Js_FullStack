import React from 'react'
import AnimatedGradientText from './ui/AnimatedShinyText'
import BarChart from './ui/BarChart'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import { getExpenseAmount, getIncomeAmount } from '../actions/account'


const MyBudget = async() => {
  const session = await getServerSession(authOptions);
  if(!session){
    return "Unauthh"
  }
  const income = await getIncomeAmount(session.user.id);
  const expense = await getExpenseAmount(session.user.id)
  return (
    <div className='mt-14'>
        <AnimatedGradientText className='text-2xl'>My Budget</AnimatedGradientText>
        <div className='flex justify-center w-full p-5'>
            {
              income===0 && expense===0 ? (
                <div className='flex items-center justify-center'>
                  <p className='text-yellow-300'>No Data to Display</p>
                </div>
              ):(
                <BarChart income={income} expense={expense}/>
              )
            }
        </div>
    </div>
  )
}

export default MyBudget