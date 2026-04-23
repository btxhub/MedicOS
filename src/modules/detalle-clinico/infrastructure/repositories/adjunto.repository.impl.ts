// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/infrastructure/repositories/adjunto.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class AdjuntoRepositoryImpl {
  constructor(private readonly pool: Pool) {}

  async findById(id: number) {
    const result = await this.pool.query(
      `SELECT id, hce_id, url, created_at
       FROM adjunto
       WHERE id = $1`,
      [id],
    );

    const row = result.rows?.[0];
    if (!row) return null;

    return {
      idAdj: row.id,
      idHce: row.hce_id,
      urlAdj: row.url,
      createdAdj: row.created_at,
    };
  }

  async findByHce(idHce: number) {
    const result = await this.pool.query(
      `SELECT id, hce_id, url, created_at
       FROM adjunto
       WHERE hce_id = $1
       ORDER BY created_at DESC`,
      [idHce],
    );

    return result.rows.map((row) => ({
      idAdj: row.id,
      idHce: row.hce_id,
      urlAdj: row.url,
      createdAdj: row.created_at,
    }));
  }

  async create(data: any) {
    const result = await this.pool.query(
      `INSERT INTO adjunto (hce_id, url)
       VALUES ($1, $2)
       RETURNING id, hce_id, url, created_at`,
      [data.idHce, data.url],
    );

    const row = result.rows[0];

    return {
      idAdj: row.id,
      idHce: row.hce_id,
      urlAdj: row.url,
      createdAdj: row.created_at,
    };
  }

  async update(id: number, data: any) {
    const result = await this.pool.query(
      `UPDATE adjunto
       SET url = $1
       WHERE id = $2
       RETURNING id, hce_id, url, created_at`,
      [data.url, id],
    );

    const row = result.rows?.[0];
    if (!row) return null;

    return {
      idAdj: row.id,
      idHce: row.hce_id,
      urlAdj: row.url,
      createdAdj: row.created_at,
    };
  }

  async delete(id: number) {
    await this.pool.query(
      `DELETE FROM adjunto WHERE id = $1`,
      [id],
    );

    return { success: true };
  }
}