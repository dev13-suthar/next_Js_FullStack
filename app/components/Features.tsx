import React from "react";
import { cn } from "../lib/utils";
import Image from "next/image";
import ShineBorder from "./ui/ShineBorder";
import TransactionFeature from "./TransactionFeature";
import MoreFeatures from "./MoreFeatures";

const Features = () => {
  return (
    <div className="p-6 pt-10">
      <ShineBorder color={["#444444"]}>
        <TransactionFeature/>
        <div className="flex gap-1 w-full p-4 justify-center">
            <div className="w-full h-auto border bg-[rgb(25,25,26)] p-4">
                <MoreFeatures/>
            </div>
        </div>
      </ShineBorder>
    </div>
  );
};

export default Features;
