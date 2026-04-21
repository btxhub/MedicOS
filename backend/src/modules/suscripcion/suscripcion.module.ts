import { Module } from '@nestjs/common';
import { SuscripcionController } from './suscripcion.controller';

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