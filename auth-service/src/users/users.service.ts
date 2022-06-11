import { Injectable, ConflictException } from '@nestjs/common';
import { Role, User } from './users.model';
import { UsersRepository } from './users.repo';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async signupUser(
    name: string,
    email: string,
    username: string,
    password: string,
  ) {
    const user = await this.usersRepo.findOne({ username: username });

    if (user) throw new ConflictException('User already exists');

    const newUser = {
      name,
      email,
      username,
      password,
      role: Role.USER,
    } as User;

    return this.usersRepo.insertOne(newUser);
  }
}
