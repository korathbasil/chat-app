import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    postSignup(userData: CreateUserDto): Promise<any>;
    postLogin(loginData: LoginUserDto): Promise<any>;
    postLogout(): void;
    getCurrentUser(): string;
    getHello(): string;
}
