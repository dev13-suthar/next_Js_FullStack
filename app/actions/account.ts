'use server';
import client from "@/app/db/index";
import { AddmoneySchema, SpendmoneySchema } from "@/app/types/index";



export const AddMoney = async(amount:number,title:string,category:string,userId:number)=>{
    const parseData = AddmoneySchema.safeParse({amount,title,category});
    if(!parseData.success){
        return false;
    }
    const createTxns = await client.$transaction(async tx=>{
            const account = await tx.account.findFirst({
                where:{
                    userId:userId
                }
            });
            if(!account){
                return
            }
            let categoryName = await tx.category.findFirst({
                where:{
                    name:category
                }
            });
            if(!categoryName){
                categoryName = await tx.category.create({
                    data:{
                        name:category
                    }
                })
            }
            const newTransaction = await tx.transaction.create({
                data:{
                    account_no:account?.id,
                    amount:parseData.data.amount,
                    type:"Credit",
                    title:parseData.data.title,
                    category_id:categoryName?.id
                }
            });
             await tx.account.update({
                where:{
                    userId:userId
                },
                data:{
                    amount:{
                        increment:amount
                    }
                }
            });

            return newTransaction;
    });
    return `Added ${createTxns?.amount}`
}

export const SpendMoney = async(amount:number,title:string,category:string,userId:number)=>{
    const parseData = SpendmoneySchema.safeParse({amount,title,category});
    if(!parseData.success){
        return false;
    }
    const account = await client.account.findFirst({
        where:{
            userId:userId
        }
    });
    if(!account){
        return false
    }
    if(account.amount<amount){
       return false;
    }
    const createTxns = await client.$transaction(async tx=>{
           
            let categoryName = await tx.category.findFirst({
                where:{
                    name:category
                }
            });
            if(!categoryName){
                categoryName = await tx.category.create({
                    data:{
                        name:category
                    }
                })
            }
            const newTransaction = await tx.transaction.create({
                data:{
                    account_no:account?.id,
                    amount:parseData.data.amount,
                    type:"Debit",
                    title:parseData.data.title,
                    category_id:categoryName?.id
                }
            });
             await tx.account.update({
                where:{
                    userId:userId
                },
                data:{
                    amount:{
                        decrement:amount
                    }
                }
            });

            return newTransaction;
    });
    return `${createTxns?.amount} Debited`
}

export const getBalanceUser = async(userId:number|null)=>{
    const balance = await client.account.findFirst({
        where:{
            userId:Number(userId)
        },
        select:{
            amount:true
        }
    });
    if(!balance){
        return 0
    }
    return balance.amount;
}

export const getIncomeAmount = async(userId:number)=>{
    const amount = await client.$transaction(async tx =>{
        const account = await tx.account.findFirst({
            where:{
                userId:Number(userId)
            }
        });
        const amount = await tx.transaction.findMany({
            where:{
                account_no:account?.id,
                type:"Credit"
            }
        });
        return amount;
    })
    if(!amount){
        return 0
    }
    const totalAMount = amount.reduce((i,acc)=>i+acc.amount,0);
    return totalAMount;
}

export const getExpenseAmount = async(userId:number)=>{
    const amount = await client.$transaction(async tx =>{
        const account = await tx.account.findFirst({
            where:{
                userId:Number(userId)
            }
        });
        const amount = await tx.transaction.findMany({
            where:{
                account_no:account?.id,
                type:"Debit"
            }
        });
        return amount;
    })
    if(!amount){
        return 0
    }
    const totalAMount = amount.reduce((i,acc)=>i+acc.amount,0);
    return totalAMount;
}