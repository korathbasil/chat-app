import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userSchema } from './users.model';
import { UsersRepository } from './users.repo';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, JwtService],
  exports: [UsersService],
})
export class UsersModule {}
