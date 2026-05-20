// ARCHIVO: /home/btx/MedicOS/backend/src/modules/usuario/usuario.controller.ts

import { Controller, Post, Get, Body, Param, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '../../core/security/guards/auth.guard';
import { RateLimitGuard } from '../../core/security/guards/rate-limit.guard';
import { TokenRevocationGuard } from '../../core/security/guards/token-revocation.guard';

import { CreateUserUseCase } from './application/use-cases/create-user.usecase';
import { GetUsuarioByIdUseCase } from './application/use-cases/get-usuario-by-id.usecase';
import { AutenticarUsuarioUseCase } from './application/use-cases/autenticar-usuario.use-case';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUsuarioByIdUseCase: GetUsuarioByIdUseCase,
    private readonly autenticarUsuarioUseCase: AutenticarUsuarioUseCase,
  ) {}

  @Post()
  @UseGuards(RateLimitGuard)
  create(@Body() body: any) {
    return this.createUserUseCase.execute(body);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findById(@Param('id') id: string) {
    return this.getUsuarioByIdUseCase.execute(id);
  }

  @Post('login')
  @UseGuards(RateLimitGuard)
  login(@Body() body: any) {
    const emailAcceso = body.emailAcceso || body.email;
    const password = body.password;

    return this.autenticarUsuarioUseCase.execute(emailAcceso, password);
  }

  @Post('logout')
  @UseGuards(AuthGuard, TokenRevocationGuard)
  logout(@Req() request: any) {
    const authHeader = request.headers['authorization'];
    const token = authHeader.substring(7).trim();

    TokenRevocationGuard.revoke(token);

    return { logout: true };
  }
}