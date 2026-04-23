// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/infrastructure/repositories/tratamiento.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class TratamientoRepositoryImpl {
  constructor(private readonly pool: Pool) {}

  async findById(id: number) {
    const result = await this.pool.query(
      `SELECT id, hce_id, descripcion, created_at
       FROM tratamiento
       WHERE id = $1`,
      [id],
    );

    const row = result.rows?.[0];
    if (!row) return null;

    return {
      idTrat: row.id,
      idHce: row.hce_id,
      descripcionTrat: row.descripcion,
      createdTrat: row.created_at,
    };
  }

  async findByHce(idHce: number) {
    const result = await this.pool.query(
      `SELECT id, hce_id, descripcion, created_at
       FROM tratamiento
       WHERE hce_id = $1
       ORDER BY created_at DESC`,
      [idHce],
    );

    return result.rows.map((row) => ({
      idTrat: row.id,
      idHce: row.hce_id,
      descripcionTrat: row.descripcion,
      createdTrat: row.created_at,
    }));
  }

  async create(data: any) {
    const result = await this.pool.query(
      `INSERT INTO tratamiento (hce_id, descripcion)
       VALUES ($1, $2)
       RETURNING id, hce_id, descripcion, created_at`,
      [data.idHce, data.descripcion],
    );

    const row = result.rows[0];

    return {
      idTrat: row.id,
      idHce: row.hce_id,
      descripcionTrat: row.descripcion,
      createdTrat: row.created_at,
    };
  }

  async update(id: number, data: any) {
    const result = await this.pool.query(
      `UPDATE tratamiento
       SET descripcion = $1
       WHERE id = $2
       RETURNING id, hce_id, descripcion, created_at`,
      [data.descripcion, id],
    );

    const row = result.rows?.[0];
    if (!row) return null;

    return {
      idTrat: row.id,
      idHce: row.hce_id,
      descripcionTrat: row.descripcion,
      createdTrat: row.created_at,
    };
  }

  async delete(id: number) {
    await this.pool.query(
      `DELETE FROM tratamiento WHERE id = $1`,
      [id],
    );

    return { success: true };
  }
}