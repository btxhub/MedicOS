// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/presentation/controllers/signos-vitales.controller.ts

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

import { CreateSignosVitalesUseCase } from '../../application/use-cases/create-signos-vitales.usecase';
import { UpdateSignosVitalesUseCase } from '../../application/use-cases/update-signos-vitales.usecase';
import { GetSignosVitalesByIdUseCase } from '../../application/use-cases/get-signos-vitales-by-id.usecase';
import { GetSignosVitalesByHceUseCase } from '../../application/use-cases/get-signos-vitales-by-hce.usecase';
import { DeleteSignosVitalesUseCase } from '../../application/use-cases/delete-signos-vitales.usecase';

@Controller('signos-vitales')
@UseGuards(AuthGuard, RolesGuard, PermissionsGuard)
export class SignosVitalesController {
  constructor(
    private readonly createSignosVitales: CreateSignosVitalesUseCase,
    private readonly updateSignosVitales: UpdateSignosVitalesUseCase,
    private readonly getById: GetSignosVitalesByIdUseCase,
    private readonly getByHce: GetSignosVitalesByHceUseCase,
    private readonly deleteSignosVitales: DeleteSignosVitalesUseCase,
  ) {}

  @Post()
  @Roles('MEDICO', 'ADMIN')
  create(@Body() body: any) {
    return this.createSignosVitales.execute({
      idHce: Number(body.idHce),
      data: body.data,
    });
  }

  @Put(':id')
  @Roles('MEDICO', 'ADMIN')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateSignosVitales.execute(id, {
      data: body.data,
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
    return this.deleteSignosVitales.execute(id);
  }
}