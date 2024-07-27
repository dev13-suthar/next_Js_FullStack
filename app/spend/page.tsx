import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../lib/auth';
import Link from 'next/link';
import CreditDebitForm from '../components/CreditDebitForm';

const Spend = async() => {
    const session = await getServerSession(authOptions);
  if(!session){
    return null;
  }
  return (
    <div className='text-white p-8'>
        <header className='pt-3 flex items-center justify-center gap-3'>
           <Link href={"/home"} className='text-4xl'>&larr;</Link>
           <p className='text-[rgb(225,255,140)] text-3xl'>Add Money</p>
        </header>
        <div className='pt-14'>
              <CreditDebitForm type="Debit" userId={session?.user.id}/>
        </div>
    </div>
  )
}

export default Spend