// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/receta.controller.ts

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

import { CreateRecetaUseCase } from '../../application/use-cases/create-receta.usecase';
import { UpdateRecetaUseCase } from '../../application/use-cases/update-receta.usecase';
import { GetRecetaByIdUseCase } from '../../application/use-cases/get-receta-by-id.usecase';
import { GetRecetaByHceUseCase } from '../../application/use-cases/get-receta-by-hce.usecase';
import { DeleteRecetaUseCase } from '../../application/use-cases/delete-receta.usecase';

@Controller('receta')
@UseGuards(AuthGuard, RolesGuard, PermissionsGuard)
export class RecetaController {
  constructor(
    private readonly createReceta: CreateRecetaUseCase,
    private readonly updateReceta: UpdateRecetaUseCase,
    private readonly getById: GetRecetaByIdUseCase,
    private readonly getByHce: GetRecetaByHceUseCase,
    private readonly deleteReceta: DeleteRecetaUseCase,
  ) {}

  @Post()
  @Roles('MEDICO', 'ADMIN')
  create(@Body() body: any) {
    return this.createReceta.execute({
      idHce: Number(body.idHce),
      descripcion: body.descripcion,
      tipo: body.tipo || 'RECETA',
    });
  }

  @Put(':id')
  @Roles('MEDICO', 'ADMIN')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateReceta.execute(id, {
      descripcion: body.descripcion,
      tipo: body.tipo,
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
    return this.deleteReceta.execute(id);
  }
}