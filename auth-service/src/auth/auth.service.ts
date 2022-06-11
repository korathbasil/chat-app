import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signupUser(name: string, email: string, username: string, password: string) {}
}
