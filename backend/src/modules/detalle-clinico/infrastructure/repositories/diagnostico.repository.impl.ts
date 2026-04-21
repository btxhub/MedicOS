// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/infrastructure/repositories/diagnostico.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DiagnosticoRepositoryImpl {
  constructor(private readonly pool: Pool) {}

  async create(data: any) {
    const result = await this.pool.query(
      `INSERT INTO diagnostico (
        hce_id,
        descripcion,
        created_at
      ) VALUES ($1,$2,NOW()) RETURNING id, hce_id, descripcion, created_at`,
      [
        Number(data.idHce),
        data.descripcion,
      ],
    );

    return result.rows[0];
  }

  async findById(id: number) {
    const result = await this.pool.query(
      `SELECT id, hce_id, descripcion, created_at
       FROM diagnostico
       WHERE id = $1`,
      [Number(id)],
    );
    return result.rows[0];
  }

  async findByHce(idHce: number) {
    const result = await this.pool.query(
      `SELECT id, hce_id, descripcion, created_at
       FROM diagnostico
       WHERE hce_id = $1
       ORDER BY created_at ASC`,
      [Number(idHce)],
    );
    return result.rows;
  }

  async delete(id: number) {
    const result = await this.pool.query(
      `DELETE FROM diagnostico WHERE id = $1`,
      [Number(id)],
    );
    return result.rowCount;
  }
}