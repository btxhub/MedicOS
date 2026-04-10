import { Module } from '@nestjs/common';
import { IntegracionesModule } from './modules/integraciones/integraciones.module';
import { TraduccionModule } from './core/i18n/traduccion.module';
import { SistemaModule } from './modules/sistema/sistema.module';

@Module({
  imports: [
    IntegracionesModule,
    TraduccionModule,
    SistemaModule
  ],
})
export class AppModule {}