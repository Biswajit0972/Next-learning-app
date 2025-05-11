import {Document} from "mongoose";

export interface User extends Document {
    name: string;
    phone: string;
    email: string;
    password: string;
}

export interface Iuser {
    id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
}