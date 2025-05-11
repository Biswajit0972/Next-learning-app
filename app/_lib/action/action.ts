"use server"

/**
 * Using server action with traditional api call, we can store or send cookies to the server directly.
 * Because server action is not available on the client side.
 * if communicate with the server using apis then we can't send cookies in the request automatically or server can't get access to the browser cookies.
 * we have to send cookies manually, using cookies from next/headers.
 *
 * */
import {notFound, redirect} from "next/navigation";
import {cookies} from "next/headers";
import {Iuser} from "@/app/_lib/utils";


export const userLogin = async (e: FormData) => {

    const res = await fetch("http://localhost:3000/api/v1/public/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"email": e.get("identifier"), password: e.get("password")})
    });


    const data = await res.json();

    if (!data.flag) {
        notFound();
    }

    const cookieStroe = await cookies();

    cookieStroe.set("token", data.token, {
        httpOnly: true,
        maxAge: 3600,
        path: "/",
        sameSite: "strict",
        secure: true,
    });

    return redirect("/")
}

export async function userLogout() {
    const cookieStore = await cookies();

    // Remove the token cookie
    cookieStore.delete('token');

    // Redirect to login
   return  redirect('/auth/login');
}

export async function getUser(): Promise<{flag: boolean, user?: Iuser, message?: string}> {
    const cookieStore = await cookies();

    const res = await fetch("http://localhost:3000/api/v1/protect/currentuser", {
            headers: {
                'content-type': 'application/json',
                'Cookie': `token=${cookieStore.get("token")?.value}`
            }
        }
    );

    return await res.json();
}

export const userSignup = async (e: FormData) => {

    const res = await fetch("http://localhost:3000/api/v1/public/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: e.get("email"), password: e.get("password"), name: e.get("name"), phone: e.get("phone")})
    });


    const data = await res.json();

    if (!data.flag) {
        notFound();
    }
    console.log(data)

    return redirect("/auth/login")
}