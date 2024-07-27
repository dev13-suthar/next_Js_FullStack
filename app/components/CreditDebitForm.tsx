"use client"

import { FormEvent, useState } from "react";
import { AddMoney, SpendMoney } from "../actions/account";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


type props = {
    type:"Credit"|"Debit";
    userId:number
}

const CreditDebitForm = ({type,userId}:props) => {
  const [amount, setamount] = useState(0);
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const router = useRouter();

  return (
    <>
      <form action="" className="flex flex-col gap-3 items-center" onSubmit={async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (type === "Credit") {
          const res = await AddMoney(amount, title, category, userId);
          if (res === false) {
            toast.error("Something Went Wrong");
          } else {
            toast.success(res);
            router.push("/home")
          }
        } else {
          const res = await SpendMoney(amount, title, category, userId);
          if (res === false) {
            toast.error("Something Went Wrong");
          } else {
            toast.success(res);
            router.push("/home")
          }
        }
      }}>
        <div className="flex flex-col items-center w-[50%] justify-start gap-6">
          <input
            type="number"
            className={`w-[90%] ${type==="Credit"?"bg-green-300":"bg-red-300"} text-white text-4xl font-bold p-3 rounded-2xl  focus:outline-none outline-none border focus:ring-1 focus:ring-offset-2 focus:ring-red-500`}
            placeholder="Enter Amount"
            value={amount}
            onChange={(e)=>setamount(Number(e.target.value))}
          />
          <input
            type="text"
            className="w-[90%] bg-yellow-50 text-stone-700 text-4xl font-bold p-3 rounded-2xl  focus:outline-none outline-none border focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
            placeholder="Enter Title"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
          />
          <input
            type="text"
            className="w-[90%] bg-yellow-50 text-stone-700 text-4xl font-bold p-3 rounded-2xl  focus:outline-none outline-none border focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
            placeholder="Enter Category"
            value={category}
            onChange={(e)=>setcategory(e.target.value)}
          />
          <button className="p-2 py-4 w-[50%] mt-3 bg-purple-700 rounded-2xl" type="submit">
            Proceed
          </button>
        </div>
      </form>
    </>
  );
};

export default CreditDebitForm;
