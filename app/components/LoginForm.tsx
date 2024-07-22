"use client"
import CustomButton from "./CustomButton"


const LoginForm = () => {
  return (
    <div className="flex flex-col items-center w-full">
        <form className="flex flex-col gap-3 w-[50%] items-center pt-4">
            <input type="text" placeholder="Enter Email" className="w-[310px] p-2 rounded-xl outline-none focus:outline-none border-2 border-orange-300 focus:ring-1 focus:ring-offset-2 focus:w-[320px] transition-all duration-150 focus:ring-blue-700 text-stone-800"/>
            <input type="text" placeholder="Enter Password" className="w-[310px] p-2 rounded-xl outline-none focus:outline-none border-2 border-orange-300 focus:ring-1 focus:ring-offset-2 focus:w-[320px] transition-all duration-150 focus:ring-blue-700 text-stone-800"/>
            <CustomButton classname="mx-auto w-[320px]">Login</CustomButton>
        </form>
    </div>
  )
}

export default LoginForm