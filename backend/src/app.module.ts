import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { PacientesModule } from "./pacientes/pacientes.module";
import { IntegracionesModule } from "./modules/integraciones/integraciones.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PacientesModule,
    IntegracionesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}