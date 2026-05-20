// ARCHIVO: /home/btx/MedicOS/backend/src/modules/hce/infrastructure/hce.controller.ts

import {
  Controller,
  Get,
  Param,
  UseGuards,
  Put,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '../../../core/security/guards/auth.guard';
import { RolesGuard } from '../../../core/security/guards/roles.guard';
import { Roles } from '../../../core/security/decorators/roles.decorator';
import { GetHceByIdUseCase } from '../application/use-cases/get-hce-by-id.usecase';
import { UpdateHceUseCase } from '../application/use-cases/update-hce.usecase';

@Controller('hce')
@UseGuards(AuthGuard, RolesGuard)
export class HceController {
  constructor(
    private readonly getHceByIdUseCase: GetHceByIdUseCase,
    private readonly updateHceUseCase: UpdateHceUseCase,
  ) {}

  @Get(':id')
  @Roles('MEDICO', 'ADMIN')
  async getById(@Param('id') id: string) {
    return this.getHceByIdUseCase.execute(Number(id));
  }

  @Put('evoluciones/:id')
  @Roles('MEDICO', 'ADMIN')
  async updateEvolucion(
    @Param('id') id: string,
    @Body() body: any,
  ) {
    return this.updateHceUseCase.execute({ id: Number(id), ...body });
  }
}