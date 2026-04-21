// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/adjunto.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { CreateAdjuntoUseCase } from '../../application/use-cases/create-adjunto.usecase';
import { UpdateAdjuntoUseCase } from '../../application/use-cases/update-adjunto.usecase';
import { GetAdjuntoByIdUseCase } from '../../application/use-cases/get-adjunto-by-id.usecase';
import { GetAdjuntoByHceUseCase } from '../../application/use-cases/get-adjunto-by-hce.usecase';
import { DeleteAdjuntoUseCase } from '../../application/use-cases/delete-adjunto.usecase';

@Controller('adjunto')
export class AdjuntoController {
  constructor(
    private readonly createAdjuntoUseCase: CreateAdjuntoUseCase,
    private readonly updateAdjuntoUseCase: UpdateAdjuntoUseCase,
    private readonly getById: GetAdjuntoByIdUseCase,
    private readonly getByHce: GetAdjuntoByHceUseCase,
    private readonly deleteAdjunto: DeleteAdjuntoUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createAdjuntoUseCase.execute({
      idHce: Number(body.idHce),
      url: body.url,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateAdjuntoUseCase.execute(id, {
      idHce: Number(body.idHce),
      url: body.url,
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
    return this.deleteAdjunto.execute(id);
  }
}