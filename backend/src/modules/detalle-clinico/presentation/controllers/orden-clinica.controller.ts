// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/orden-clinica.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../../../../core/security/guards/auth.guard';
import { RolesGuard } from '../../../../core/security/guards/roles.guard';
import { PermissionsGuard } from '../../../../core/security/guards/permissions.guard';
import { Roles } from '../../../../core/security/decorators/roles.decorator';

import { CreateOrdenClinicaUseCase } from '../../application/use-cases/create-orden-clinica.usecase';
import { UpdateOrdenClinicaUseCase } from '../../application/use-cases/update-orden-clinica.usecase';
import { GetOrdenClinicaByIdUseCase } from '../../application/use-cases/get-orden-clinica-by-id.usecase';
import { GetOrdenClinicaByHceUseCase } from '../../application/use-cases/get-orden-clinica-by-hce.usecase';
import { DeleteOrdenClinicaUseCase } from '../../application/use-cases/delete-orden-clinica.usecase';

@Controller('orden-clinica')
@UseGuards(AuthGuard, RolesGuard, PermissionsGuard)
export class OrdenClinicaController {
  constructor(
    private readonly createOrden: CreateOrdenClinicaUseCase,
    private readonly updateOrden: UpdateOrdenClinicaUseCase,
    private readonly getById: GetOrdenClinicaByIdUseCase,
    private readonly getByHce: GetOrdenClinicaByHceUseCase,
    private readonly deleteOrden: DeleteOrdenClinicaUseCase,
  ) {}

  @Post()
  @Roles('MEDICO', 'ADMIN')
  create(@Body() body: any) {
    return this.createOrden.execute({
      idHce: Number(body.idHce),
      idDoc: Number(body.idDoc),
      tipoOrden: body.tipoOrden,
      prioridadOrden: body.prioridadOrden,
      indicacionClinica: body.indicacionClinica,
    });
  }

  @Put(':id')
  @Roles('MEDICO', 'ADMIN')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateOrden.execute(id, {
      tipoOrden: body.tipoOrden,
      prioridadOrden: body.prioridadOrden,
      indicacionClinica: body.indicacionClinica,
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
    return this.deleteOrden.execute(id);
  }
}
