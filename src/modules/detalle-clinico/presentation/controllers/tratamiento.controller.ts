// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/tratamiento.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { CreateTratamientoUseCase } from '../../application/use-cases/create-tratamiento.usecase';
import { UpdateTratamientoUseCase } from '../../application/use-cases/update-tratamiento.usecase';
import { GetTratamientoByIdUseCase } from '../../application/use-cases/get-tratamiento-by-id.usecase';
import { GetTratamientoByHceUseCase } from '../../application/use-cases/get-tratamiento-by-hce.usecase';
import { DeleteTratamientoUseCase } from '../../application/use-cases/delete-tratamiento.usecase';

@Controller('tratamiento')
export class TratamientoController {
  constructor(
    private readonly createTratamiento: CreateTratamientoUseCase,
    private readonly updateTratamiento: UpdateTratamientoUseCase,
    private readonly getById: GetTratamientoByIdUseCase,
    private readonly getByHce: GetTratamientoByHceUseCase,
    private readonly deleteTratamiento: DeleteTratamientoUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createTratamiento.execute({
      idHce: body.idHce,
      descripcion: body.descripcion,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateTratamiento.execute(id, {
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
    return this.deleteTratamiento.execute(id);
  }
}