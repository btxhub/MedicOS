import { Controller, Post, Body } from '@nestjs/common';
import { CreatePublicidadUseCase } from './application/use-cases/create-publicidad.usecase';

@Controller('publicidad')
export class PublicidadController {
  constructor(
    private readonly createPublicidadUseCase: CreatePublicidadUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createPublicidadUseCase.execute(body);
  }
}