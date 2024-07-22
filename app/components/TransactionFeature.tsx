import Image from 'next/image'
import React from 'react'
import { cn } from '../lib/utils'

const TransactionFeature = () => {
  return (
    <>
    <h1 className="text-4xl text-slate-100 font-semibold font-serif mb-5">
          <center>Our Features</center>
        </h1>
        <div className="flex flex-col p-4 items-center">
          <section
            className={`p-10 gap-4 w-full flex justify-center h-[max] border bg ${cn(
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}`}
          >
            <div className="flex items-center w-[40%]">
              <div className="flex flex-col gap-2 boder border-blue-200">
                <p>All Transaction</p>
                <Image
                  src={"/transactions.png"}
                  alt="list"
                  height={200}
                  width={290}
                  className="w-[390px] h-[350px] object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col w-[40%] p-6 pt-32">
              <div>
                <p className="text-3xl font-semibold text-slate-100 mb-4">
                  Track Transactions
                </p>
                <p className="text-[rgb(80,83,80)]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi vel dicta eum molestiae porro, aliquid sit numquam
                  minus qui perferendis vitae corporis?
                </p>
              </div>
            </div>
          </section>
        </div>
    </>
  )
}

export default TransactionFeature