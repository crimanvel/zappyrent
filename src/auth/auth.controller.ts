import { Controller, Post, Body, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const result = await this.authService.login(body.email, body.password);
    if (!result) throw new UnauthorizedException();
    return result;
  }

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    try {
      return await this.authService.register(body.email, body.password);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
