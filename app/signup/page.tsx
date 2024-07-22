import React from 'react'
import SignupForm from '../components/SignupForm'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='p-14 text-white flex items-center justify-center'>
          <div className='flex flex-col items-center p-4 mt-16 gap-5 w-full'>
              <header className='flex flex-col gap-2'>
                  <Link href={"/"}>&larr;</Link>
                  <p className='text-3xl tracking-wider text-slate-100'>Welcome To <span className='logo'>BudgetBuddy</span></p>
                  <p className='text-[12px] text-slate-400'>Already member? <Link href={"/signin"}>Click here</Link></p>
              </header>
              {/* Signup Form */}
                <SignupForm/>
          </div>
    </div>
  )
}

export default SignUp