
// ARCHIVO: src/modules/paciente/paciente.module.ts

import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { PacienteController } from './presentation/controllers/paciente.controller';
import { PacienteRepositoryImpl } from './infrastructure/paciente.repository.impl';

import { GetAllPacientesUseCase } from './application/use-cases/get-all-pacientes.usecase';
import { GetPacienteByIdUseCase } from './application/use-cases/get-paciente-by-id.usecase';
import { CreatePacienteUseCase } from './application/use-cases/create-paciente.usecase';

@Module({
  controllers: [PacienteController],
  providers: [
    {
      provide: Pool,
      useFactory: () =>
        new Pool({
          connectionString: process.env.DATABASE_URL,
        }),
    },
    {
      provide: 'PacienteRepository',
      useClass: PacienteRepositoryImpl,
    },
    GetAllPacientesUseCase,
    GetPacienteByIdUseCase,
    CreatePacienteUseCase,
  ],
})
export class PacienteModule {}
