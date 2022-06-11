import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class UsersController {
    private readonly authService;
    constructor(authService: UsersService);
    postSignup(userData: CreateUserDto): void;
    postLogin(): void;
    postLogout(): void;
    getCurrentUser(): string;
    getHello(): string;
}
