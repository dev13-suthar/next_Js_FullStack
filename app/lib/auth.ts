import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import client from "@/app/db/index"
import bcrypt from "bcryptjs"
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

interface CustomToken extends JWT {
    id?: string;
    emaill?: string;
    username?: string;
}

// Define the structure of your session user
interface CustomSession extends Session {
    user: {
        id?: string;
        emaill?: string;
        username?: string;
        name?: string | null;
    }
}

export const authOptions:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:"email",placeholder:"email",type:"text"},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials:any):Promise<any>{
                try {
                    const user = await client.user.findFirst({
                        where:{
                            emaill:credentials.email
                        },
                        select:{
                            name:true,
                            id:true,
                            emaill:true,
                            password:true
                        }
                    });
                    if(!user){
                        throw new Error("User not found")
                    };
                    const isPasswordMatch = await bcrypt.compare(credentials.password,user.password);
                    if(isPasswordMatch){
                        return user;
                    }else{
                        throw new Error("InCorrect Password")
                    }
                } catch (error:any) {
                    throw new Error(error)
                }
            },
        })
    ],
    callbacks:{
        async jwt({token,user}){
           if(user){
            const customUser = user as User & { emaill?: string }; // Ensure emaill is part of the user object
            (token as CustomToken).id = customUser.id ?? undefined;
            (token as CustomToken).emaill = customUser.emaill ?? undefined;
            (token as CustomToken).username = customUser.name ?? undefined;
           }
            return token;
        },
        async session({session,token}){
            if (token) {
                session.user = session.user || {};
                (session as CustomSession).user.id = (token as CustomToken).id;
                (session as CustomSession).user.emaill = (token as CustomToken).emaill;
                (session as CustomSession).user.username = (token as CustomToken).username;
            }
            return session;
        },
    },
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy:"jwt",
    },
    
}   