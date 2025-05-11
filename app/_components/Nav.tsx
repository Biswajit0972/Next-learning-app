import React from 'react'
import Link from "next/link";
import {cookies} from "next/headers";
import {userLogout} from "@/app/_lib/action/action";

const Nav = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    return (
        <nav className="w-full h-12 relative px-5 border-2 border-gray-200 rounded-lg flex-between">
            <div className="flex-center h-full text-xl font-[700] text-gray-400">
                <h2>My app</h2>
            </div>
            {
                token?.value ? <div className="h-full flex items-center gap-4">
                    <Link href="/" className="cursor-pointer">home</Link>
                    <button onClick={userLogout} className="cursor-pointer text-red-500">Logout</button>
                </div> : <div className="h-full flex items-center gap-4">
                    <Link href="/auth/login" className="cursor-pointer">login</Link>
                    <Link href="/auth/signup" className="cursor-pointer">signUp</Link>
                </div>
            }
        </nav>
    )
}
export default Nav
