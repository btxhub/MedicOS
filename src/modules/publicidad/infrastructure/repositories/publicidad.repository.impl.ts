import { Pool } from 'pg';
import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export class PublicidadRepositoryImpl implements PublicidadRepository {

  async save(data: any): Promise<any> {
    const result = await pool.query(
      `INSERT INTO publicidad (titulo, estado)
       VALUES ($1, $2)
       RETURNING *`,
      [data.titulo, data.estado]
    );
    return result.rows[0];
  }

  async findById(id: string): Promise<any | null> {
    const result = await pool.query(
      `SELECT * FROM publicidad WHERE id = $1`,
      [id]
    );
    return result.rows[0] || null;
  }

  async update(data: any): Promise<any> {
    const result = await pool.query(
      `UPDATE publicidad
       SET titulo = $1, estado = $2
       WHERE id = $3
       RETURNING *`,
      [data.titulo, data.estado, data.id]
    );
    return result.rows[0] || null;
  }

  async delete(id: string): Promise<void> {
    await pool.query(`DELETE FROM publicidad WHERE id = $1`, [id]);
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