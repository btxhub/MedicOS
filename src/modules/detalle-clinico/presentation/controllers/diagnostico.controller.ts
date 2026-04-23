// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/diagnostico.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { CreateDiagnosticoUseCase } from '../../application/use-cases/create-diagnostico.usecase';
import { UpdateDiagnosticoUseCase } from '../../application/use-cases/update-diagnostico.usecase';
import { GetDiagnosticoByIdUseCase } from '../../application/use-cases/get-diagnostico-by-id.usecase';
import { GetDiagnosticoByHceUseCase } from '../../application/use-cases/get-diagnostico-by-hce.usecase';
import { DeleteDiagnosticoUseCase } from '../../application/use-cases/delete-diagnostico.usecase';

@Controller('diagnostico')
export class DiagnosticoController {
  constructor(
    private readonly createDiagnostico: CreateDiagnosticoUseCase,
    private readonly updateDiagnostico: UpdateDiagnosticoUseCase,
    private readonly getById: GetDiagnosticoByIdUseCase,
    private readonly getByHce: GetDiagnosticoByHceUseCase,
    private readonly deleteDiagnostico: DeleteDiagnosticoUseCase,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.createDiagnostico.execute({
      idHce: Number(body.idHce),
      descripcion: body.descripcion,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateDiagnostico.execute(id, {
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
    return this.deleteDiagnostico.execute(id);
  }
}