import React from 'react'
import NumberTicker from './ui/NumberTicker'
import { getExpenseAmount, getIncomeAmount } from '../actions/account'
import { SpendByCategory } from '../actions/user'

type props = {
   userId:number
}

const IncomeExpenseDisplay = async({userId}:props) => {
    const incomeMoney = await getIncomeAmount(userId);
    const expenseMoney = await getExpenseAmount(userId);
    const cats = await SpendByCategory(userId);
  return (
    <div className='mt-8 p-1 py-3 flex w-full justify-between px-2 divide-x-2'>
        <div className='flex flex-col items-center  w-full'>
            <p className='text-2xl'>Income</p>
            <div className='flex mt-9'>
                {incomeMoney===0?(
                    <p className='font-semibold text-4xl text-yellow-300'>0 <sup className='text-xl'>$</sup></p>
                ):(
                    <span><NumberTicker value={incomeMoney ?? 0} className='font-semibold text-4xl text-[rgb(220,255,124)]'/>$</span>
                )}
            </div>
        </div>
        <div className='flex flex-col items-center w-full'>
            <p className='text-2xl'>Expense</p>
            <div className='flex mt-9'>
                <NumberTicker value={expenseMoney} className='font-semibold text-4xl text-red-500' direction='up'/>$ 
            </div>
        </div>
    </div>
  )
}

export default IncomeExpenseDisplay