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
import { Model, FilterQuery } from 'mongoose';
import { User } from './users.model';
export declare class UsersRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    find(query?: FilterQuery<User>): import("mongoose").Query<(User & {
        _id: any;
    })[], User & {
        _id: any;
    }, {}, User>;
    findOne(query: FilterQuery<User>): import("mongoose").Query<User & {
        _id: any;
    }, User & {
        _id: any;
    }, {}, User>;
    insertOne(user: User): Promise<User & {
        _id: any;
    }>;
}
