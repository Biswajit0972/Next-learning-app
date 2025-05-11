// import {verifyTokenHelper} from "@/app/_lib/utils/verifyTokenHelper";
import {NextRequest, NextResponse} from "next/server";
import {userModel} from "@/app/_lib/schema/user/user";
import {databaseConnection} from "@/app/_lib/db/database";

import jwt from "jsonwebtoken";

export const GET = async (req: NextRequest) => {
    try {
        await databaseConnection();
        const token = req.cookies.get("token");

        if (!token) return NextResponse.json({flag: false, message: "login first"}, {status: 401});

        const {id} = jwt.verify(token?.value || "", process.env.MY_CODE || "") as { id: string };

        const getUser = await userModel.findOne({_id: id}).select("-password");

        if (!getUser) return NextResponse.json({flag: true, message: "User not found"}, {status: 404});

        return NextResponse.json({flag: true, user: getUser}, {status: 200});
        
    } catch (e: unknown) {
        console.log(e)
        return NextResponse.json({flag: false, message: "Something went wrong"}, {status: 500});
    }
}