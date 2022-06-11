import { IsNotEmpty, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: "Name shouldn't be empty" })
  @Min(5, { message: 'Name should have atleast 5 characters' })
  @Max(20, { message: "Name shouldn't be more than 20 characters" })
  name: string;

  @IsNotEmpty({ message: "Email shouldn't be empty" })
  @Min(5, { message: 'Email should have atleast 5 characters' })
  @Max(30, { message: "Email shouldn't be more than 30 characters" })
  email: string;

  @IsNotEmpty({ message: "Username shouldn't be empty" })
  @Min(5, { message: 'Username should have atleast 5 characters' })
  @Max(20, { message: "Username shouldn't be more than 20 characters" })
  username: string;

  @IsNotEmpty({ message: "Password shouldn't be empty" })
  @Min(8, { message: 'Password should have atleast 8 characters' })
  @Max(16, { message: "Password shouldn't be more than 16 characters" })
  password: string;
}
