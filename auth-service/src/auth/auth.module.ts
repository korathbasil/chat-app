import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from '../users/users.module';
import { UsersController } from 'src/users/users.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ngage-plus'),
    UsersModule,
  ],
  controllers: [UsersController],
})
export class AuthModule {}
