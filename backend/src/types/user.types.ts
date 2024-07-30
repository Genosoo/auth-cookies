import { Document } from "mongoose";
export interface IUser extends Document {
    email: string;
    password: string;
}

declare module 'express-serve-static-core' {
    interface Request {
      user?: IUser;
    }
  }