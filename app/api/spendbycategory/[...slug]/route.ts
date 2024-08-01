import { NextRequest, NextResponse } from "next/server";
import client from "@/app/db/index"

export const GET = async(req:NextRequest,{params:{slug}}:{params:{slug:string[]}})=>{
    const userId = Number(slug[slug.length-1]);
    try {
        const spendingByCategory = await client.transaction.groupBy({
            by:["category_id"],
            where:{
                account:{
                    userId:Number(userId)
                },
                type:"Debit"
            },
            _sum:{
                amount:true
            }
        });
        const categoryId = spendingByCategory.map(sp=>sp.category_id);
        const categoris = await client.category.findMany({
            where:{
                id:{
                    in:categoryId
                }
            }
        });
        const result = spendingByCategory.map(spending=>{
            const category = categoris.find(cat=>cat.id===spending.category_id);
            return {
                category:category?.name,
                totalAmount:spending._sum.amount
            };
        });
        return NextResponse.json({result},{status:200})
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{status:400})
    }
}