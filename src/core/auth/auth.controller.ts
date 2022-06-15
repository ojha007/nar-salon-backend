import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { NoAuth } from 'src/meta/isPublic.meta';
import AuthService from './auth.service';
import { LoginRequest, RegisterRequest } from './dto/auth.request';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  @NoAuth()
  @Post('login')
  async login(@Body() user: LoginRequest) {
    return this.authService.login(user);
  }

  @NoAuth()
  @Post('register')
  async register(@Body() payload: RegisterRequest) {
    return this.authService.register(payload);
  }
}
