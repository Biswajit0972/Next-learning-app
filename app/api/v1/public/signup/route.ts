import {NextRequest, NextResponse} from "next/server";
import {databaseConnection} from "@/app/_lib/db/database";
import {userModel} from "@/app/_lib/schema/user/user";

interface Idata {
    name: string;
    phone: string;
    email: string;
    password: string;
}

export const POST = async (req: NextRequest) => {
    try {
        await databaseConnection();

        const {name,  phone, email, password} = await req.json() as Idata;
        if ([name, phone, email, password].includes("undefined")) {
            return new NextResponse(JSON.stringify({"message": "Missing data"}), {
                headers: {"Content-Type": "application/json"},
                status: 400
            });
        }

        const createUser = await userModel.create({name, phone, email, password});


        if (!createUser) {
            return new NextResponse(JSON.stringify({"message": "Something went wrong while   creating user"}), {
                headers: {"Content-Type": "application/json"},
                status: 500
            });
        }

        return new NextResponse(JSON.stringify({flag: true,message: "success"}), {
            headers: {"Content-Type": "application/json"},
            status: 200
        });

    } catch (e: unknown) {
        console.log(e);
        return new NextResponse(JSON.stringify({"message": "Something went wrong while  creating user"}), {
            headers: {"Content-Type": "application/json"},
            status: 500
        });
    }
}