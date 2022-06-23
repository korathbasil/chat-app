import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';

import { User } from './users.model';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  find(query?: FilterQuery<User>) {
    return this.userModel.find(query || {});
  }

  findOne(query: FilterQuery<User>) {
    return this.userModel.findOne(query);
  }

  insertOne(user: User) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
