import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { UsersController } from 'src/users/users.controller';

@Module({
  imports: [UsersModule],
  controllers: [UsersController],
})
export class AuthModule {}
