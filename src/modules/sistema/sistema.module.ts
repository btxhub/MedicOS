// ARCHIVO: src/modules/sistema/sistema.module.ts

import { Module } from '@nestjs/common';
import { SistemaController } from './sistema.controller';

import { LogRepositoryImpl } from './infrastructure/repositories/log.repository.impl';
import { CreateLogUseCase } from './application/use-cases/create-log.usecase';

@Module({
  controllers: [SistemaController],
  providers: [
    CreateLogUseCase,
    {
      provide: 'LogRepository',
      useClass: LogRepositoryImpl,
    },
  ],
  exports: [
    CreateLogUseCase,
    'LogRepository',
  ],
})
export class SistemaModule {}