// ARCHIVO: src/modules/detalle-clinico/presentation/controllers/tratamiento.controller.ts

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTratamientoUseCase } from '../../application/use-cases/create-tratamiento.usecase';
import { UpdateTratamientoUseCase } from '../../application/use-cases/update-tratamiento.usecase';
import { GetTratamientoByIdUseCase } from '../../application/use-cases/get-tratamiento-by-id.usecase';
import { GetTratamientoByHceUseCase } from '../../application/use-cases/get-tratamiento-by-hce.usecase';

@Controller('tratamiento')
export class TratamientoController {
  constructor(
    private readonly createTratamientoUseCase: CreateTratamientoUseCase,
    private readonly updateTratamientoUseCase: UpdateTratamientoUseCase,
    private readonly getTratamientoByIdUseCase: GetTratamientoByIdUseCase,
    private readonly getTratamientoByHceUseCase: GetTratamientoByHceUseCase,
  ) {}

  @Post()
  async create(@Body() body: any) {
    return await this.createTratamientoUseCase.execute(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.getTratamientoByIdUseCase.execute(id);
  }

  @Get('hce/:idHce')
  async getByHce(@Param('idHce') idHce: string) {
    return await this.getTratamientoByHceUseCase.execute(idHce);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.updateTratamientoUseCase.execute(id, body);
  }
}