import type {Metadata} from "next";
import {userLogin} from "@/app/_lib/action/action";

export const metadata:Metadata = {
    title: "user login",
    description: "user login"
}

export default function LoginForm() {


    return (
        <div className="h-full w-full rounded-lg px-5 border-2 border-gray-500 flex justify-center items-center">
            <div className="relative w-1/2 bg-gray-500 rounded-lg shadow-md">
                <form className="w-full relative p-4 space-y-4" action={userLogin}>
                    <h2 className="text-xl font-semibold text-center">Login</h2>

                    <div>
                        <label className="block mb-1 font-medium">Email or Phone</label>
                        <input
                            type="text"
                            name="identifier"
                            placeholder="Enter your email or phone"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
