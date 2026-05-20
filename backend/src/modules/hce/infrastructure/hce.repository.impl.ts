
import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class HceRepositoryImpl {
  constructor(@Inject(Pool) private readonly pool: Pool) {}

  async update(data: any): Promise<any> {
    let { id, ...fields } = data;

    if (!id && data.id !== 0) {
      throw new Error('ID requerido');
    }

    const keys = Object.keys(fields);

    if (keys.length === 0) {
      throw new Error('No hay campos para actualizar');
    }

    const setClause = keys
      .map((key, index) => `"${key}" = $${index + 1}`)
      .join(', ');

    const values = Object.values(fields);

    const query = `
      UPDATE hce
      SET ${setClause}
      WHERE id = $${values.length + 1}
      RETURNING *;
    `;

    try {
      const result = await this.pool.query(query, [...values, id]);

      if (result.rows.length === 0) {
        throw new Error('Registro no encontrado');
      }

      return result.rows[0];
    } catch (error) {
      console.error('SQL ERROR:', error.message);
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    await this.pool.query(`DELETE FROM hce WHERE id = $1`, [id]);
  }
}
