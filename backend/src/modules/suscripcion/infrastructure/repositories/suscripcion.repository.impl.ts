import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import type { SuscripcionRepository } from '../../domain/repositories/suscripcion.repository';

@Injectable()
export class SuscripcionRepositoryImpl implements SuscripcionRepository {
  constructor(@Inject(Pool) private readonly pool: Pool) {}

  async save(data: any): Promise<any> {
    const result = await this.pool.query(
      `INSERT INTO suscripcion (usuario_id, plan, estado)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [data.usuario_id, data.plan, data.estado],
    );
    return result.rows[0];
  }

  async findById(id: string): Promise<any | null> {
    const result = await this.pool.query(
      `SELECT * FROM suscripcion WHERE id = $1`,
      [id],
    );
    return result.rows[0] || null;
  }

  async update(id: number, data: any): Promise<any> {
    const result = await this.pool.query(
      `UPDATE suscripcion
       SET usuario_id = COALESCE($1, usuario_id),
           plan       = COALESCE($2, plan),
           estado     = COALESCE($3, estado)
       WHERE id = $4
       RETURNING *`,
      [data.usuario_id ?? null, data.plan ?? null, data.estado ?? null, id],
    );
    return result.rows[0] || null;
  }

  async delete(id: number): Promise<void> {
    await this.pool.query(`DELETE FROM suscripcion WHERE id = $1`, [id]);
  }

  async savePago(data: any): Promise<any> {
    return data;
  }

  async findPagoById(id: string): Promise<any | null> {
    return null;
  }

  async updatePago(id: string, data: any): Promise<any> {
    return data;
  }

  async deletePago(id: string): Promise<void> {
    return;
  }
}