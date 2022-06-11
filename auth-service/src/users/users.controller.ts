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
import { UseSerializeInterceptor } from './interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseSerializeInterceptor(UserDto)
  @UsePipes(ValidationPipe)
  @Post('/signup')
  async postSignup(@Body() userData: CreateUserDto) {
    const { name, email, username, password } = userData;
    try {
      const savedUser = await this.usersService.signupUser(
        name,
        email,
        username,
        password,
      );

      return savedUser;
    } catch (e) {
      return e;
    }
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
