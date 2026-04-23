// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/receta.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { CreateRecetaUseCase } from '../../application/use-cases/create-receta.usecase';
import { UpdateRecetaUseCase } from '../../application/use-cases/update-receta.usecase';
import { GetRecetaByIdUseCase } from '../../application/use-cases/get-receta-by-id.usecase';
import { GetRecetaByHceUseCase } from '../../application/use-cases/get-receta-by-hce.usecase';
import { DeleteRecetaUseCase } from '../../application/use-cases/delete-receta.usecase';

@Controller('receta')
export class RecetaController {
  constructor(
    private readonly createReceta: CreateRecetaUseCase,
    private readonly updateReceta: UpdateRecetaUseCase,
    private readonly getById: GetRecetaByIdUseCase,
    private readonly getByHce: GetRecetaByHceUseCase,
    private readonly deleteReceta: DeleteRecetaUseCase,
  ) {}

  @Post()
  async create(@Body() body: any) {
    return await this.createReceta.execute({
      idHce: body.idHce,
      descripcion: body.descripcion,
    });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.updateReceta.execute(id, {
      descripcion: body.descripcion,
    });
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.getById.execute(id);
  }

  @Get('hce/:id')
  async findByHce(@Param('id') id: string) {
    return await this.getByHce.execute(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.deleteReceta.execute(id);
  }
}