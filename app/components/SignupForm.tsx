"use client"

import { useState } from "react"
import CustomButton from "./CustomButton"
import { Signup } from "@/app/actions/user";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignupForm = () => {
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3 w-[50%] items-center pt-4">
            <input
             type="text" 
             placeholder="Enter your Name" 
             className="w-[310px] p-2 rounded-xl outline-none focus:outline-none border-2 border-orange-300 focus:ring-1 focus:ring-offset-2 focus:w-[320px] transition-all duration-150 focus:ring-blue-700 text-stone-800"
             value={username}
             onChange={(e)=>setusername(e.target.value)}
             />
             <input type="text" 
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
            <CustomButton classname="mx-auto w-[320px]" handleClick={async()=>{
                setisSubmitting(true)
                const res = await Signup(email,password,username);
                setisSubmitting(false)
                toast.success("Signed Up")
                router.push("/signin")
            }}>{isSubmitting?"Registering...":"Register"}</CustomButton>
    </div>
  )
}

export default SignupForm