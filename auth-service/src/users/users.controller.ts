import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  async postSignup(@Body() userData: CreateUserDto) {
    const { name, email, username, password } = userData;
    const savedUser = await this.usersService.signupUser(
      name,
      email,
      username,
      password,
    );

    return savedUser;
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
