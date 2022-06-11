import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './users.model';
export declare class UsersController {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    postSignup(userData: CreateUserDto, res: Response): Promise<User & {
        _id: any;
    }>;
    postLogin(loginData: LoginUserDto, res: Response): Promise<any>;
    postLogout(res: Response): void;
    getCurrentUser(req: Request, res: Response): Promise<User & {
        _id: any;
    }>;
}
