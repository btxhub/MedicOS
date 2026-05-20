import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { SuscripcionController } from './infrastructure/suscripcion.controller';

import { CreateSuscripcionUseCase } from './application/use-cases/create-suscripcion.usecase';
import { UpdateSuscripcionUseCase } from './application/use-cases/update-suscripcion.usecase';
import { DeleteSuscripcionUseCase } from './application/use-cases/delete-suscripcion.usecase';
import { GetSuscripcionByIdUseCase } from './application/use-cases/get-suscripcion-by-id.usecase';

import { CreatePagoSuscripcionUseCase } from './application/use-cases/create-pago-suscripcion.usecase';
import { GetPagoSuscripcionByIdUseCase } from './application/use-cases/get-pago-suscripcion-by-id.usecase';
import { UpdatePagoSuscripcionUseCase } from './application/use-cases/update-pago-suscripcion.usecase';
import { DeletePagoSuscripcionUseCase } from './application/use-cases/delete-pago-suscripcion.usecase';

import { SuscripcionRepositoryImpl } from './infrastructure/repositories/suscripcion.repository.impl';

@Module({
  controllers: [SuscripcionController],
  providers: [
    {
      provide: Pool,
      useFactory: () =>
        new Pool({
          connectionString: process.env.DATABASE_URL,
        }),
    },

    CreateSuscripcionUseCase,
    UpdateSuscripcionUseCase,
    DeleteSuscripcionUseCase,
    GetSuscripcionByIdUseCase,

    CreatePagoSuscripcionUseCase,
    GetPagoSuscripcionByIdUseCase,
    UpdatePagoSuscripcionUseCase,
    DeletePagoSuscripcionUseCase,

    {
      provide: 'SuscripcionRepository',
      useClass: SuscripcionRepositoryImpl,
    },
  ],
})
export class SuscripcionModule {}