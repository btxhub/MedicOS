// ARCHIVO: src/modules/paciente/paciente.module.ts

import { Module } from '@nestjs/common';
import { PacienteController } from './presentation/controllers/paciente.controller';
import { GetAllPacientesUseCase } from './application/use-cases/get-all-pacientes.usecase';

@Module({
  controllers: [PacienteController],
  providers: [GetAllPacientesUseCase],
})
export class PacienteModule {}