import React from 'react'
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="h-full w-full relative  flex-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className="tex-7xl font-bold">404 something went wrong</h1>
                <Link href={"/"} className="bg-orange-600
                px-5 py-2 rounded-md"> Retry </Link>
            </div>
        </div>
    )
}
export default NotFound
