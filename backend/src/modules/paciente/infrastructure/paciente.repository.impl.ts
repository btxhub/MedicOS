
import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class PacienteRepositoryImpl {
  constructor(@Inject(Pool) private readonly pool: Pool) {}

  async findAll(): Promise<any[]> {
    const result = await this.pool.query(`SELECT * FROM paciente`);
    return result.rows;
  }

  async findById(id: number): Promise<any> {
    const result = await this.pool.query(
      `SELECT * FROM paciente WHERE idpac = $1`,
      [id],
    );
    return result.rows[0];
  }

  async create(data: any): Promise<any> {
    const {
      docIdPac,
      nomPac,
      apePatPac,
      apeMatPac,
      fechaNacPac,
      sexoPac,
      grupoSangPac,
      factorRhPac,
      activoPac,
    } = data;

    const result = await this.pool.query(
      `INSERT INTO paciente (
        docidpac,
        nompac,
        apepatpac,
        apematpac,
        fechanacpac,
        sexopac,
        gruposangpac,
        factorrhpac,
        activopac
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *`,
      [
        docIdPac,
        nomPac,
        apePatPac,
        apeMatPac,
        fechaNacPac,
        sexoPac,
        grupoSangPac,
        factorRhPac,
        activoPac,
      ],
    );

    return result.rows[0];
  }
}
