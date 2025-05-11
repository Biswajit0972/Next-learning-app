import {ReactNode} from "react";
import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import Nav from "@/app/_components/Nav";


const baseFont = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
    title: {
        template: "%s | My App",
        default: "My App"
    },
    description: "My App",
}

const RootLayout = ({children}: { children: ReactNode }) => {
    return (
        <html lang="en">
        <body className={` ${baseFont.className} antialiased bg-black h-dvh w-full flex flex-col  gap-2`}>
        <Nav/>
        <main className="h-[calc(100%-60px)] w-full relative ">
            {children}
        </main>
        </body>
        </html>
    )
}
export default RootLayout
