"use client"

import { useRouter } from "next/navigation";
import React from "react";

type props = {
  className?:string,
  to:string,
  children:React.ReactNode
}

const NavigateButton = ({className="p-2 w-max bg-yellow-100 text-black rounded-xl",to,children}:props) => {
    const router = useRouter();
  return (
    <button className={`${className}`} onClick={()=>{
        router.push(`${to}`)
    }}>
        {children}
    </button>
  )
}

export default NavigateButton