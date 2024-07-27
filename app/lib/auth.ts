import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import client from "@/app/db/index"
import bcrypt from "bcryptjs"
import { JWT } from "next-auth/jwt";

export interface CustomUser {
  id: number;
  name: string;
  email: string;
}

interface CustomToken extends JWT {
  id: number;
  email: string;
  name: string;
}

// Extend the NextAuth session to include custom properties
export interface CustomSession extends DefaultSession {
  user: CustomUser;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        try {
          const user = await client.user.findFirst({
            where: {
              email: credentials?.email,
            },
          });
          if (!user) {
            throw new Error("User not Found");
          }
          const matchPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (matchPassword) {
            return user;
          } else {
            throw new Error("Incorrect Password");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session:{
    strategy:"jwt"
  },
  callbacks:{
    jwt: async ({ token, user }) => {
      if (user && user.id) {
        token.id = user.id as number;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          name: token.name,
        } as CustomUser;
      }
      return session;
    },
  },
  pages:{
    signIn:"/signin"
  }
};