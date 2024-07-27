'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Avatar from 'react-avatar'

const Appbar = () => {
    const {data}= useSession();
  return (
    <div className='p-2 flex gap-3 px-8 justify-between items-center bg-stone-950'>
        <div className='flex gap-4'>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Stats</Link>
            <Link href={"/"}>About Us</Link>
        </div>
        <div className='flex gap-5 items-center '>
            {
                data?.user?.name === null ? (
                    <Avatar name={"loadingg"} size='50' round={true}/>
                ):(
                    <Avatar name={data?.user?.name} size='50' round={true}/>
                )
            }
            <button onClick={()=>signOut()} className='p-2 rounded-md bg-yellow-200 text-stone-800'>SignOut</button>
        </div>
    </div>
  )
}

export default Appbar