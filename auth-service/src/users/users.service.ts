import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { Role, User } from './users.model';
import { UsersRepository } from './users.repo';
import { hashString, compareHash } from '../util/crypto-hash';

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

    const hashedPassword = await hashString(password);

    const newUser = {
      name,
      email,
      username,
      password: hashedPassword,
      role: Role.USER,
    } as User;

    return this.usersRepo.insertOne(newUser);
  }

  async loginUser(username: string, password: string) {
    const user = await this.usersRepo.findOne({ username: username });

    if (!user) throw new NotFoundException('User not found');

    if (!user.password) throw new NotFoundException('User not found');

    const doPasswordsMatch = await compareHash(user.password, password);

    if (!doPasswordsMatch) throw new UnauthorizedException('Invalid password');

    return user;
  }

  getLoggedInUser(id: string) {
    return this.usersRepo.findOne({ _id: id });
  }
}
