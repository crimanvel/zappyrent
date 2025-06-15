import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  async create(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: this.idCounter++, email, password: hashedPassword };
    this.users.push(user);
    return { id: user.id, email: user.email };
  }

  async findByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return { id: user.id, email: user.email };
    }
    return null;
  }
}
