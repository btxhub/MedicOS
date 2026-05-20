// ARCHIVO: src/modules/usuario/infrastructure/repositories/acceso.repository.impl.ts

import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import type { AccesoRepository } from '../../domain/repositories/acceso.repository';
import type { Acceso } from '../../domain/entities/acceso.entity';

@Injectable()
export class AccesoRepositoryImpl implements AccesoRepository {
  constructor(
    @Inject(Pool) private readonly pool: Pool,
  ) {}

  async findByUsuarioId(usuarioId: string): Promise<Acceso[]> {
    const result = await this.pool.query(
      `SELECT * FROM acceso WHERE usuario_id = $1`,
      [usuarioId],
    );

    return result.rows;
  }

  async save(acceso: Acceso): Promise<Acceso> {
    throw new Error('Not implemented');
  }

  async findById(id: string): Promise<Acceso | null> {
    throw new Error('Not implemented');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Not implemented');
  }
}