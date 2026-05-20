// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/diagnostico.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../../../core/security/guards/auth.guard';
import { RolesGuard } from '../../../../core/security/guards/roles.guard';
import { PermissionsGuard } from '../../../../core/security/guards/permissions.guard';
import { Roles } from '../../../../core/security/decorators/roles.decorator';

import { CreateDiagnosticoUseCase } from '../../application/use-cases/create-diagnostico.usecase';
import { UpdateDiagnosticoUseCase } from '../../application/use-cases/update-diagnostico.usecase';
import { GetDiagnosticoByIdUseCase } from '../../application/use-cases/get-diagnostico-by-id.usecase';
import { GetDiagnosticoByHceUseCase } from '../../application/use-cases/get-diagnostico-by-hce.usecase';
import { DeleteDiagnosticoUseCase } from '../../application/use-cases/delete-diagnostico.usecase';

@Controller('diagnostico')
@UseGuards(AuthGuard, RolesGuard, PermissionsGuard)
export class DiagnosticoController {
  constructor(
    private readonly createDiagnostico: CreateDiagnosticoUseCase,
    private readonly updateDiagnostico: UpdateDiagnosticoUseCase,
    private readonly getById: GetDiagnosticoByIdUseCase,
    private readonly getByHce: GetDiagnosticoByHceUseCase,
    private readonly deleteDiagnostico: DeleteDiagnosticoUseCase,
  ) {}

  @Post()
  @Roles('MEDICO', 'ADMIN')
  create(@Body() body: any) {
    return this.createDiagnostico.execute({
      idHce: Number(body.idHce),
      descripcion: body.descripcion,
    });
  }

  @Put(':id')
  @Roles('MEDICO', 'ADMIN')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateDiagnostico.execute(id, {
      descripcion: body.descripcion,
    });
  }

  @Get(':id')
  @Roles('MEDICO', 'ADMIN')
  findById(@Param('id') id: string) {
    return this.getById.execute(id);
  }

  @Get('hce/:id')
  @Roles('MEDICO', 'ADMIN')
  findByHce(@Param('id') id: string) {
    return this.getByHce.execute(id);
  }

  @Delete(':id')
  @Roles('MEDICO', 'ADMIN')
  delete(@Param('id') id: string) {
    return this.deleteDiagnostico.execute(id);
  }
}