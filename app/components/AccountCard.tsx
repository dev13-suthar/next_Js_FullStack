import { MagicCard } from './ui/MagicCard'
import NavigateButton from './NavigateButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import { getBalanceUser } from '../actions/account'

const getBalance = async()=>{
  const session = await getServerSession(authOptions);
  if(session){
    const balance = await getBalanceUser(session?.user.id);
    return balance;
  }
}


const AccountCard = async() => {
  const balance = await getBalance();
return (
    <div className='px-5 py-5'>
        <MagicCard className='flex flex-col gap-1 p-4 w-[350px] py-5 border-none'>
            <div className='text-gray-400 text-[14px]'>My Wallet</div>
            <p className='text-5xl text-slate-100 pt-6'>&#x20B9; {balance}</p>
            <div className='flex justify-between items-center'>
                {/* <button className=''>+Add Money</button> */}
                <NavigateButton className='w-[150px] px-3 py-2 rounded-xl mt-6 bg-yellow-50/30 text-yellow-500 font-light' to='/add'>
                  +Add Money
                </NavigateButton>
                <NavigateButton className='w-[150px] px-3 py-2 rounded-xl mt-6 bg-yellow-50/30 text-yellow-500 font-light' to='/spend'>
                  &rarr; Spend Money
                </NavigateButton>
            </div>
        </MagicCard>
    </div>
  )
}

export default AccountCard