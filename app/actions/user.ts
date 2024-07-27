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
