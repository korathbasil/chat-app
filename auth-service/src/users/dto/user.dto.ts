import { Expose } from 'class-transformer';

export class UserDto {
  @Expose({ name: 'id' })
  _id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  username: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;
}
