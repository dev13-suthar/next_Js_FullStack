"use client"

import { useSession } from "next-auth/react"
import { authOptions } from "../lib/auth";

const HomePage = () => {
    const session = useSession();
  return (
    <div className="p-4 text-white">
        {JSON.stringify(session)}
    </div>
  )
}

export default HomePage