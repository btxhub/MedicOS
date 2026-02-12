import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body('doctorId') doctorId: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.login(doctorId, email, password);
  }

  @Get('protected')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('Doctor')
  protectedRoute() {
    return { message: 'Acceso permitido para rol Doctor' };
  }
}
