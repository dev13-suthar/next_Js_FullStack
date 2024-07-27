"use client"
import { signIn } from "next-auth/react"
import CustomButton from "./CustomButton"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const handleFomrSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const res = await signIn("credentials",{
            email:email,
            password:password,
            redirect:false
        })
        if(!res?.error){
          router.push("/home");
          toast.success("Logged In!!")
        }else{
          console.log("Errrror")
        }
  }
  return (
    <div className="flex flex-col items-center w-full">
        <form className="flex flex-col gap-3 w-[50%] items-center pt-4" onSubmit={handleFomrSubmit}>
            <input 
            type="text" 
            placeholder="Enter Email" 
            className="w-[310px] p-2 rounded-xl outline-none focus:outline-none border-2 border-orange-300 focus:ring-1 focus:ring-offset-2 focus:w-[320px] transition-all duration-150 focus:ring-blue-700 text-stone-800"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Enter Password" 
            className="w-[310px] p-2 rounded-xl outline-none focus:outline-none border-2 border-orange-300 focus:ring-1 focus:ring-offset-2 focus:w-[320px] transition-all duration-150 focus:ring-blue-700 text-stone-800"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />
            {/* <CustomButton classname="mx-auto w-[320px]">Login</CustomButton> */}
            <button className="mx-auto w-[310px] bg-yellow-100 rounded-xl text-black p-2" type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginForm