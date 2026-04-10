import { Module } from '@nestjs/common';
import { LogRepositoryImpl } from './infrastructure/repositories/log.repository.impl';
import { CreateLogUseCase } from './application/use-cases/create-log.usecase';

@Module({
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