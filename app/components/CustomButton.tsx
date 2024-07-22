"use client"
import React from 'react'

// Use full Tailwind Classes for Giving Props
// Eg for Border: border-blue-200
interface props{
    BorderRadius?:string,
    width?:string
    background?:string,
    fontStyle?:string
    children:React.ReactNode
    handleClick?:()=>void
    classname?:string,
}

const CustomButton = ({children,BorderRadius="2xl",background="rgb(225,255,140)",fontStyle="bold",width="w-max",handleClick,classname}:props) => {
  return (
       <div className='w-full flex justify-start py-3'>
            <button onClick={handleClick} className={`${width} p-3 px-8 bg-[${background}] rounded-${BorderRadius} text-slate-950 font-${fontStyle} ${classname}`}>
                {children}
            </button>
       </div>
  )
}

export default CustomButton