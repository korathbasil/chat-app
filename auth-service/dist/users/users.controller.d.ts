import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    postSignup(userData: CreateUserDto): Promise<import("./users.model").User & {
        _id: any;
    }>;
    postLogin(): void;
    postLogout(): void;
    getCurrentUser(): string;
    getHello(): string;
}
