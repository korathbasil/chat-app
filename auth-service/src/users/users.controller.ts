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
import { LoginUserDto } from './dto/login-user.dto';

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

  @UseSerializeInterceptor(UserDto)
  @Post('/login')
  async postLogin(@Body() loginData: LoginUserDto) {
    const { username, password } = loginData;
    try {
      const user = await this.usersService.loginUser(username, password);

      return user;
    } catch (e) {
      return e;
    }
  }

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
