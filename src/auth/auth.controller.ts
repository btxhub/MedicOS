import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {

  @Get('protected')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('Doctor')
  protectedRoute() {
    return { message: 'Acceso permitido para rol Doctor' };
  }

}
