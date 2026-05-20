// ARCHIVO: src/core/security/guards/auth.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Pool } from 'pg';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(Pool) private readonly pool: Pool) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('NO_TOKEN');
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('INVALID_TOKEN_FORMAT');
    }

    const token = authHeader.substring(7).trim();

    let payload: any;

    try {
      payload = jwt.verify(token, process.env.JWT_SECRET as string);
    } catch {
      throw new UnauthorizedException('INVALID_TOKEN');
    }

    if (!payload?.idUsuario) {
      throw new UnauthorizedException('INVALID_TOKEN');
    }

    const result = await this.pool.query(
      `SELECT id FROM usuario WHERE id = $1`,
      [payload.idUsuario],
    );

    const usuario = result.rows[0];

    if (!usuario) {
      throw new UnauthorizedException('USUARIO_NO_EXISTE');
    }

    request.usuario = {
      idUsuario: usuario.id,
      roles: payload.rolesAcceso || [],
    };

    return true;
  }
}