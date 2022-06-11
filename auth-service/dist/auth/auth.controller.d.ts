import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    postSignup(): void;
    postLogin(): void;
    postLogout(): void;
    getCurrentUser(): string;
}
