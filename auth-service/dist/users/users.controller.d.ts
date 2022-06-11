import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    postSignup(userData: CreateUserDto): Promise<any>;
    postLogin(loginData: LoginUserDto): Promise<any>;
    postLogout(): void;
    getCurrentUser(): string;
    getHello(): string;
}
