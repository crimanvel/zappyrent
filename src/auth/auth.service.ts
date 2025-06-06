import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async login(username: string, password: string) {
    const user = await this.usersService.validateUser(username, password);
    if (!user) return null;
    return {
      access_token: this.jwtService.sign({ sub: user.id, username: user.username }),
    };
  }
}
