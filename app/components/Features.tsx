import React from "react";
import { cn } from "../lib/utils";
import Image from "next/image";
import ShineBorder from "./ui/ShineBorder";
import TransactionFeature from "./TransactionFeature";

const Features = () => {
  return (
    <div className="p-6 pt-10">
      <ShineBorder color={["#444444"]}>
        <TransactionFeature/>
        <div className="flex gap-1 w-full p-4">
            <div className="w-[50%] h-6 bg-red-200">1</div>
            <div className="w-[50%] h-6 bg-red-500">2</div>
        </div>
      </ShineBorder>
    </div>
  );
};

export default Features;
