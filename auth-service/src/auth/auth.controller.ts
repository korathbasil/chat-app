import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  postSignup() {}

  @Post('/login')
  postLogin() {}

  @Post('/logout')
  postLogout() {}

  @Get('/current-user')
  getCurrentUser(): string {
    return this.authService.getHello();
  }
}
