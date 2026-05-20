// ARCHIVO: /home/btx/MedicOS/backend/src/app.module.ts

import { Module, Global } from '@nestjs/common';
import { Pool } from 'pg';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { AuthGuard } from './core/security/guards/auth.guard';
import { RolesGuard } from './core/security/guards/roles.guard';
import { LogInterceptor } from './core/security/interceptors/log.interceptor';

import { UsuarioModule } from './modules/usuario/usuario.module';
import { HceModule } from './modules/hce/hce.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { SuscripcionModule } from './modules/suscripcion/suscripcion.module';
import { PublicidadModule } from './modules/publicidad/publicidad.module';
import { DetalleClinicoModule } from './modules/detalle-clinico/detalle-clinico.module';

@Global()
@Module({
  providers: [
    {
      provide: Pool,
      useFactory: () =>
        new Pool({
          user: 'app_user',
          password: 'app_password',
          host: '127.0.0.1',
          port: 5432,
          database: 'medicos',
        }),
    },
  ],
  exports: [Pool],
})
export class DatabaseModule {}

@Module({
  imports: [
    DatabaseModule,
    UsuarioModule,
    HceModule,
    PacienteModule,
    SuscripcionModule,
    PublicidadModule,
    DetalleClinicoModule,
  ],
  controllers: [],
  providers: [
    AuthGuard,
    RolesGuard,
    {
      provide: APP_INTERCEPTOR,
      useClass: LogInterceptor,
    },
  ],
})
export class AppModule {}