import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateUserUseCase } from './application/use-cases/create-user.usecase';
import { GetUsuarioByIdUseCase } from './application/use-cases/get-usuario-by-id.usecase';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUsuarioByIdUseCase: GetUsuarioByIdUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createUserUseCase.execute(body);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.getUsuarioByIdUseCase.execute(id);
  }
}