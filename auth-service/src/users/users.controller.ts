import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
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
  async postSignup(
    @Body() userData: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
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

      res.cookie('token', token, {
        httpOnly: true,
      });

      return savedUser;
    } catch (e) {
      throw e;
    }
  }

  @UseSerializeInterceptor(UserDto)
  @Post('/login')
  async postLogin(
    @Body() loginData: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
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

      res.cookie('token', token, {
        httpOnly: true,
      });
      return user;
    } catch (e) {
      throw e;
    }
  }

  @Post('/logout')
  postLogout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('token');

    res.status(200);
    return;
  }

  @UseSerializeInterceptor(UserDto)
  @Get('/current-user')
  async getCurrentUser(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = req.cookies['token'];

    if (!token) throw new UnauthorizedException('Please login to continue');

    type JwtPayload = {
      _id: string;
      name: string;
      username: string;
      profilePicture: string;
    };

    try {
      const userData: JwtPayload = await this.jwtService.verifyAsync(token, {
        secret: 'asdfgh',
      });

      const loggedInUser = await this.usersService.getLoggedInUser(
        userData._id,
      );

      (
        loggedInUser as User & {
          _id: any;
          token: string;
        }
      ).token = token;

      res.cookie('token', token, {
        httpOnly: true,
      });
      return loggedInUser;
    } catch (e) {
      throw new UnauthorizedException('Please login to continue');
    }
  }
}
