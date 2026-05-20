// ARCHIVO: src/core/security/auth/auth.service.ts

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(@Inject(Pool) private readonly pool: Pool) {}

  async login(emailAcceso: string, password: string) {
    const result = await this.pool.query(
      `SELECT 
        u.idUsuario,
        u.activoUsuario,
        a.passHashAcceso,
        a.activoAcceso,
        a.rolesAcceso
       FROM USUARIO u
       INNER JOIN ACCESO a ON a.idUsuario = u.idUsuario
       WHERE a.emailAcceso = $1`,
      [emailAcceso],
    );

    const user = result.rows?.[0];

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (!user.activoUsuario || !user.activoAcceso) {
      throw new UnauthorizedException('Usuario inactivo');
    }

    const isValid = await bcrypt.compare(password, user.passHashAcceso);

    if (!isValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const token = jwt.sign(
      { idUsuario: user.idUsuario, rolesAcceso: user.rolesAcceso },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' },
    );

    await this.pool.query(
      `INSERT INTO LOG (
        idUsuario, accionLog, moduloLog, entidadLog, entidadRefLog, fechaLog, ipLog
      ) VALUES ($1,'LOGIN','AUTH','USUARIO',$1,NOW(),$2)`,
      [user.idUsuario, 'system'],
    );

    return {
      token,
      idUsuario: user.idUsuario,
      rolesAcceso: user.rolesAcceso,
    };
  }
}