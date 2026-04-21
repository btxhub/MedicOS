import { Pool } from 'pg';
import type { SuscripcionRepository } from '../../domain/repositories/suscripcion.repository';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export class SuscripcionRepositoryImpl implements SuscripcionRepository {

  async save(data: any): Promise<any> {
    const result = await pool.query(
      `INSERT INTO suscripcion (usuario_id, plan, estado)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [data.usuario_id, data.plan, data.estado]
    );
    return result.rows[0];
  }

  async findById(id: string): Promise<any | null> {
    const result = await pool.query(
      `SELECT * FROM suscripcion WHERE id = $1`,
      [id]
    );
    return result.rows[0] || null;
  }

  async update(data: any): Promise<any> {
    const result = await pool.query(
      `UPDATE suscripcion
       SET usuario_id = $1, plan = $2, estado = $3
       WHERE id = $4
       RETURNING *`,
      [data.usuario_id, data.plan, data.estado, data.id]
    );
    return result.rows[0] || null;
  }

  async delete(id: string): Promise<void> {
    await pool.query(`DELETE FROM suscripcion WHERE id = $1`, [id]);
  }

  async savePago(data: any): Promise<any> {
    return data;
  }

  async findPagoById(id: string): Promise<any | null> {
    return null;
  }

  async updatePago(data: any): Promise<any> {
    return data;
  }

  async deletePago(id: string): Promise<void> {}
}