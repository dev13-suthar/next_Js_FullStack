import { NextRequest, NextResponse } from "next/server";
import client from "@/app/db/index"

export const GET = async(req:NextRequest,{params:{slug}}:{params:{slug:string[]}})=>{
    try {
        const userId = Number(slug[slug.length-1]);
        const userAccount = await client.account.findFirst({
            where:{
                userId:userId
            },
        });
        if(!userAccount){
            throw new Error("Account Not Found")
        }
        const url = new URL(req.url);
        const takeParam = url.searchParams.get('take');
        // Base 10 conversion means perfect Decimal
        const take = takeParam ? parseInt(takeParam, 10) : undefined;
        const transactions = await client.transaction.findMany({
            take:take,
            where:{
                account_no:userAccount.id
            },
            orderBy:{
                createdAt:'desc'
            }
        });
        return NextResponse.json({
            transactions:transactions
        })
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{status:400})
    }
}