"use client"

import { useCallback, useEffect, useState } from "react"
import { BACKEND_URL } from "../config/configs";

const useGetSpendByCategory = (userId:number) => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const fetchData = useCallback(async()=>{
        const res = await fetch(`${BACKEND_URL}/api/spendbycategory/${userId}`);
                const dataa = await res.json();
                setdata(dataa.result);
                setloading(false)
    },[userId])
    useEffect(()=>{
        fetchData();
    },[fetchData])
    // useEffect(()=>{
    //     const getData = async()=>{
    //         const res = await fetch(`${BACKEND_URL}/api/spendbycategory/${userId}`);
    //         const dataa = await res.json();
    //         setdata(dataa.result);
    //         setloading(false)
    //     }
    //     getData();
    // },[userId])
  return {data,loading}
}

export default useGetSpendByCategory