'use server';
import {z} from "zod";
import bcrypt from "bcryptjs"
import client from "@/app/db/index"

const registerSchema = z.object({
    username:z.string(),
    email:z.string().email(),
    password:z.string().min(6),
})

export const Signup = async(email:string,password:string,username:string)=>{
    const parseData = registerSchema.safeParse({email,password,username});
    if(!parseData.success){
        return false;
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(parseData.data.password,salt);
    const user = await client.$transaction(async tx=>{
        const myuser = await tx.user.create({
            data:{
                email:parseData.data.email,
                password:hashedPassword,
                name:parseData.data.username
            }
        });
        await tx.account.create({
            data:{
                userId:myuser.id
            }
        });
        return myuser;
    })
    return `signed UP ${user.name}`
}

export const SpendByCategory = async(userId:number|null)=>{
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
    return result;
}