/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
import { Document } from 'mongoose';
declare class UserAccount extends Document {
    kind: string;
    uid: string;
}
declare class UserAddress extends Document {
    name: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    pin: string;
}
export declare enum Role {
    SUPERUSER = "SUPERUSER",
    MANAGER = "MANAGER",
    USER = "USER"
}
export declare class User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password?: string;
    accounts?: UserAccount[];
    role: Role;
    addresses?: UserAddress[];
    createdAt: string;
}
export declare const userSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, {}, {}, any>;
export {};
