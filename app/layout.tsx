import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BudgetBuddy",
  description: "Better Way to Manage Your Bucks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
            {children}
            <Toaster position="top-right"  duration={3000} toastOptions={{
              style:{
                background:"rgb(225,255,140)"
              }
            }}/>
          </Providers>
      </body>
    </html>
  );
}
