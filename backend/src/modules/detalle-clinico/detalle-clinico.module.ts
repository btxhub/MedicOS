import { Module } from '@nestjs/common';
import { Pool } from 'pg';

// Controllers
import { DiagnosticoController } from './presentation/controllers/diagnostico.controller';
import { AdjuntoController } from './presentation/controllers/adjunto.controller';
import { EvolucionController } from './presentation/controllers/evolucion.controller';
import { TratamientoController } from './presentation/controllers/tratamiento.controller';
import { RecetaController } from './presentation/controllers/receta.controller';

// UseCases Diagnóstico
import { CreateDiagnosticoUseCase } from './application/use-cases/create-diagnostico.usecase';
import { UpdateDiagnosticoUseCase } from './application/use-cases/update-diagnostico.usecase';
import { GetDiagnosticoByIdUseCase } from './application/use-cases/get-diagnostico-by-id.usecase';
import { GetDiagnosticoByHceUseCase } from './application/use-cases/get-diagnostico-by-hce.usecase';
import { DeleteDiagnosticoUseCase } from './application/use-cases/delete-diagnostico.usecase';

// UseCases Adjunto
import { CreateAdjuntoUseCase } from './application/use-cases/create-adjunto.usecase';
import { UpdateAdjuntoUseCase } from './application/use-cases/update-adjunto.usecase';
import { DeleteAdjuntoUseCase } from './application/use-cases/delete-adjunto.usecase';
import { GetAdjuntoByIdUseCase } from './application/use-cases/get-adjunto-by-id.usecase';
import { GetAdjuntoByHceUseCase } from './application/use-cases/get-adjunto-by-hce.usecase';

// UseCases Evolución
import { CreateEvolucionUseCase } from './application/use-cases/create-evolucion.usecase';
import { UpdateEvolucionUseCase } from './application/use-cases/update-evolucion.usecase';
import { DeleteEvolucionUseCase } from './application/use-cases/delete-evolucion.usecase';
import { GetEvolucionByIdUseCase } from './application/use-cases/get-evolucion-by-id.usecase';
import { GetEvolucionByHceUseCase } from './application/use-cases/get-evolucion-by-hce.usecase';

// UseCases Tratamiento
import { CreateTratamientoUseCase } from './application/use-cases/create-tratamiento.usecase';
import { UpdateTratamientoUseCase } from './application/use-cases/update-tratamiento.usecase';
import { GetTratamientoByIdUseCase } from './application/use-cases/get-tratamiento-by-id.usecase';
import { GetTratamientoByHceUseCase } from './application/use-cases/get-tratamiento-by-hce.usecase';

// UseCases Receta
import { CreateRecetaUseCase } from './application/use-cases/create-receta.usecase';
import { UpdateRecetaUseCase } from './application/use-cases/update-receta.usecase';
import { DeleteRecetaUseCase } from './application/use-cases/delete-receta.usecase';
import { GetRecetaByIdUseCase } from './application/use-cases/get-receta-by-id.usecase';
import { GetRecetaByHceUseCase } from './application/use-cases/get-receta-by-hce.usecase';

// Repositories
import { DiagnosticoRepositoryImpl } from './infrastructure/repositories/diagnostico.repository.impl';
import { AdjuntoRepositoryImpl } from './infrastructure/repositories/adjunto.repository.impl';
import { EvolucionRepositoryImpl } from './infrastructure/repositories/evolucion.repository.impl';
import { TratamientoRepositoryImpl } from './infrastructure/repositories/tratamiento.repository.impl';
import { RecetaRepositoryImpl } from './infrastructure/repositories/receta.repository.impl';

@Module({
  controllers: [
    DiagnosticoController,
    AdjuntoController,
    EvolucionController,
    TratamientoController,
    RecetaController,
  ],
  providers: [
    {
      provide: Pool,
      useFactory: () =>
        new Pool({
          connectionString: process.env.DATABASE_URL,
        }),
    },

    // Diagnóstico
    {
      provide: 'DiagnosticoRepository',
      useFactory: (pool: Pool) =>
        new DiagnosticoRepositoryImpl(pool),
      inject: [Pool],
    },

    // Adjunto
    {
      provide: 'AdjuntoRepository',
      useFactory: (pool: Pool) =>
        new AdjuntoRepositoryImpl(pool),
      inject: [Pool],
    },

    // Evolución
    {
      provide: 'EvolucionRepository',
      useFactory: (pool: Pool) =>
        new EvolucionRepositoryImpl(pool),
      inject: [Pool],
    },

    // Tratamiento
    {
      provide: 'TratamientoRepository',
      useFactory: (pool: Pool) =>
        new TratamientoRepositoryImpl(pool),
      inject: [Pool],
    },

    // Receta
    {
      provide: 'RecetaRepository',
      useFactory: (pool: Pool) =>
        new RecetaRepositoryImpl(pool),
      inject: [Pool],
    },

    // UseCases Diagnóstico
    CreateDiagnosticoUseCase,
    UpdateDiagnosticoUseCase,
    GetDiagnosticoByIdUseCase,
    GetDiagnosticoByHceUseCase,
    DeleteDiagnosticoUseCase,

    // UseCases Adjunto
    CreateAdjuntoUseCase,
    UpdateAdjuntoUseCase,
    DeleteAdjuntoUseCase,
    GetAdjuntoByIdUseCase,
    GetAdjuntoByHceUseCase,

    // UseCases Evolución
    CreateEvolucionUseCase,
    UpdateEvolucionUseCase,
    DeleteEvolucionUseCase,
    GetEvolucionByIdUseCase,
    GetEvolucionByHceUseCase,

    // UseCases Tratamiento
    CreateTratamientoUseCase,
    UpdateTratamientoUseCase,
    GetTratamientoByIdUseCase,
    GetTratamientoByHceUseCase,

    // UseCases Receta
    CreateRecetaUseCase,
    UpdateRecetaUseCase,
    DeleteRecetaUseCase,
    GetRecetaByIdUseCase,
    GetRecetaByHceUseCase,
  ],
})
export class DetalleClinicoModule {}