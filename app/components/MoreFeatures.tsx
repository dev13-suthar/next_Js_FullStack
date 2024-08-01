"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};


const MoreFeatures = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <>
      <motion.div
        className="w-full flex justify-around items-center"
        variants={container}
        initial="hidden"
        ref={ref}
        animate={inView?"visible":"hidden"}
      >
        {[1, 2, 3, 4].map((index) => (
          <motion.div className="flex flex-col justify-center items-center gap-5" key={index} variants={item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
              />
            </svg>
            <p className="text-2xl">Track Income</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default MoreFeatures