import { SpendByCategory } from "../actions/user"
import ResponsivePieCharts from "./ui/ResponsivePie";

const getData = async(userId:number)=>{
    const categories = await SpendByCategory(userId);
    const data = categories.map((c)=>{
        return {
            id:c.category,
            label:c.category,
            value:c.totalAmount
        }
    });
    return data;
}

type props = {
    userId:number
}

const PieChart = async({userId}:props) => {
    const data = await getData(userId);
  return (
    <div className="p-3 flex justify-center items-center relative h-[500px] flex-col text-stone-900 pt-11">
        <ResponsivePieCharts data={data}/>
    </div>
  )
}

export default PieChart