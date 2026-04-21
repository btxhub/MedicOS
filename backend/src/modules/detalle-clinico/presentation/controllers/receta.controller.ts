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
    private readonly createRecetaUseCase: CreateRecetaUseCase,
    private readonly updateRecetaUseCase: UpdateRecetaUseCase,
    private readonly getById: GetRecetaByIdUseCase,
    private readonly getByHce: GetRecetaByHceUseCase,
    private readonly deleteReceta: DeleteRecetaUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createRecetaUseCase.execute({
      idHce: Number(body.idHce),
      descripcion: body.descripcion,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateRecetaUseCase.execute(id, {
      idHce: Number(body.idHce),
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
    return this.deleteReceta.execute(id);
  }
}