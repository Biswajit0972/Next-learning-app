import React from 'react'
import {getUser} from "@/app/_lib/action/action";

const Showuser = async () => {
    const  { user, message} = await getUser();
    return (
        <>
            {
                message && <h1 className="text-red-500 text-lg font-[500]">{message}</h1>
            }
            {
               user && <h2 className="text-4xl font-[800] text-gray-400">{user.name}</h2>
            }
        </>
    )
}
export default Showuser
