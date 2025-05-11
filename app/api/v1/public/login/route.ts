import {NextRequest, NextResponse} from "next/server";
import {databaseConnection} from "@/app/_lib/db/database";
import {userModel} from "@/app/_lib/schema/user/user";
import jwt from "jsonwebtoken";

interface LoginData {
    email?: string;
    phone?: string;
    password: string;
}


export const POST = async (req: NextRequest) => {
    try {
        await databaseConnection();

        const {email, phone, password} = await req.json() as LoginData;


        if ((!email && !phone) || !password) {
            return NextResponse.json({message: "Email or phone and password are required"}, {status: 400});
        }

        const user = await userModel.findOne({
            $or: [{email}, {phone}],
        });

        if (!user) {
            return NextResponse.json({message: "User not found"}, {status: 404});
        }

        if (user.password !== password) {
            return NextResponse.json({message: "Invalid password"}, {status: 401});
        }

        const accessToken = jwt.sign({id: user._id}, process.env.MY_CODE || "", {expiresIn: "1h"});

        const data = {
            flag: true,
            token: accessToken,
            message: "Login successful",
        }
        
        return new NextResponse(JSON.stringify(data), {headers: {"Content-Type": "application/json", "set-cookie": `token=${accessToken}; HttpOnly; Path=/; Max-Age=3600; secure`},});

    } catch (error) {
        console.error("login route" + error);
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
};
