import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly authService: UsersService) {}

  @Post('/signup')
  postSignup(@Body() userData: CreateUserDto) {
    const { name, email, username, password } = userData;
  }

  @Post('/login')
  postLogin() {}

  @Post('/logout')
  postLogout() {}

  @Get('/current-user')
  getCurrentUser() {
    return 'Hello';
  }

  @Get()
  getHello() {
    return 'Hello';
  }
}
