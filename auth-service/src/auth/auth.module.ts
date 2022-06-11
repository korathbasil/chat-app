import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from '../users/users.module';
import { UsersController } from 'src/users/users.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ngage-plus'),
    PassportModule,
    JwtModule.register({
      secret: 'asdfgh',
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,
  ],
  controllers: [UsersController],
})
export class AuthModule {}
