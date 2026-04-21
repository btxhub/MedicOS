// ARCHIVO: signos-vitales.controller.ts

import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateSignosVitalesUseCase } from '../../application/use-cases/create-signos-vitales.usecase';
import { UpdateSignosVitalesUseCase } from '../../application/use-cases/update-signos-vitales.usecase';
import { DeleteSignosVitalesUseCase } from '../../application/use-cases/delete-signos-vitales.usecase';
import { SignosVitales } from '../../domain/entities/signos-vitales.entity';

@Controller('signos-vitales')
export class SignosVitalesController {
  constructor(
    private readonly createSignosVitalesUseCase: CreateSignosVitalesUseCase,
    private readonly updateSignosVitalesUseCase: UpdateSignosVitalesUseCase,
    private readonly deleteSignosVitalesUseCase: DeleteSignosVitalesUseCase,
  ) {}

  @Post()
  async create(@Body() body: any) {
    const entity = new SignosVitales(
      null,
      body.idHce,
      body.presionArterialSv,
      body.frecuenciaCardiacaSv,
      body.frecuenciaRespiratoriaSv,
      body.temperaturaSv,
      body.saturacionOxigenoSv,
      body.pesoSv,
      body.tallaSv,
      null,
    );

    return await this.createSignosVitalesUseCase.execute(entity);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const entity = new SignosVitales(
      id,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    );

    return await this.updateSignosVitalesUseCase.execute(entity);
  }

  @Get('hce/:hceId')
  async getByHce(@Param('hceId') hceId: string) {
    const entity = new SignosVitales(
      null,
      hceId,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    );

    return await this.updateSignosVitalesUseCase.execute(entity);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const entity = new SignosVitales(
      id,
      body.idHce,
      body.presionArterialSv,
      body.frecuenciaCardiacaSv,
      body.frecuenciaRespiratoriaSv,
      body.temperaturaSv,
      body.saturacionOxigenoSv,
      body.pesoSv,
      body.tallaSv,
      null,
    );

    return await this.updateSignosVitalesUseCase.execute(entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.deleteSignosVitalesUseCase.execute(id);
  }
}