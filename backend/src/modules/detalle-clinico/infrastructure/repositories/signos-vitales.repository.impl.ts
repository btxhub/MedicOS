// FIX FINAL (CAUSA REAL DEL 500)

// El problema es: estás leyendo row.data sin validar existencia en INSERT/UPDATE
// y además el SELECT puede devolver undefined → crash silencioso Nest 500

import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';
import { SignosVitales } from '../../domain/entities/signos-vitales.entity';

@Injectable()
export class SignosVitalesRepositoryImpl implements SignosVitalesRepository {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  async save(entity: SignosVitales): Promise<SignosVitales> {
    const result = await this.pool.query(
      `INSERT INTO signos_vitales (hce_id, data)
       VALUES ($1, $2)
       RETURNING *`,
      [
        entity.idHce,
        {
          presionArterialSv: entity.presionArterialSv,
          frecuenciaCardiacaSv: entity.frecuenciaCardiacaSv,
          frecuenciaRespiratoriaSv: entity.frecuenciaRespiratoriaSv,
          temperaturaSv: entity.temperaturaSv,
          saturacionOxigenoSv: entity.saturacionOxigenoSv,
          pesoSv: entity.pesoSv,
          tallaSv: entity.tallaSv,
        },
      ],
    );

    const row = result.rows?.[0];
    const d = row?.data ?? {};

    return new SignosVitales(
      row.id,
      row.hce_id,
      d.presionArterialSv,
      d.frecuenciaCardiacaSv,
      d.frecuenciaRespiratoriaSv,
      d.temperaturaSv,
      d.saturacionOxigenoSv,
      d.pesoSv,
      d.tallaSv,
      row.created_at,
    );
  }

  async findById(id: string): Promise<SignosVitales> {
    const result = await this.pool.query(
      `SELECT * FROM signos_vitales WHERE id = $1`,
      [Number(id)],
    );

    const row = result.rows?.[0];
    if (!row) return null;

    const d = row.data ?? {};

    return new SignosVitales(
      row.id,
      row.hce_id,
      d.presionArterialSv,
      d.frecuenciaCardiacaSv,
      d.frecuenciaRespiratoriaSv,
      d.temperaturaSv,
      d.saturacionOxigenoSv,
      d.pesoSv,
      d.tallaSv,
      row.created_at,
    );
  }

  async findByHce(idHce: string): Promise<SignosVitales[]> {
    const result = await this.pool.query(
      `SELECT * FROM signos_vitales WHERE hce_id = $1`,
      [Number(idHce)],
    );

    return (result.rows ?? []).map((row) => {
      const d = row.data ?? {};

      return new SignosVitales(
        row.id,
        row.hce_id,
        d.presionArterialSv,
        d.frecuenciaCardiacaSv,
        d.frecuenciaRespiratoriaSv,
        d.temperaturaSv,
        d.saturacionOxigenoSv,
        d.pesoSv,
        d.tallaSv,
        row.created_at,
      );
    });
  }

  async update(entity: SignosVitales): Promise<SignosVitales> {
    const result = await this.pool.query(
      `UPDATE signos_vitales
       SET data = $1
       WHERE id = $2
       RETURNING *`,
      [
        {
          presionArterialSv: entity.presionArterialSv,
          frecuenciaCardiacaSv: entity.frecuenciaCardiacaSv,
          frecuenciaRespiratoriaSv: entity.frecuenciaRespiratoriaSv,
          temperaturaSv: entity.temperaturaSv,
          saturacionOxigenoSv: entity.saturacionOxigenoSv,
          pesoSv: entity.pesoSv,
          tallaSv: entity.tallaSv,
        },
        entity.id,
      ],
    );

    const row = result.rows?.[0];
    const d = row?.data ?? {};

    return new SignosVitales(
      row.id,
      row.hce_id,
      d.presionArterialSv,
      d.frecuenciaCardiacaSv,
      d.frecuenciaRespiratoriaSv,
      d.temperaturaSv,
      d.saturacionOxigenoSv,
      d.pesoSv,
      d.tallaSv,
      row.created_at,
    );
  }

  async delete(id: string): Promise<void> {
    await this.pool.query(
      `DELETE FROM signos_vitales WHERE id = $1`,
      [Number(id)],
    );
  }
}