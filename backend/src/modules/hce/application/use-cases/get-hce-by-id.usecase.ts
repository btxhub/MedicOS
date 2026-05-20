// ARCHIVO: /home/btx/MedicOS/backend/src/modules/hce/application/use-cases/get-hce-by-id.usecase.ts

import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class GetHceByIdUseCase {
  constructor(
    @Inject(Pool) private readonly pool: Pool,
  ) {}

  async execute(id: number) {
    const result = await this.pool.query(
      `
      SELECT id, paciente_id, usuario_id, created_at
      FROM hce
      WHERE id = $1
      `,
      [id],
    );

    return result.rows[0] || null;
  }
}