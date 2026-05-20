// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/infrastructure/repositories/orden-clinica.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class OrdenClinicaRepositoryImpl {
  constructor(private readonly pool: Pool) {}

  async findById(id: number) {
    const result = await this.pool.query(
      `SELECT "idOrden", "idHce", "idDoc", "tipoOrden", "prioridadOrden", "indicacionClinica", "createdOrden", "updatedOrden"
       FROM "ORDEN_CLINICA"
       WHERE "idOrden" = $1`,
      [id],
    );

    const row = result.rows?.[0];
    if (!row) return null;

    return {
      idOrden: row.idOrden,
      idHce: row.idHce,
      idDoc: row.idDoc,
      tipoOrden: row.tipoOrden,
      prioridadOrden: row.prioridadOrden,
      indicacionClinica: row.indicacionClinica,
      createdOrden: row.createdOrden,
      updatedOrden: row.updatedOrden,
    };
  }

  async findByHce(idHce: number) {
    const result = await this.pool.query(
      `SELECT "idOrden", "idHce", "idDoc", "tipoOrden", "prioridadOrden", "indicacionClinica", "createdOrden", "updatedOrden"
       FROM "ORDEN_CLINICA"
       WHERE "idHce" = $1
       ORDER BY "createdOrden" DESC`,
      [idHce],
    );

    return result.rows.map((row) => ({
      idOrden: row.idOrden,
      idHce: row.idHce,
      idDoc: row.idDoc,
      tipoOrden: row.tipoOrden,
      prioridadOrden: row.prioridadOrden,
      indicacionClinica: row.indicacionClinica,
      createdOrden: row.createdOrden,
      updatedOrden: row.updatedOrden,
    }));
  }

  async create(data: any) {
    const result = await this.pool.query(
      `INSERT INTO "ORDEN_CLINICA" ("idHce", "idDoc", "tipoOrden", "prioridadOrden", "indicacionClinica", "createdOrden", "updatedOrden")
       VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING "idOrden", "idHce", "idDoc", "tipoOrden", "prioridadOrden", "indicacionClinica", "createdOrden", "updatedOrden"`,
      [data.idHce, data.idDoc, data.tipoOrden, data.prioridadOrden, data.indicacionClinica],
    );

    const row = result.rows[0];

    return {
      idOrden: row.idOrden,
      idHce: row.idHce,
      idDoc: row.idDoc,
      tipoOrden: row.tipoOrden,
      prioridadOrden: row.prioridadOrden,
      indicacionClinica: row.indicacionClinica,
      createdOrden: row.createdOrden,
      updatedOrden: row.updatedOrden,
    };
  }

  async update(id: number, data: any) {
    const result = await this.pool.query(
      `UPDATE "ORDEN_CLINICA"
       SET "tipoOrden" = $1, "prioridadOrden" = $2, "indicacionClinica" = $3, "updatedOrden" = CURRENT_TIMESTAMP
       WHERE "idOrden" = $4
       RETURNING "idOrden", "idHce", "idDoc", "tipoOrden", "prioridadOrden", "indicacionClinica", "createdOrden", "updatedOrden"`,
      [data.tipoOrden, data.prioridadOrden, data.indicacionClinica, id],
    );

    const row = result.rows?.[0];
    if (!row) return null;

    return {
      idOrden: row.idOrden,
      idHce: row.idHce,
      idDoc: row.idDoc,
      tipoOrden: row.tipoOrden,
      prioridadOrden: row.prioridadOrden,
      indicacionClinica: row.indicacionClinica,
      createdOrden: row.createdOrden,
      updatedOrden: row.updatedOrden,
    };
  }

  async delete(id: number) {
    const result = await this.pool.query(
      `DELETE FROM "ORDEN_CLINICA" WHERE "idOrden" = $1`,
      [id],
    );

    return result.rowCount;
  }
}
