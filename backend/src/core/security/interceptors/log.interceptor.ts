// ARCHIVO: /home/btx/MedicOS/backend/src/core/security/interceptors/log.interceptor.ts

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Pool } from 'pg';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  private pool = new Pool({
    user: 'app_user',
    password: 'app_password',
    host: '127.0.0.1',
    port: 5432,
    database: 'medicos',
  });

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const usuario = request.usuario;
    const metodo = request.method;
    const url = request.url;

    const usuarioId = usuario?.idUsuario || null;

    return next.handle().pipe(
      tap(async () => {
        await this.pool.query(
          `INSERT INTO log (usuario_id, evento, descripcion, created_at)
           VALUES ($1, $2, $3, NOW())`,
          [usuarioId, 'ACCESS', `${metodo} ${url}`],
        );
      }),
    );
  }
}