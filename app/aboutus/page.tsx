import React from 'react'
import Appbar from '../components/Appbar'
import BoxReveal from '../components/ui/BoxReveal'
import SparklesText from '../components/ui/SparkleText'

const page = () => {
  return (
    <div>
        <Appbar/>
        <div className='pt-12 flex justify-between gap-1 text-white p-5 w-full border'>
            <div className='flex flex-col gap-4 items-start justify-center p-5 border w-[50%]'>
            <BoxReveal width={"100%"} >
                {/* <p className='text-3xl font-semibold text-yellow-200 tracking-wider'>About US</p> */}
                <SparklesText text='BudgetBuddy' className='mb-6'/>
            </BoxReveal>
            <BoxReveal width={"100%"}>
                <p>Welcome to <span className='font-bold text-yellow-200'>BudgetBuddy</span>, your trusted partner in finance management. Our mission is to empower individuals and businesses with the tools they need to take control of their financial future.</p>
            </BoxReveal>
            <BoxReveal width={"100%"} boxColor='#fef08a'>
                <p>At the core of our offering is an intuitive app designed to keep a meticulous record of your credit and debit accounts. Whether you want to track your income, monitor your expenses, or analyze your spending habits, our app provides a comprehensive overview with easy-to-understand graphs and charts.</p>
            </BoxReveal>
            <BoxReveal width={"100%"}>
                <p>We believe that financial transparency is key to making informed decisions. That&apos;s why our app ensures you have access to a detailed transaction history at your fingertips. With <span className='font-bold text-yellow-200'>BudgetBuddy</span>, managing your finances has never been simpler or more efficient.</p>
            </BoxReveal>
            <BoxReveal width={"100%"} boxColor='#fef08a'>
                <p>Join us on a journey to financial clarity and stability. Let’s build a brighter financial future together.</p>
            </BoxReveal>
            </div>
        </div>
    </div>
  )
}

export default page