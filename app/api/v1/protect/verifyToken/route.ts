import {cookies} from "next/headers";
import jwt from "jsonwebtoken";
import {NextResponse} from "next/server";

export const GET = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token");

        const verifyToken = jwt.verify(token?.value || "", process.env.MY_CODE || "");

        console.log(verifyToken);
        return NextResponse.json({flag: true, user: verifyToken}, {status: 200});
    }catch (e: unknown) {
        console.log("Token verify Error" + e);

        return NextResponse.error();
    }
}