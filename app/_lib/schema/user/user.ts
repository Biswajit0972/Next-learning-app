import { Schema, models, model, Model} from "mongoose";
import {User} from "@/app/_lib/utils";

const userSchema =  new Schema<User>({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
}, {timestamps: true});

export const userModel:Model<User> =models.users || model<User>("users", userSchema);