import {cookies} from "next/headers";
import jwt from "jsonwebtoken";

export  const verifyTokenHelper = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token");

        const verifyToken = jwt.verify(token?.value || "", process.env.MY_CODE || "");

        return {flag: true, user: verifyToken}
    }catch (e: unknown) {
        console.log("Token verify Error" + e);
        return {flag: false, message: "Token is invalid"};
    }
}