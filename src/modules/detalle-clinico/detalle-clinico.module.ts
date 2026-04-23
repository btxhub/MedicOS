// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/detalle-clinico.module.ts

import { Module } from '@nestjs/common';
import { Pool } from 'pg';

// Controllers
import { DiagnosticoController } from './presentation/controllers/diagnostico.controller';
import { TratamientoController } from './presentation/controllers/tratamiento.controller';
import { RecetaController } from './presentation/controllers/receta.controller';
import { AdjuntoController } from './presentation/controllers/adjunto.controller';
import { EvolucionController } from './presentation/controllers/evolucion.controller';
import { SignosVitalesController } from './presentation/controllers/signos-vitales.controller';

// Implementaciones
import { DiagnosticoRepositoryImpl } from './infrastructure/repositories/diagnostico.repository.impl';
import { TratamientoRepositoryImpl } from './infrastructure/repositories/tratamiento.repository.impl';
import { RecetaRepositoryImpl } from './infrastructure/repositories/receta.repository.impl';
import { AdjuntoRepositoryImpl } from './infrastructure/repositories/adjunto.repository.impl';
import { EvolucionRepositoryImpl } from './infrastructure/repositories/evolucion.repository.impl';
import { SignosVitalesRepositoryImpl } from './infrastructure/repositories/signos-vitales.repository.impl';

// UseCases diagnóstico
import {
  CreateDiagnosticoUseCase,
  UpdateDiagnosticoUseCase,
  DeleteDiagnosticoUseCase,
  GetDiagnosticoByIdUseCase,
  GetDiagnosticoByHceUseCase,
} from './application/use-cases';

// UseCases tratamiento
import {
  CreateTratamientoUseCase,
  UpdateTratamientoUseCase,
  DeleteTratamientoUseCase,
  GetTratamientoByIdUseCase,
  GetTratamientoByHceUseCase,
} from './application/use-cases';

// UseCases receta
import {
  CreateRecetaUseCase,
  UpdateRecetaUseCase,
  DeleteRecetaUseCase,
  GetRecetaByIdUseCase,
  GetRecetaByHceUseCase,
} from './application/use-cases';

// UseCases adjunto
import {
  CreateAdjuntoUseCase,
  UpdateAdjuntoUseCase,
  DeleteAdjuntoUseCase,
  GetAdjuntoByIdUseCase,
  GetAdjuntoByHceUseCase,
} from './application/use-cases';

// UseCases evolucion
import {
  CreateEvolucionUseCase,
  UpdateEvolucionUseCase,
  DeleteEvolucionUseCase,
  GetEvolucionByIdUseCase,
  GetEvolucionByHceUseCase,
} from './application/use-cases';

// UseCases signos vitales
import {
  CreateSignosVitalesUseCase,
  UpdateSignosVitalesUseCase,
  DeleteSignosVitalesUseCase,
  GetSignosVitalesByIdUseCase,
  GetSignosVitalesByHceUseCase,
} from './application/use-cases';

@Module({
  controllers: [
    DiagnosticoController,
    TratamientoController,
    RecetaController,
    AdjuntoController,
    EvolucionController,
    SignosVitalesController,
  ],
  providers: [
    {
      provide: Pool,
      useFactory: () => new Pool({ connectionString: process.env.DATABASE_URL }),
    },

    { provide: 'DiagnosticoRepository', useClass: DiagnosticoRepositoryImpl },
    { provide: 'TratamientoRepository', useClass: TratamientoRepositoryImpl },
    { provide: 'RecetaRepository', useClass: RecetaRepositoryImpl },
    { provide: 'AdjuntoRepository', useClass: AdjuntoRepositoryImpl },
    { provide: 'EvolucionRepository', useClass: EvolucionRepositoryImpl },
    { provide: 'SignosVitalesRepository', useClass: SignosVitalesRepositoryImpl },

    CreateDiagnosticoUseCase,
    UpdateDiagnosticoUseCase,
    DeleteDiagnosticoUseCase,
    GetDiagnosticoByIdUseCase,
    GetDiagnosticoByHceUseCase,

    CreateTratamientoUseCase,
    UpdateTratamientoUseCase,
    DeleteTratamientoUseCase,
    GetTratamientoByIdUseCase,
    GetTratamientoByHceUseCase,

    CreateRecetaUseCase,
    UpdateRecetaUseCase,
    DeleteRecetaUseCase,
    GetRecetaByIdUseCase,
    GetRecetaByHceUseCase,

    CreateAdjuntoUseCase,
    UpdateAdjuntoUseCase,
    DeleteAdjuntoUseCase,
    GetAdjuntoByIdUseCase,
    GetAdjuntoByHceUseCase,

    CreateEvolucionUseCase,
    UpdateEvolucionUseCase,
    DeleteEvolucionUseCase,
    GetEvolucionByIdUseCase,
    GetEvolucionByHceUseCase,

    CreateSignosVitalesUseCase,
    UpdateSignosVitalesUseCase,
    DeleteSignosVitalesUseCase,
    GetSignosVitalesByIdUseCase,
    GetSignosVitalesByHceUseCase,
  ],
})
export class DetalleClinicoModule {}