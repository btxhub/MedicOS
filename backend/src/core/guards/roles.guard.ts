import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class RolesGuard implements CanActivate {
  private pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  });

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user?.idUsuario) throw new UnauthorizedException();

    const { rows } = await this.pool.query(
      `SELECT rol FROM usuario WHERE id = $1`,
      [user.idUsuario],
    );

    if (!rows.length) throw new UnauthorizedException();

    request.roles = rows;

    return true;
  }
}