import { Pool } from 'pg';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export class UserRepositoryImpl implements UsuarioRepository {

  async create(data: any) {
    console.log('DB INSERT:', data);

    const client = await pool.connect();

    try {
      const result = await client.query(
        `INSERT INTO usuario (email, password)
         VALUES ($1, $2)
         RETURNING id, email, password, created_at`,
        [data.email, data.password]
      );

      console.log('DB RESULT:', result.rows[0]);

      return result.rows[0];

    } finally {
      client.release();
    }
  }

  async findById(id: string) {
    const result = await pool.query(
      `SELECT id, email, password, created_at
       FROM usuario
       WHERE id = $1`,
      [id]
    );
    return result.rows[0] || null;
  }

  async findByEmail(email: string) {
    const result = await pool.query(
      `SELECT id, email, password, created_at
       FROM usuario
       WHERE email = $1`,
      [email]
    );
    return result.rows[0] || null;
  }

  async update(id: string, data: any) {
    const result = await pool.query(
      `UPDATE usuario
       SET email = $1, password = $2
       WHERE id = $3
       RETURNING id, email, password, created_at`,
      [data.email, data.password, id]
    );
    return result.rows[0] || null;
  }

  async delete(id: string) {
    await pool.query(
      `DELETE FROM usuario WHERE id = $1`,
      [id]
    );
    return true;
  }
}