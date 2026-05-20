// ARCHIVO: /home/btx/MedicOS/backend/src/modules/publicidad/infrastructure/publicidad.controller.ts

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

@Controller('publicidad')
@UseGuards(AuthGuard, RolesGuard)
export class PublicidadController {
  constructor(private readonly pool: Pool) {}

  @Get(':id')
  @Roles('ADMIN')
  async getById(@Param('id') id: string) {
    const result = await this.pool.query(
      `
      SELECT *
      FROM publicidad
      WHERE id = $1
      `,
      [id],
    );

    return result.rows[0] || null;
  }
}