// ARCHIVO: src/app.module.ts

import { Module } from '@nestjs/common';
import { IntegracionesModule } from './modules/integraciones/integraciones.module';
import { TraduccionModule } from './core/i18n/traduccion.module';
import { SistemaModule } from './modules/sistema/sistema.module';
import { PacienteModule } from './modules/paciente/paciente.module';

@Module({
  imports: [
    IntegracionesModule,
    TraduccionModule,
    SistemaModule,
    PacienteModule,
  ],
})
export class AppModule {}