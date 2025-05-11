import React from 'react'
import {userSignup} from "@/app/_lib/action/action";


const Page = () => {
    return (
        <div className="h-full w-full  rounded-lg px-5 border-2 border-gary-500 flex-center">
                <div className="relative w-1/2 bg-gray-600  rounded-lg overflow-hidden">
                    <form className="w-full relative p-4 space-y-4 " action={userSignup}>
                        <h2 className="text-xl font-semibold text-center">Sign Up</h2>

                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
        </div>
    )
}
export default Page
