import React from 'react'
import LoginForm from '../components/LoginForm'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='p-14 text-white flex items-center justify-center'>
          <div className='flex flex-col items-center p-4 mt-16 gap-5 w-full'>
              <header className='flex flex-col gap-2'>
                <Link href={"/"} aria-label='Back'>&larr;</Link>
                  <p className='text-3xl tracking-wider text-slate-100'>Welcome To <span className='logo'>BudgetBuddy</span></p>
                  <p className='text-[12px] text-slate-400'>New Here? <Link href={"/signup"}>Click here</Link></p>
              </header>
              {/* Login Form */}
              <LoginForm/>
          </div>
    </div>
  ) 
}

export default SignUp