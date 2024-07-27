import Image from 'next/image'
import React from 'react'
import AnimatedShinyText from './ui/AnimatedShinyText'
import CustomButton from './CustomButton'
import NavigateButton from './NavigateButton'

const HeroSection = () => {
  return (
    <div className='flex w-full p-5 pt-16 gap-3'>
        <div className='w-[50%] p-1 pl-12 flex gap-3  flex-col'>
            <AnimatedShinyText className='flex justify-start w-full '>
                Under Construction 🚀
            </AnimatedShinyText>
            <h2 className='font-semibold text-[rgb(225,255,140)] text-[3rem] m-0 p-0'>Revolutionizing Personal Finance</h2>
            <p className='text-[rgb(161,161,161)]'>Simplify your financial management with BudgetBuddy. Track your earnings and expenditures to make informed financial decisions</p>
          {/* <CustomButton>Get Started</CustomButton> */}
          <NavigateButton to='/home'>Get Started</NavigateButton>
        </div>
        <div className='w-[50%] p-1 flex justify-center'>
            <Image src={"/mockup.png"} height={200} width={250} alt='okk'/>
        </div>
    </div>
  )
}
export default HeroSection