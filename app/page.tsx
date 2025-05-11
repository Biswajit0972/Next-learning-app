import React, {Suspense} from 'react'
import Loading from "@/app/loading";
import Showuser from "@/app/_components/Showuser";


const Page = () => {

    return (
        <div className="h-full w-full  flex flex-col items-center justify-center">
            <h1 className="text-7xl font-[800] text-gray-400">Welcome to Home.</h1>
            <h1 className="text-4xl font-[800] text-gray-400">User details</h1>
            <Suspense fallback={<Loading/>}>
                <Showuser/>
            </Suspense>
        </div>
    )
}
export default Page
