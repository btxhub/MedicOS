// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/tratamiento.controller.ts

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

import { CreateTratamientoUseCase } from '../../application/use-cases/create-tratamiento.usecase';
import { UpdateTratamientoUseCase } from '../../application/use-cases/update-tratamiento.usecase';
import { GetTratamientoByIdUseCase } from '../../application/use-cases/get-tratamiento-by-id.usecase';
import { GetTratamientoByHceUseCase } from '../../application/use-cases/get-tratamiento-by-hce.usecase';
import { DeleteTratamientoUseCase } from '../../application/use-cases/delete-tratamiento.usecase';

@Controller('tratamiento')
@UseGuards(AuthGuard, RolesGuard, PermissionsGuard)
export class TratamientoController {
  constructor(
    private readonly createTratamiento: CreateTratamientoUseCase,
    private readonly updateTratamiento: UpdateTratamientoUseCase,
    private readonly getById: GetTratamientoByIdUseCase,
    private readonly getByHce: GetTratamientoByHceUseCase,
    private readonly deleteTratamiento: DeleteTratamientoUseCase,
  ) {}

  @Post()
  @Roles('MEDICO', 'ADMIN')
  create(@Body() body: any) {
    return this.createTratamiento.execute({
      idHce: Number(body.idHce),
      descripcion: body.descripcion,
    });
  }

  @Put(':id')
  @Roles('MEDICO', 'ADMIN')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateTratamiento.execute(id, {
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
    return this.deleteTratamiento.execute(id);
  }
}