// REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { IntegracionesModule } from './modules/integraciones/integraciones.module';
import { TraduccionModule } from './core/i18n/traduccion.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    IntegracionesModule,
    TraduccionModule
  ],
})
export class AppModule {}