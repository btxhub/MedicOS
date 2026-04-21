// ARCHIVO: /home/btx/MedicOS/backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { IntegracionesModule } from './modules/integraciones/integraciones.module';
import { TraduccionModule } from './core/i18n/traduccion.module';
import { SistemaModule } from './modules/sistema/sistema.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { HceModule } from './modules/hce/hce.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { SuscripcionModule } from './modules/suscripcion/suscripcion.module';
import { PublicidadModule } from './modules/publicidad/publicidad.module';
import { DetalleClinicoModule } from './modules/detalle-clinico/detalle-clinico.module';

@Module({
  imports: [
    IntegracionesModule,
    TraduccionModule,
    SistemaModule,
    PacienteModule,
    HceModule,
    UsuarioModule,
    SuscripcionModule,
    PublicidadModule,
    DetalleClinicoModule,
  ],
})
export class AppModule {}