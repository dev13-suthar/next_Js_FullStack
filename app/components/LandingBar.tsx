"use client"
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'
import { useRouter } from 'next/navigation'


const LandingBar = () => {
  const router = useRouter()
  return (
    <div className='p-4  bg-stone-950 text-red-100 flex items-center justify-between'>
        <p className='tracking-wider text-xl font-semibold'>BudgetBuddy</p>
        <div className='flex items-center gap-4'>
            <Link href={"/login"}>How it Works?</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/g"}>Features</Link>
        </div>
        <div>
          {/* <button className='p-3 px-5 rounded-2xl bg-[rgb(225,255,140)] text-stone-900'>Login</button> */}
          <CustomButton handleClick={()=>{
            router.push("/signin")
          }}>Login</CustomButton>
        </div>
    </div>
  )
}

export default LandingBar