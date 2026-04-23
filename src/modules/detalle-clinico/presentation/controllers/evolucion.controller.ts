// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/evolucion.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { CreateEvolucionUseCase } from '../../application/use-cases/create-evolucion.usecase';
import { UpdateEvolucionUseCase } from '../../application/use-cases/update-evolucion.usecase';
import { GetEvolucionByIdUseCase } from '../../application/use-cases/get-evolucion-by-id.usecase';
import { GetEvolucionByHceUseCase } from '../../application/use-cases/get-evolucion-by-hce.usecase';
import { DeleteEvolucionUseCase } from '../../application/use-cases/delete-evolucion.usecase';

@Controller('evolucion')
export class EvolucionController {
  constructor(
    private readonly createEvolucion: CreateEvolucionUseCase,
    private readonly updateEvolucion: UpdateEvolucionUseCase,
    private readonly getById: GetEvolucionByIdUseCase,
    private readonly getByHce: GetEvolucionByHceUseCase,
    private readonly deleteEvolucion: DeleteEvolucionUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createEvolucion.execute({
      idHce: body.idHce,
      descripcion: body.descripcion,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateEvolucion.execute(id, {
      descripcion: body.descripcion,
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
    return this.deleteEvolucion.execute(id);
  }
}