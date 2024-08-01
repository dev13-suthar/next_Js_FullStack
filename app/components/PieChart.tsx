"use client"
import useGetSpendByCategory from "../hooks/useGetSpendByCategory";
import ResponsivePieCharts from "./ui/ResponsivePie";


type props = {
    userId:number
}

const PieChart = ({userId}:props) => {
    const {data,loading} = useGetSpendByCategory(userId);
    const dataa = data.map((c:any)=>{
                return {
                    id:c.category,
                    label:c.category,
                    value:c.totalAmount
                }
            });
    if(loading) return "loaddinggg"
  return (
    <div className="p-3 flex justify-center items-center relative h-[500px] flex-col text-stone-900 pt-11">
        <ResponsivePieCharts data={dataa}/>
    </div>
  )
}

export default PieChart