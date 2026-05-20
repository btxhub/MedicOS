
// ARCHIVO: backend/src/modules/hce/hce.module.ts

import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { HceController } from './infrastructure/hce.controller';
import { HceRepositoryImpl } from './infrastructure/hce.repository.impl';

import {
  GetAllHceUseCase,
  GetHceByIdUseCase,
  CreateHceUseCase,
  UpdateHceUseCase,
  DeleteHceUseCase,
} from './application/use-cases';

@Module({
  controllers: [HceController],
  providers: [
    {
      provide: Pool,
      useFactory: () => new Pool({ connectionString: process.env.DATABASE_URL }),
    },
    {
      provide: 'HceRepository',
      useClass: HceRepositoryImpl,
    },
    GetAllHceUseCase,
    GetHceByIdUseCase,
    CreateHceUseCase,
    UpdateHceUseCase,
    DeleteHceUseCase,
  ],
  exports: [
    GetHceByIdUseCase,
    UpdateHceUseCase,
    DeleteHceUseCase,
  ],
})
export class HceModule {}
