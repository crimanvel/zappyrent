import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  async create(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: this.idCounter++, username, password: hashedPassword };
    this.users.push(user);
    return { id: user.id, username: user.username };
  }

  async findByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }

  async validateUser(username: string, password: string) {
    const user = await this.findByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
      return { id: user.id, username: user.username };
    }
    return null;
  }
}
