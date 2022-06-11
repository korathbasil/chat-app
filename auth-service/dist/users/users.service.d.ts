import { User } from './users.model';
import { UsersRepository } from './users.repo';
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: UsersRepository);
    signupUser(name: string, email: string, username: string, password: string): Promise<User & {
        _id: any;
    }>;
}
