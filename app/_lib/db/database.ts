import * as mongoose from "mongoose";

let isDbConnected: number = -1;

export const databaseConnection = async (): Promise<void> => {

    try {
        if (isDbConnected !== -1) {
            console.log("database already connected");
            return;
        } else {
            const res = await mongoose.connect(process.env.MONGO_URI || "");
            isDbConnected = Number(res.connections[0].readyState);
            console.log("Database connected")
        }
    } catch (e: unknown) {
        isDbConnected = -1;
        console.log(e)
    }
}