import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  postSignup(@Body() userData: CreateUserDto) {
    const { name, email, username, password } = userData;
  }

  @Post('/login')
  postLogin() {}

  @Post('/logout')
  postLogout() {}

  @Get('/current-user')
  getCurrentUser() {}
}
