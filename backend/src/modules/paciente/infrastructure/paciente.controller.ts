// ARCHIVO: /home/btx/MedicOS/backend/src/modules/paciente/infrastructure/paciente.controller.ts

import {
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { Pool } from 'pg';
import { AuthGuard } from '../../../core/security/guards/auth.guard';
import { RolesGuard } from '../../../core/security/guards/roles.guard';
import { Roles } from '../../../core/security/decorators/roles.decorator';

@Controller('paciente')
@UseGuards(AuthGuard, RolesGuard)
export class PacienteController {
  constructor(private readonly pool: Pool) {}

  @Get(':id')
  @Roles('MEDICO', 'ADMIN')
  async getById(@Param('id') id: string) {
    const result = await this.pool.query(
      `
      SELECT *
      FROM paciente
      WHERE id = $1
      `,
      [id],
    );

    return result.rows[0] || null;
  }
}