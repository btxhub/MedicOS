// ARCHIVO: /home/btx/MedicOS/backend/src/modules/sistema/sistema.controller.ts

import {
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../../core/security/guards/auth.guard';
import { RolesGuard } from '../../core/security/guards/roles.guard';

@Controller('sistema')
@UseGuards(AuthGuard, RolesGuard)
export class SistemaController {
  constructor() {}

  @Get()
  health() {
    return { status: 'ok' };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return { id };
  }
}