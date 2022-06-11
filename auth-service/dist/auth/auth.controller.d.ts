import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    postSignup(userData: CreateUserDto): void;
    postLogin(): void;
    postLogout(): void;
    getCurrentUser(): void;
}
