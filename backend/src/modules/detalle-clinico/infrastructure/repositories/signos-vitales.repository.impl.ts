// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/infrastructure/repositories/signos-vitales.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class SignosVitalesRepositoryImpl {
  constructor(private readonly pool: Pool) {}

  async findById(id: number) {
    const result = await this.pool.query(
      `SELECT id, hce_id, data, created_at
       FROM signos_vitales
       WHERE id = $1`,
      [id],
    );

    const row = result.rows?.[0];
    if (!row) return null;

    const data = typeof row.data === 'string'
      ? JSON.parse(row.data)
      : row.data || {};

    return {
      id: row.id,
      idHce: row.hce_id,
      ...data,
      createdSig: row.created_at,
    };
  }

  async findByHce(idHce: number) {
    const result = await this.pool.query(
      `SELECT id, hce_id, data, created_at
       FROM signos_vitales
       WHERE hce_id = $1
       ORDER BY created_at DESC`,
      [idHce],
    );

    return result.rows.map((row) => {
      const data = typeof row.data === 'string'
        ? JSON.parse(row.data)
        : row.data || {};

      return {
        id: row.id,
        idHce: row.hce_id,
        ...data,
        createdSig: row.created_at,
      };
    });
  }

  async create(data: any) {
    const payload = {
      presionArterialSv: data.presion,
      frecuenciaCardiacaSv: data.fc,
      frecuenciaRespiratoriaSv: data.fr,
      temperaturaSv: data.temp,
      pesoSv: data.peso,
      tallaSv: data.talla,
      saturacionOxigenoSv: data.satO2,
    };

    const result = await this.pool.query(
      `INSERT INTO signos_vitales (hce_id, data)
       VALUES ($1, $2::jsonb)
       RETURNING id, hce_id, data, created_at`,
      [data.idHce, JSON.stringify(payload)],
    );

    const row = result.rows[0];

    return {
      id: row.id,
      idHce: row.hce_id,
      ...payload,
      createdSig: row.created_at,
    };
  }

  async update(id: number, data: any) {
    const current = await this.findById(id);
    if (!current) return null;

    const payload = {
      presionArterialSv: data.presion,
      frecuenciaCardiacaSv: data.fc,
      frecuenciaRespiratoriaSv: data.fr,
      temperaturaSv: data.temp,
      pesoSv: data.peso,
      tallaSv: data.talla,
      saturacionOxigenoSv: data.satO2,
    };

    const result = await this.pool.query(
      `UPDATE signos_vitales
       SET data = $1
       WHERE id = $2
       RETURNING id, hce_id, data, created_at`,
      [JSON.stringify(payload), id],
    );

    const row = result.rows[0];

    return {
      id: row.id,
      idHce: row.hce_id,
      ...payload,
      createdSig: row.created_at,
    };
  }
}