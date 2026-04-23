import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateSuscripcionUseCase } from './application/use-cases/create-suscripcion.usecase';
import { GetSuscripcionByIdUseCase } from './application/use-cases/get-suscripcion-by-id.usecase';

@Controller('suscripcion')
export class SuscripcionController {
  constructor(
    private readonly createSuscripcionUseCase: CreateSuscripcionUseCase,
    private readonly getSuscripcionByIdUseCase: GetSuscripcionByIdUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createSuscripcionUseCase.execute(body);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.getSuscripcionByIdUseCase.execute(id);
  }
}