import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

@Injectable()
export class CreateLogUseCase {
  async execute(data: {
    idUsuario: number;
    accionLog: string;
    moduloLog: string;
    entidadLog: string;
    entidadRefLog: string;
    ipLog: string;
  }) {
    await pool.query(
      `INSERT INTO log (
        idusuario,
        accionlog,
        modulolog,
        entidadlog,
        entidadreflog,
        fechalog,
        iplog
      ) VALUES ($1,$2,$3,$4,$5,NOW(),$6)`,
      [
        data.idUsuario,
        data.accionLog,
        data.moduloLog,
        data.entidadLog,
        data.entidadRefLog,
        data.ipLog,
      ],
    );

    return true;
  }
}