"use client"

import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config/configs";
import { transactionResponse } from "../types";
import SmallLoader from "./SmallLoader";
import { formatDate } from "../lib/utils";


type props = {
    id:number|string
}

type listProps = {
    type:string,
    amount:number,
    title:string,
    date:Date|string
}

type transactionList = transactionResponse[]

const List = ({type,amount,title,date}:listProps) => {

  return (
    <section className="flex  justify-between items-center w-[74%] p-5">
      <div className="flex w-max gap-4">
        <p className={`text-bold  text-xl ${type==="Credit"?"text-green-500":"text-red-500"}`}>
            {type==="Credit"?(
              <span>&rarr;</span>
            ):(
              <span>&larr;</span>
            )}
        </p>
        <div className="flex flex-col gap-2">
            {title}
            <span className="text-xs font-light text-gray-400">{formatDate(date)}</span>
        </div>
      </div>
      <p className={`text-[16px] font-bold ${type==="Credit"?"text-[rgb(220,255,124)]":null}`}>{type==="Credit"?"+":"-"} {amount}</p>
    </section>
  );
};

const Transaction = ({id}:props) => {
    const [txns, settxns] = useState<transactionList>();
    const [loading, setloading] = useState(true);
    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch(`${BACKEND_URL}/api/transactions/${id}?take=5`);
            const data = await res.json();
            settxns(data.transactions);
            setloading(false)
        }
        getData();
    },[id])

    if(loading) return (
      <div className="p-2 flex flex-col gap-2 pt-8 justify-center items-center w-[50%]">
            <SmallLoader/>
      </div>
    )
  return (
    <>
      <div className='p-2 flex flex-col gap-2 pt-5 divide-y pl-8'>
              {
                txns?.length===0 ? (
                  <div className="flex justify-center items-center">
                      <p>No Recent Transactions</p>
                  </div>
                ):(
                  txns?.map((item)=>(
                    <List key={item.id} type={item.type} title={item.title} amount={item.amount} date={item.createdAt}/>
                  ))
                )
              }
      </div>
    </>
  )
}

export default Transaction