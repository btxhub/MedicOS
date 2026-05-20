// ARCHIVO: src/modules/usuario/infrastructure/repositories/user.repository.impl.ts

import { Inject, Injectable } from '@nestjs/common';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';
import { Pool } from 'pg';

@Injectable()
export class UserRepositoryImpl implements UsuarioRepository {
  constructor(@Inject(Pool) private readonly pool: Pool) {}

  async findById(id: string): Promise<any | null> {
    try {
      const result = await this.pool.query(
        `SELECT id, email, password, created_at
         FROM usuario
         WHERE id = $1`,
        [id],
      );

      return result.rows?.[0] || null;
    } catch (error) {
      console.error('SQL ERROR FIND USER BY ID:', error);
      throw error;
    }
  }

  async findByEmail(emailAcceso: string): Promise<any | null> {
    try {
      const result = await this.pool.query(
        `SELECT id, email, password, created_at
         FROM usuario
         WHERE email = $1`,
        [emailAcceso],
      );

      return result.rows?.[0] || null;
    } catch (error) {
      console.error('SQL ERROR FIND USER BY EMAIL:', error);
      throw error;
    }
  }

  async validateUser(emailAcceso: string): Promise<any | null> {
    try {
      const result = await this.pool.query(
        `SELECT id, email, password, created_at
         FROM usuario
         WHERE email = $1`,
        [emailAcceso],
      );

      return result.rows?.[0] || null;
    } catch (error) {
      console.error('SQL ERROR VALIDATE USER:', error);
      throw error;
    }
  }

  async create(data: any): Promise<any> {
    try {
      const result = await this.pool.query(
        `INSERT INTO usuario (email, password, created_at)
         VALUES ($1, $2, CURRENT_TIMESTAMP)
         RETURNING id, email, created_at`,
        [data.email, data.password],
      );

      return result.rows?.[0] || null;
    } catch (error) {
      console.error('SQL ERROR CREATE USER:', error);
      throw error;
    }
  }

  async update(id: string, data: any): Promise<any> {
    try {
      const result = await this.pool.query(
        `UPDATE usuario
         SET email = $1,
             password = $2
         WHERE id = $3
         RETURNING id, email, created_at`,
        [data.email, data.password, id],
      );

      return result.rows?.[0] || null;
    } catch (error) {
      console.error('SQL ERROR UPDATE USER:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.pool.query(`DELETE FROM usuario WHERE id = $1`, [id]);
      return true;
    } catch (error) {
      console.error('SQL ERROR DELETE USER:', error);
      throw error;
    }
  }
}