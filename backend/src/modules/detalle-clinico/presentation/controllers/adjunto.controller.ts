// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/adjunto.controller.ts

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

import { CreateAdjuntoUseCase } from '../../application/use-cases/create-adjunto.usecase';
import { UpdateAdjuntoUseCase } from '../../application/use-cases/update-adjunto.usecase';
import { GetAdjuntoByIdUseCase } from '../../application/use-cases/get-adjunto-by-id.usecase';
import { GetAdjuntoByHceUseCase } from '../../application/use-cases/get-adjunto-by-hce.usecase';
import { DeleteAdjuntoUseCase } from '../../application/use-cases/delete-adjunto.usecase';

@Controller('adjunto')
@UseGuards(AuthGuard, RolesGuard, PermissionsGuard)
export class AdjuntoController {
  constructor(
    private readonly createAdjunto: CreateAdjuntoUseCase,
    private readonly updateAdjunto: UpdateAdjuntoUseCase,
    private readonly getById: GetAdjuntoByIdUseCase,
    private readonly getByHce: GetAdjuntoByHceUseCase,
    private readonly deleteAdjunto: DeleteAdjuntoUseCase,
  ) {}

  @Post()
  @Roles('MEDICO', 'ADMIN')
  create(@Body() body: any) {
    return this.createAdjunto.execute({
      idHce: Number(body.idHce),
      url: body.url,
    });
  }

  @Put(':id')
  @Roles('MEDICO', 'ADMIN')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateAdjunto.execute(id, {
      url: body.url,
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
    return this.deleteAdjunto.execute(id);
  }
}