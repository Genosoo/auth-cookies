import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/user.types";

const UserSchema: Schema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model<IUser>("User", UserSchema);