import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UseSerializeInterceptor } from './interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './users.model';

@Controller('/api/v1/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

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

      const token = await this.jwtService.signAsync({
        _id: savedUser._id,
        name: savedUser.name,
        username: savedUser.username,
        profilePicture: savedUser.profilePicture,
      });

      (
        savedUser as User & {
          _id: any;
          token: string;
        }
      ).token = token;

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

      const token = await this.jwtService.signAsync({
        _id: user._id,
        name: user.name,
        username: user.username,
        profilePicture: user.profilePicture,
      });

      (
        user as User & {
          _id: any;
          token: string;
        }
      ).token = token;

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
