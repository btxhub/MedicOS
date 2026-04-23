// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/signos-vitales.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { CreateSignosVitalesUseCase } from '../../application/use-cases/create-signos-vitales.usecase';
import { UpdateSignosVitalesUseCase } from '../../application/use-cases/update-signos-vitales.usecase';
import { GetSignosVitalesByIdUseCase } from '../../application/use-cases/get-signos-vitales-by-id.usecase';
import { GetSignosVitalesByHceUseCase } from '../../application/use-cases/get-signos-vitales-by-hce.usecase';
import { DeleteSignosVitalesUseCase } from '../../application/use-cases/delete-signos-vitales.usecase';

@Controller('signos-vitales')
export class SignosVitalesController {
  constructor(
    private readonly createSv: CreateSignosVitalesUseCase,
    private readonly updateSv: UpdateSignosVitalesUseCase,
    private readonly getById: GetSignosVitalesByIdUseCase,
    private readonly getByHce: GetSignosVitalesByHceUseCase,
    private readonly deleteSv: DeleteSignosVitalesUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createSv.execute({
      idHce: body.idHce,
      presion: body.presion,
      fc: body.fc,
      fr: body.fr,
      temp: body.temp,
      peso: body.peso,
      talla: body.talla,
      satO2: body.satO2,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateSv.execute(id, {
      presion: body.presion,
      fc: body.fc,
      fr: body.fr,
      temp: body.temp,
      peso: body.peso,
      talla: body.talla,
      satO2: body.satO2,
    });
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.getById.execute(id);
  }

  @Get('hce/:id')
  findByHce(@Param('id') id: string) {
    return this.getByHce.execute(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteSv.execute(id);
  }
}