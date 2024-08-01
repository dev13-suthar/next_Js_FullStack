import React from 'react'
import { getExpenseAmount, getIncomeAmount } from '../actions/account'


type props = {
   userId:number
}

const IncomeExpenseDisplay = async({userId}:props) => {
    const incomeMoney = await getIncomeAmount(userId);
    const expenseMoney = await getExpenseAmount(userId);
  return (
    <div className='mt-8 p-1 py-6 border flex w-full justify-between px-2 divide-x-2 h-auto'>
        <div className='flex flex-col items-center  w-full'>
            <p className='text-2xl'>Income</p>
            <div className='flex mt-9'>
                {incomeMoney===0?(
                    <p className='font-semibold text-4xl text-yellow-300'>0 <sup className='text-xl'>$</sup></p>
                ):(
                    <span className='font-semibold text-4xl text-[rgb(220,255,124)]'>{incomeMoney} <sup>&#8377;</sup></span>
                )}
            </div>
        </div>
        <div className='flex flex-col items-center w-full'>
            <p className='text-2xl'>Expense</p>
            <div className='flex mt-9'>
            {/* <span className='font-semibold text-4xl text-[rgb(220,255,124)]'>{expenseMoney}</span> */}
            {incomeMoney===0?(
                    <p className='font-semibold text-4xl text-yellow-300'>0 <sup className='text-xl'>$</sup></p>
                ):(
                    <span className='font-semibold text-4xl text-[rgb(220,255,124)]'>{expenseMoney} <sup>&#8377;</sup> </span>
                )}
            </div>
        </div>
    </div>
  )
}

export default IncomeExpenseDisplay