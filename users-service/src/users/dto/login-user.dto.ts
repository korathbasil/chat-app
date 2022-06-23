import { IsNotEmpty, Length } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: "Username shouldn't be empty" })
  @Length(5, 20, {
    message:
      'Username should contain minimum of 5 characters and only allowed maximum of 20 characters',
  })
  username: string;

  @IsNotEmpty({ message: "Password shouldn't be empty" })
  @Length(8, 16, {
    message:
      'Password should contain minimum of 8 characters and only allowed maximum of 16 characters',
  })
  password: string;
}
